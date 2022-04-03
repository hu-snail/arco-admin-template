// 引入action_type
import { SET_ROUTERS } from "@/store/action_types";
import { getRoutersStore, setRoutersStore } from "@/utils/router";

// 初始化
const initState = { routers: getRoutersStore() || [], currentRouter: {} };

export default function routerReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ROUTERS:
      setRoutersStore(payload);
      return Object.assign(state, { routers: payload });
    default:
      return state;
  }
}
