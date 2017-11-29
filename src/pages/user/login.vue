<template>
  <div class="login-body">
    <div class="loginWarp"
         @keyup.enter="submit_form">
      <div class="login-title">
        <img src="#"/>
      </div>
      <div class="login-form">
         <b-form-group id="fieldsetHorizontal"
                horizontal
                :feedback="username_feedback"
                :label-cols="4"
                breakpoint="md"
                label="Username"
                valid-feedback="Thank you"
                :state="username_state"
                >
            <b-form-input id="input1" placeholder="Enter your username" v-model.trim="username"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                horizontal
                :feedback="password_feedback"
                :label-cols="4"
                breakpoint="md"
                label="Password"
                valid-feedback="Thank you"
                :state="password_state"
                >
            <b-form-input type="password" placeholder="Enter your password"  v-model.trim="password"></b-form-input>
          </b-form-group>
          <b-button variant="success" type="submit" @click="submit_form" >login</b-button>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapActions} from 'vuex'
  import {SET_USER_INFO} from 'store/actions/type'

  export default{
    data(){
      return {
        username : "",
        password : "",
        //请求时的loading效果
        load_data: false
      }
    },
    computed :{
      username_feedback () {
        return this.username.length > 0 ? 'Enter at least 4 characters' : 'Please enter something'
      },
      
      username_state () {
        return this.username.length > 4 ? 'valid' : 'invalid'
      },
      password_feedback () {
        return this.password.length > 0 ? 'Enter at least 4 characters' : 'Please enter something'
      },
      
      password_state () {
        return this.password.length > 4 ? 'valid' : 'invalid'
      }
    }
    ,
    methods: {
      ...mapActions({
        set_user_info: SET_USER_INFO
      }),
      //提交
      submit_form() {
        //alert("submit")
        // if(this.name.length > 0)
        this.set_user_info(
          {
            user: "1233",
            login: true
          }
        )
        setTimeout(this.$router.push({path: '/'}), 500)
      }
    }
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  .login-body {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(./images/login_bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .loginWarp {
      width: 300px;
      padding: 25px 15px;
      margin: 100px auto;
      background-color: #fff;
      border-radius: 5px;
      .login-title {
        margin-bottom: 25px;
        text-align: center;
      }
      .login-item {
        .el-input__inner {
          margin: 0 !important;
        }
      }
      .form-input {
        input {
          margin-bottom: 15px;
          font-size: 12px;
          height: 40px;
          border: 1px solid #eaeaec;
          background: #eaeaec;
          border-radius: 5px;
          color: #555;
        }
      }
      .form-submit {
        width: 100%;
        color: #fff;
        border-color: #6bc5a4;
        background: #6bc5a4;
        &:active, &:hover {
          border-color: #6bc5a4;
          background: #6bc5a4;
        }
      }
    }
  }
</style>
