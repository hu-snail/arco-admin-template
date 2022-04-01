// 引入action_type
import { SET_ROUTERS } from "@/store/action_types";

// 初始化
const initState = { routers: [] };
export default function routerReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case SET_ROUTERS:
      return { ...preState, routers: data };
    default:
      return preState;
  }
}
