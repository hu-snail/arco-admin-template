import request from '@/utils/request.js';

export const getWorkplace = () =>
  request({
    url: '/getWorkplace',
    method: 'get'
  });
