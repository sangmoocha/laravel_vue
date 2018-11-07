<style>
	.memo {
		/* memo 자동 줄바꿈 */
		word-wrap: break-word; /* Internet Explorer 5.5+ */
		white-space: pre-wrap; /* css-3 */
		white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
		white-space: -pre-wrap; /* Opera 4-6 */
		white-space: -o-pre-wrap; /* Opera 7 */
		word-break:break-all;
	}
	.thead-dark tr th{
		padding: 10px;
		white-space:nowrap;
	}
	.nowrap{
		white-space:nowrap;
	}
</style>

<template>
    <div class="container pt-3">
        <div class="row justify-content-center pt-2">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
						사용자 관리
						<div class="card-tools col text-right pt-1">
							<b-btn  variant="btn btn-primary btn-sm" 
									v-b-popover.hover.Left="'사용자 추가'"
									@click="addUser()">
								<i class="fas fa-user-plus"></i>
							</b-btn>
						</div>
					</div>
					<div class="card-body p-0">
						<b-table :items="items" 
								 :fields="usersfields" 
								 hover responsive
								 head-variant="dark" 
								 foot-variant="light">
							<template slot="index" slot-scope="data">
								{{data.index + user.from}}
							</template>

							<template slot="authority" slot-scope="data">
								{{ auth(data.item.authority) }}
							</template>

							<template slot="etc" slot-scope="row">
								<!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
								<b-button size="sm" 
										  @click.stop="row.toggleDetails" 
										  variant="link"
										  :hidden="isMemo(row.item.etc)">
									{{ row.detailsShowing ? '닫기' : '보기'}}
								</b-button>
							</template>

							<template slot="row-details" slot-scope="row">
								<b-card>
									<b-row class="mb-2">
										<b-col class="memo">{{ row.item.etc }}</b-col>
									</b-row>
								</b-card>
							</template>

							<template slot="created_at" slot-scope="data">
								{{data.item.created_at | myDate}}
							</template>
							
							<template slot="active" slot-scope="data">
								<b-link v-b-popover.hover="'편집'" href="#" @click="editUser(data.item)">
									<i class="fa fa-edit blue"></i>
								</b-link>
								/
								<b-link  href="#" v-b-popover.hover="'삭제'" @click="deleteUser(data.item.id)">
									<i class="fa fa-trash red"></i>
								</b-link >
							</template>
						</b-table>

					</div>
					<div class="card-footer text-muted text-center">
						작업중...
					</div>
				</div>
				
				<!-- Modal Component -->
				<b-modal 
					id           = "modal-center" 
					button-size  = "sm"
					ref          = "modal"
					@ok          = "handleOk"
					:title       = "form.name"
					:ok-title    = "btnTitle"
					cancel-title = "취소"
					centered 
				>
					<b-form @submit.stop.prevent="handleOk">
						<b-container fluid>
							<b-input-group prepend='<i class="fas fa-user-tie"></i>' class="my-1">
								<b-form-input v-model="form.name" 
											  placeholder="Enter your name" 
											  autofocus 
											  type="text"
											  name="name"
											  maxlength="20"
											  :class="{ 'is-invalid': form.errors.has('name') }"
											  ></b-form-input>
								<has-error :form="form" field="name"></has-error>
							</b-input-group>
							<b-input-group prepend='<i class="fas fa-envelope"></i>' class="my-1">
								<b-form-input v-model="form.email" 
											  placeholder="Enter your email" 
											  name="email"
											  :class="{ 'is-invalid': form.errors.has('email') }"
											  type="email"></b-form-input>
								<has-error :form="form" field="email"></has-error>
							</b-input-group>
							<b-input-group prepend='<i class="fas fa-unlock-alt"></i>' class="my-1">
								<b-form-input v-model="form.password" 
											  placeholder="Enter your password"
											  name="password"
											  :class="{ 'is-invalid': form.errors.has('password') }"
											  type="password"></b-form-input>
								<has-error :form="form" field="password"></has-error>
							</b-input-group>
							<b-input-group prepend='<i class="fas fa-user-secret"></i>' class="my-1">
								<b-form-select v-model="form.authority" 
											   :class="{ 'is-invalid': form.errors.has('authority') }"
											   name="authority"
											   :options="Authorities"></b-form-select>
								<has-error :form="form" field="authority"></has-error>
							</b-input-group>
							<b-input-group prepend='<i class="fas fa-archive"></i>' class="my-1">
								<b-form-textarea id="textarea1"
												 v-model="form.etc" 
												 placeholder="Enter something"
												 name="etc"
												 maxlength="191"
												 :class="{ 'is-invalid': form.errors.has('etc') }"
												 :rows="1"
												 :max-rows="6">
								</b-form-textarea>
								<pre class="mt-1"></pre>
								<has-error :form="form" field="etc"></has-error>
							</b-input-group>
						</b-container>
					</b-form>
				</b-modal>
            </div>
        </div>
    </div>
</template>

<script>
	// moment
	import moment from 'moment';
	moment.locale('ko');

	Vue.filter('myDate',function(created){
		// return moment(created).format('MMMM Do YYYY, h:mm:ss a');
		return moment(created).format('ll');
	});

	// Vue.filter('auth', function(Authoritie){
		
	// });

    export default {
		data () {
			return {
				// users row 값
				items: [],
				user:{},
				// 테이블 컬럼 설정
				usersfields: [
					{
						key: 'index',
						label: '#',
					},
					{
						key: 'name',
						label: '성명',
						sortable: true,
						class: "nowrap",
					},
					{
						key: 'email',
						label: '이메일',
						sortable: true,
					},
					{
						key: 'authority',
						label: '등급',
						sortable: true,
						class: "nowrap",
					},
					{
						key: 'etc',
						label: '메모',
						class: 'memo',
					},
					{
						key: 'created_at',
						label: '등록일',
						sortable: true,
						class: "nowrap",
					},
					{
						key: 'active',
						label: '수정/삭제',
						class: "nowrap",
						// Variant applies to the whole column, including the header and footer
						// variant: 'danger'
					},
				],
				// 
				editMode: false,
				btnTitle: '',
				repassword: '',
				// 모달 변수
				form: new Form({
					id        : '',
					name      : '',
					email     : '',
					password  : null,
					authority : 'guest',
					photo     : "user.jpg",
					etc       : '',
					pwd       : null,
				}),
				//select options 변수
				Authorities: [
					{ value: 'guest', text: '손님' },
					{ value: 'user', text: '사용자' },
					{ value: 'manager', text: '관리자' },
					{ value: 'developer', text: '개발자'},
					{ value: 'admin', text: '운영자'}
				],
				
			}
		}, 
		methods: {
			auth(Authoritie){
				var auth = this.Authorities.filter(function (rating) { return rating.value == Authoritie });
				return auth[0].text;
			},
			isMemo(item){
				if( item == null){	
					return true;
				}else{
					return false;
				}
			},
			loadUsers(){
				axios.get("api/user")
					 .then(({data}) => { 
					   this.items = data.data,
					   this.user = data
					  });
			},
			addUser(){
				this.editMode = false;
				this.btnTitle = "추가";
				this.form.reset();		
				this.$refs.modal.show();
			},
			createUser(){
				console.log("createUser 호출");
				this.form.post('api/user')
					.then(()=>{
						this.$refs.modal.hide()
					});
			},
			editUser(item){
				this.editMode = true;
				this.btnTitle = "변경";
				this.form.reset();		
				this.$refs.modal.show();
				this.repassword = item.password;
				this.form.fill (item);
			},
			updateUser(){
				
				if(this.repassword===this.form.password){
					this.form.pwd = true;
				} else {
					this.form.pwd = null;
				}
				this.form.put('api/user/'+this.form.id)
					.then(() => {
						// success
						console.log("변경호출");
						this.$refs.modal.hide()
					})
					.catch(() => {
					
					})
			},
			deleteUser(userID){
				
				this.form.delete('api/user/'+userID)
					.then(() => {
						console.log("삭제 : " + userID);
					}).catch(()=>{
					
					})
			},			
			handleOk (evt) {
				// Prevent modal from closing
				evt.preventDefault();
				this.editMode ? this.updateUser() : this.createUser();
    		},
		},
		created() {
			this.loadUsers();
		}
	}
</script>