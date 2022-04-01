// 引入action_type
import { GET_USERINFO, SET_USERINFO } from "@/store/action_types";

// 初始化
const initState = { name: "hu-snail", age: 27 };
export default function userReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case SET_USERINFO:
      return Object.assign(preState, { ...data });
    case GET_USERINFO:
      return preState;
    default:
      return preState;
  }
}
