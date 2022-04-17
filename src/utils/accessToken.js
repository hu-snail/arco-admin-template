import { setting } from '@/config/setting';
const { tokenTableName } = setting;
export function getAccessToken() {
  return localStorage.getItem(tokenTableName);
}
export function setAccessToken(accessToken) {
  return localStorage.setItem(tokenTableName, accessToken);
}

export function removeAccessToken() {
  return localStorage.removeItem(tokenTableName);
}
