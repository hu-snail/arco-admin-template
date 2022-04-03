// 引入action_type
import { SET_ROUTERS } from "@/store/action_types";
import { getRoutersStore, setRoutersStore } from "@/utils/router";
import { filterRouters, localList } from "@/utils/router";
// 初始化
const initState = { routers: getRoutersStore() || [], currentRouter: {} };

export default function routerReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ROUTERS:
      const routers = filterRouters(localList(), payload);
      setRoutersStore(routers);
      return Object.assign(state, { routers });
    default:
      return state;
  }
}
