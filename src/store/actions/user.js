/**
 * @description 用户模块action
 * @author hu-snail 1217437592@qq.com
 */

// 引入action_type变量
import { GET_USERINFO, SET_USERINFO, LOGIN, SET_PERMISSIONS, LOGOUT, SET_ACCESS_TOKEN } from '@/store/action_types';

import { login, getUserInfo } from '@/api/user';
import { Notification, Message } from '@arco-design/web-react';
import { setRoutersHandler } from './router';

import { setting } from '@/config/setting';
const { title, tokenName } = setting;

import store from '../index';

/**
 * @description 登录
 * @param {Object} payload 用户信息
 * @returns
 */
export const loginHandler = (payload) => {
  return async (dispatch) => {
    const { data } = await login(payload);
    const accessToken = data[tokenName];
    if (accessToken) {
      await dispatch(setAccessTokenHandler({ accessToken }));
      await dispatch(setRoutersHandler());
      const hour = new Date().getHours();
      const thisTime = hour < 8 ? '早晨好' : hour <= 11 ? '早上好' : hour <= 13 ? '中午好' : hour < 18 ? '下午好' : '晚上好';
      Notification.success({
        title: `${thisTime}！`,
        content: `👏欢迎登录${title}!`,
      });
    } else Message.error(`登录接口异常，未正确返回${tokenName}...`);
    dispatch({
      type: LOGIN,
      payload: data.accessToken,
    });
  };
};

/**
 * @description 退出登录
 * @returns
 */
export const logout = () => {
  return async (dispatch) => {
    dispatch(setPermission([]));
    dispatch(setAccessTokenHandler({ accessToken: '' }));
    dispatch({
      type: LOGOUT,
      payload: '',
    });
  };
};

/**
 * @description 设置token
 * @param {string} payload
 * @returns
 */
export const setAccessTokenHandler = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: SET_ACCESS_TOKEN,
      payload,
    });
  };
};

/**
 * @description 设置权限
 * @param {Array} payload
 * @param {function} call 回调Hanns胡
 * @returns
 */
export const setPermission = (payload, call) => {
  return async (dispatch) => {
    dispatch({
      type: SET_PERMISSIONS,
      payload,
      call,
    });
  };
};

/**
 * @description 获取用户信息
 * @param {function} call
 * @returns
 */
export const getUserInfoHandler = (call) => {
  return async (dispatch) => {
    const { accessToken } = store.getState().userReducer;
    const { data } = await getUserInfo(accessToken);
    if (!data) {
      return Message.error('验证失败，请重新登录...');
    }
    const { permissions, username } = data;
    if (permissions && username && Array.isArray(permissions)) {
      dispatch({
        type: GET_USERINFO,
        payload: data,
        call,
      });
    } else {
      return Message.error('用户信息接口异常');
    }
  };
};

// 设置用户信息action
export const setUserInfo = (data) => ({ type: SET_USERINFO, data });
