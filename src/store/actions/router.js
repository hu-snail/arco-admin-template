/**
 * @description 用户模块action
 * @author hu-snail 1217437592@qq.com
 */

import { SET_ROUTERS } from '@/store/action_types';
import { getRouters } from '@/api/routers';

/**
 * @description 获取路由
 * @param {Array} payload
 * @returns
 */
export const setRoutersHandler = () => async (dispatch) => {
  const { data } = await getRouters();
  dispatch({
    type: SET_ROUTERS,
    payload: data
  });
};
