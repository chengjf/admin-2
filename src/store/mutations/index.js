
import * as type from 'store/mutations/type'

export default {
  //设置用户信息和是否登录
  [type.SET_USER_INFO](state, userinfo){
    state.user_info = userinfo || {}
    if (userinfo === null) {
      //
    } else {
      //
    }
  }
}
