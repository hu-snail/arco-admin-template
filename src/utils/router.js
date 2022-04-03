import { routers } from "@/routers";

export function getRoutersStore() {
  // 读取page部分路由， ！！！根据自己的路由进行修改， 不然会导致不显示
  const pageRouterIndex = routers.findIndex((item) => item.path === "/page");
  const localList = routers[pageRouterIndex].children;
  const reqList = JSON.parse(localStorage.getItem("routerList"));
  return filterRouters(localList, reqList);
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
function filterRouters(localList, reqList) {
  localList.map((item) => {
    const localRouterIndex = reqList.findIndex(
      (option) => item.path === option.path
    );
    if (localRouterIndex !== -1) return item;
  });
  return localList;
}
