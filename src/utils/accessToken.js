import { setting } from '@/config/setting';
import {
  localStorageGet, localStorageSet, localStorageRemove
} from './index';

const { tokenTableName } = setting;
export function getAccessToken() {
  return localStorageGet(tokenTableName);
}
export function setAccessToken(accessToken) {
  return localStorageSet(tokenTableName, accessToken);
}

export function removeAccessToken() {
  return localStorageRemove(tokenTableName);
}
