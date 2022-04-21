import request from '@/utils/request.js';
import { setting } from '@/config/setting';

const { tokenName } = setting;
export const login = async (data) =>
  request({
    url: '/login',
    method: 'post',
    data
  });

export const getUserInfo = (accessToken) =>
  request({
    url: '/userInfo',
    method: 'get',
    data: {
      [tokenName]: accessToken
    }
  });

export const logout = () =>
  request({
    url: '/logout',
    method: 'post'
  });

export const register = async () =>
  request({
    url: '/register',
    method: 'post'
  });
