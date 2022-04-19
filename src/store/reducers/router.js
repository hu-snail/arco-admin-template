// 引入action_type
import { SET_ROUTERS } from '@/store/action_types';
import { getRoutersStore, setRoutersStore, filterRouters } from '@/utils/router';
import { localRouters } from '@/routers';

// 初始化
const initState = {
  routers: getRoutersStore() || [],
  currentRouter: null
};

export default function routerReducer(state = initState, action) {
  const { type, payload } = action;
  const routers = filterRouters(localRouters, payload);

  switch (type) {
    case SET_ROUTERS:
      setRoutersStore(routers);
      return Object.assign(state, {
        routers
      });
    default:
      return state;
  }
}
