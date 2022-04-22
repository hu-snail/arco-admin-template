// ◆封装本地存储的操作
import {
  localStorageGet, localStorageSet, localStorageRemove
} from './index';

const TOKEN_KEY = 'ARCO_ADMIN_TEMPLATE';

export function getToken() {
  return localStorageGet(TOKEN_KEY);
}

export function setToken(token) {
  localStorageSet(TOKEN_KEY, token);
}

export function removeToken() {
  localStorageRemove(TOKEN_KEY);
}

export function hasToken() {
  return !!getToken();
}
