//导入模块
import axios from 'axios'
import {port_code} from 'common/port_uri'
import router from 'router'
import store from 'store'
import {SET_USER_INFO} from 'store/actions/type'
import {server_base_url} from 'common/config'

//设置用户信息action
const setUserInfo = function (user) {
  store.dispatch(SET_USER_INFO, user)
}
// 设置JWT

const getUserInfo = function (){
  console.log(store.state.user_info)
  return store.state.user_info.user.token
}

export default function fetch(options) {
  return new Promise((resolve, reject) => {

    //创建一个axios实例
    const instance = axios.create({
      //设置默认根地址
      baseURL: server_base_url,
      //设置请求超时设置
      timeout: 2000,
      //设置请求时的header
      headers: {
        'Github-url': 'https://github.com/chengjf/admin-2',
        'X-Powered-By': 'chengjf',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + getUserInfo()
      }
    })
    //请求处理
    instance(options)
      .then(({data: {code, msg, data}}) => {
        //请求成功时,根据业务判断状态
        if (code === port_code.success) {
          resolve({code, msg, data})
          return false
        } else if (code === port_code.unlogin) {
          setUserInfo(null)
          router.replace({name: "login"})
        }
        // Message.warning(msg)
        reject({code, msg, data})
      })
      .catch((error) => {
        //请求失败时,根据业务判断状态
        if (error.response) {
          let resError = error.response
          let resCode = resError.status
          let resMsg = error.message
          // Message.error('操作失败！错误原因 ' + resMsg)
          reject({code: resCode, msg: resMsg})
        }
      })
  })
}
