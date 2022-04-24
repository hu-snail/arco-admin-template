// 引入action_type
import {
  GET_USERINFO,
  LOGOUT,
  LOGIN,
  SET_PERMISSIONS,
  SET_ACCESS_TOKEN
} from '@/store/action_types';
import {
  getAccessToken, setAccessToken, removeAccessToken
} from '@/utils/accessToken';

// 初始化
const initValue = {
  accessToken: getAccessToken(),
  username: '',
  avatar: '',
  permissions: []
};

export default function user(state = initValue, action) {
  const { type, payload, call } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        accessToken: payload
      };
    case GET_USERINFO:
      Object.assign(state, {
        ...payload
      });
      return call && call(payload.permissions);
    case SET_PERMISSIONS:
      if (!payload.length) removeAccessToken();
      Object.assign(state, {
        permissions: payload
      });
      return call && call(payload);
    case LOGOUT:
      return window.location.reload();
    case SET_ACCESS_TOKEN:
      return setAccessToken(payload.accessToken ? payload.accessToken : '');
    default:
      return state;
  }
}
