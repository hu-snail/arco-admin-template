import request from '@/utils/request.js';

export const getResouceList = () =>
  request({
    url: '/getResouceList',
    method: 'get'
  });
