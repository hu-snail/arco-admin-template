/**
 * @description 路由处理
 * @author hu-snail 1217437592@qq.com
 */

import { localRouters } from '@/routers';
import {
  localStorageGet, localStorageSet, localStorageRemove
} from './index';

const routeMap = new Map();

/**
 * @description 根据后端配置路由过滤
 * @param {Array} localList 本地路由列表
 * @param {Array} reqList  请求路由列表
 * @returns
 */
export function filterRouters(localList, reqList) {
  const list = [];
  // 判断接口返回的路由数组
  reqList.map((item, index) => {
    // 多层结构处理
    if (item.children) {
      // 获取本地路由配置的下标
      const localRouterIndex = localList.findIndex((option) => item.path === option.path);
      // 如果存在就添加到路由中
      if (localRouterIndex !== -1) {
        const localItem = localList[localRouterIndex];
        const { key, element, meta, path } = localItem;
        routeMap.set(`${key}`, meta);
        list[index] = {
          path,
          key,
          element,
          meta
        };
        // 适配多级菜单 filterRouters
        list[index].children = filterRouters(localItem.children, item.children);
      }
    } else {
      // 单层接口处理
      const localRouterIndex = localList.findIndex((option) => item.path === option.path);
      if (localRouterIndex !== -1) {
        // 获取本地的参数属性存入路由中
        const { key, element, meta, path } = localList[localRouterIndex];
        routeMap.set(`${key}`, meta);
        return list.push({
          key,
          element,
          meta,
          path
        });
      }
    }
  });
  return list;
}
export function getRoutersStore() {
  const localRouterList = JSON.parse(localStorageGet('routerList'));
  if (!localRouterList) return [];
  return filterRouters(localRouters, localRouterList);
}
export function setRoutersStore(routerList) {
  return localStorageSet('routerList', routerList);
}

export function removeRoutersStore() {
  return localStorageRemove('routerList');
}

/**
 * @description 获取当前路由
 * @param {*} currentPaths 当前路由层级
 * @returns list
 */
export function getCurrentRouter(currentPaths) {
  const list = [];
  for (let i = 0; i < currentPaths.length; i++) {
    const currentKey = currentPaths.slice(0, i * 1 + 1).join('/');
    if (routeMap.get(currentKey)) list.push(routeMap.get(currentKey));
  }
  return list;
}

/**
 * @description 获取某条本地路由信息
 * @param {String} key
 * @returns
 */
export function getCurrentLocaRouter(key) {
  return routeMap.get(key);
}
