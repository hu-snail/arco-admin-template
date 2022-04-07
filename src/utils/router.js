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
  let list = [];
  // 判断接口返回的路由数组
  reqList.map((item, index) => {
    // 多层结构处理
    if (item.children) {
      // 获取本地路由配置的下标
      const localRouterIndex = localList.findIndex(
        (option) => item.path === option.path
      );
      // 如果存在就添加到路由中
      if (localRouterIndex !== -1) {
        const localItem = localList[localRouterIndex];
        const { key, element, meta, path } = localItem;
        list[index] = { path, key, element, meta };
        // 适配多级菜单 filterRouters
        list[index].children = filterRouters(localItem.children, item.children);
      }
    } else {
      // 单层接口处理
      const localRouterIndex = localList.findIndex(
        (option) => item.path === option.path
      );
      if (localRouterIndex !== -1) {
        // 获取本地的参数属性存入路由中
        const { key, element, meta, path } = localList[localRouterIndex];
        return list.push({
          key,
          element,
          meta,
          path,
        });
      }
    }
  });
  return list;
}

export function localList() {
  // 读取page部分路由， ！！！根据自己的路由进行修改， 不然会导致不显示
  const pageRouterIndex = routers.findIndex((item) => item.path === "/page");
  return routers[pageRouterIndex].children;
}

export function getCurrentRouter() {
  const list = localList();
}
