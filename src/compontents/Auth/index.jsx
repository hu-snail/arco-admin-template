import { Navigate, useLocation } from 'react-router-dom';
import store from '@/store';

import { setting } from '@/config/setting';
const { loginInterception, title } = setting;

import { setPermission, getUserInfoHandler } from '@/store/actions/user';
import { useDispatch } from 'react-redux';
import { getCurrentLocaRouter } from '@/utils/router';
export default function RequireAuth({ children }) {
  if (!store.getState().userReducer) return children;
  const { accessToken, permissions } = store.getState().userReducer;
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const localRouter = getCurrentLocaRouter(pathname);
  // 窗口标题
  document.title = (localRouter ? localRouter.title + '-' : '') + title;

  // 登录状态
  if (accessToken) {
    // 登录状态到登录页自动呢跳转到首页
    if (pathname === '/') return <Navigate to="/dashboard/workplace" replace />;
    else {
      // 获取权限
      const hasPermissions = permissions && permissions.length;
      if (!hasPermissions) {
        try {
          let permissions;
          if (!loginInterception) {
            //settings.js loginInterception为false时，创建虚拟权限
            dispatch(
              setPermission(['admin'], (data) => {
                permissions = data;
              })
            );
          } else {
            dispatch(
              getUserInfoHandler((data) => {
                permissions = data;
              })
            );
          }
        } catch {}
      }
    }
    return children;
  } else {
    if (pathname !== '/') return <Navigate to="/" replace />;
    else return children;
  }
}
