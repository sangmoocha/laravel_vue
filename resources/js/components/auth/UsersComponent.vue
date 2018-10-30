<template>
    <div class="container">
        <div class="row justify-content-center  pt-2">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">
						사용자 관리
						<div class="card-tools col text-right pt-1">
							<button class="btn btn-primary btn-sm" v-b-modal.modal-center>
								<i class="fas fa-user-plus"></i>
							</button>
						</div>
					</div>
                    <div class="card-body">
                        작업중..
                    </div>
                </div>
                <!-- Modal Component -->
				<b-modal 
					id           = "modal-center" 
					button-size  = "sm"
					ref          = "modal"
					@ok          = "handleOk"
					@shown       = "focusMyElement"
					:title       = "form.name"
					ok-title     = "추가"
					cancel-title = "취소"
					centered 
				>
					<b-form @submit.stop.prevent="handleOk">
						<b-container fluid>
							<b-input-group prepend='<i class="fas fa-user-tie"></i>' class="my-1">
								<b-form-input v-model="form.name" 
											  placeholder="Enter your name" 
											  ref="focusThis" 
											  type="text"
											  name="name"
											  maxlength="10"
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
											   :options="auth"></b-form-select>
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
    export default {
        data () {
			return {
                // 모달 변수
				form: new Form({
					id        : '',
					name      : '',
					email     : '',
					password  : '',
					authority : 'guest',
					etc       : '',
				}),

				//select options 변수
				auth: [
					{ value: 'guest', text: '손님' },
					{ value: 'user', text: '사용자'},
					{ value: 'manager', text: '관리자' },
					{ value: 'developer', text: '개발자', disabled: true},
					{ value: 'admin', text: '운영자', disabled: true}
				]
			}
		},
        methods: {
            focusMyElement (e) {
				this.$refs.focusThis.focus()
		    },
			handleOk (evt) {
				// Prevent modal from closing
				evt.preventDefault();
    		},
        },
        
    }
</script>
