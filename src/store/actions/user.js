// 引入action_type变量
import { GET_USERINFO, SET_USERINFO } from "@/store/action_types";

// 导出获取用户信息action
export const getUserInfo = (data) => ({ type: GET_USERINFO, data });
// 导出设置用户信息action
export const setUserInfo = (data) => ({ type: SET_USERINFO, data });
