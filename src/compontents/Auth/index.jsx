import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import store from '@/store';

import { setting } from '@/config/setting';

import { setPermission, getUserInfoHandler } from '@/store/actions/user';
import { getCurrentLocaRouter } from '@/utils/router';

const { loginInterception, title } = setting;
export default function RequireAuth({ children }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  if (!store.getState().userReducer) return children;
  const { accessToken, permissions } = store.getState().userReducer;

  const localRouter = getCurrentLocaRouter(pathname);
  // 窗口标题
  document.title = (localRouter ? localRouter.title + '-' : '') + title;

  // 登录状态
  if (accessToken) {
    // 登录状态到登录页自动呢跳转到首页
    if (pathname === '/') return <Navigate to="/dashboard/workplace" replace />;

    // 获取权限
    const hasPermissions = permissions && permissions.length;

    if (!hasPermissions) {
      let permissionData;

      try {
        if (!loginInterception) {
          // settings.js loginInterception为false时，创建虚拟权限
          dispatch(
            setPermission(['admin'], (data) => {
              permissionData = data;
            })
          );
        } else {
          dispatch(
            getUserInfoHandler((data) => {
              // eslint-disable-next-line no-unused-vars
              permissionData = data;
            })
          );
        }
      } catch {
        console.log(22);
      }
    }

    return children;
  }
  if (pathname !== '/') return <Navigate to="/" replace />;
  return children;
}
