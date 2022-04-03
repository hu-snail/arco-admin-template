import { routers } from "@/routers";

export function getRoutersStore() {
  const localRouterList = JSON.parse(localStorage.getItem("routerList"));
  if (!localRouterList) return [];
  return filterRouters(localList(), localRouterList);
}
export function setRoutersStore(routerList) {
  return localStorage.setItem("routerList", JSON.stringify(routerList));
}

export function removeRoutersStore() {
  return localStorage.removeItem("routerList");
}

/**
 * @description 根据后端配置路由过滤
 * @param {Array} localList 本地路由列表
 * @param {Array} reqList  请求路由列表
 * @returns
 */
export function filterRouters(localList, reqList) {
  localList.map((item) => {
    const localRouterIndex = reqList.findIndex(
      (option) => item.path === option.path
    );
    if (localRouterIndex !== -1) return item;
  });
  return localList;
}

export function localList() {
  // 读取page部分路由， ！！！根据自己的路由进行修改， 不然会导致不显示
  const pageRouterIndex = routers.findIndex((item) => item.path === "/page");
  return routers[pageRouterIndex].children;
}
