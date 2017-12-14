<template>
<v-layout justify-center align-center>
					<v-card style="width: 100%; max-width: 650px;">
						<v-form v-model="valid" ref="form" lazy-validation>
							<v-card-title class="teal lighten-2" dark>
								<v-container fluid>
									<!--<v-layout row>-->
									<v-flex xs4 md4>
										<v-subheader>
											<h2 class="white--text">登陆</h2>
										</v-subheader>
									</v-flex>

									<!--</v-layout>-->
								</v-container>
							</v-card-title>
							<v-divider></v-divider>
							<v-card-text>
								<v-container fluid>
									<v-layout row wrap>
										<v-flex xs4 md4>
											<v-subheader>用户名</v-subheader>
										</v-flex>
										<v-flex xs8 md8>
											<v-text-field
												name="username"
												label="用户名地址"
												v-model="username"
												:rules="nameRules"
												id="username_input"
												required
												validate-on-blur
											></v-text-field>
										</v-flex>
									</v-layout>
									<v-layout row>
										<v-flex xs4>
											<v-subheader>输入密码</v-subheader>
										</v-flex>
										<v-flex xs8>
											<v-text-field
												name="password"
												label="密码"
												hint="长度必须大于8且小于20"
												:rules="passwordRules"
												v-model="password"
												min="8"
												errorBag=""
												:append-icon="e1 ? 'visibility' : 'visibility_off'"
												:append-icon-cb="()=>(e1 = !e1)"
												:type="e1 ? 'password' : 'text'"
												required
												validate-on-blur
											></v-text-field>
										</v-flex>
									</v-layout>
								</v-container>
							</v-card-text>
							<v-card-actions>
								<v-container fluid>
									<v-layout justify-space-between>
										<v-btn @click="clear" color="grey" dark>取消</v-btn>
										<v-btn @click="submit" :color="mycolor" dark>登录</v-btn>
									</v-layout>
								</v-container>
							</v-card-actions>
						</v-form>
					</v-card>
				</v-layout>
</template>
<script type="text/javascript">
  import {mapActions} from 'vuex'
  import {SET_USER_INFO} from 'store/actions/type'
	import {port_user, port_code} from 'common/port_uri'

export default{
    data(){
      return {
        e1: true,
        e2: true,
        mycolor: "teal",
        valid: true,
        username: '',
        email: '',
        password: '',
        nameRules: [
          (v) => !!v || '用户名不能为空',
          (v) => v && v.length <= 20 || '用户名最大长度为20'
        ],
        emailRules: [
          (v) => !!v || '邮箱地址不能为空',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || '邮箱地址格式不正确'
        ],
        passwordRules: [
          (v) => !!v || '密码不能为空',
          //(v) => v && v.length <= 20 && v.length >= 8 || '密码长度必须大于8且小于20'
        ],
      }
    },
    computed :{
      
    },
    methods: {
      ...mapActions({
        set_user_info: SET_USER_INFO
      }),
      //提交
      submit() {
        // if(this.name.length > 0)
        if(this.$refs.form.validate()){
          // this.set_user_info(
          //   {
          //     user: "1233",
          //     login: true
          //   }
					// )
					console.log("validate")
					console.log(this.$refs.form)
					this.$fetch.api_user.login({
						username: this.username,
						password: this.password
					})
            .then(({data, msg}) => {
              this.set_user_info({
                user: data,
                login: true
              })
							// this.$message.success(msg)
							console.log("登录成功")
							console.log(data)
              setTimeout(this.$router.push({path: '/'}), 500)
            })
            .catch(({code}) => {
              this.load_data = false
              if (code === port_code.error) {
                // this.$alert({
                //   title: '温馨提示',
								// 	message: '账号和密码都为：admin',
								// 	color: 'error',
								// 	icon: 'warning'
								// })
								console.log("登录失败")
              }
						})
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  .yl-login-form{
    padding: 10px 10px;
  }
</style>
