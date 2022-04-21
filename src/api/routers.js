import request from '@/utils/request';

export function getRouters() {
  return request({
    url: '/menu/navigate',
    method: 'get'
  });
}
