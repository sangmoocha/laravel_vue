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
				<b-modal id      = "modal-center" 
					button-size  = "sm"
					ref          = "modal"
					@ok          = "handleOk"
					@shown       = "focusMyElement"
					title       = ""
					ok-title     = "추가"
					cancel-title = "취소"
					centered 
				>
                    <b-container fluid>
                        <b-input-group prepend='<i class="fas fa-user-tie"></i>' class="my-1">
                            <b-form-input placeholder="Enter your name" 
                                          ref="focusThis" 
                                          type="text"
                                          name="name"
                                          maxlength="10"></b-form-input>
                        </b-input-group>
                    </b-container>
                </b-modal>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            focusMyElement (e) {
				this.$refs.focusThis.focus()
		    },
			handleOk (evt) {
				// Prevent modal from closing
				evt.preventDefault();
    		},
        }
    }
</script>
