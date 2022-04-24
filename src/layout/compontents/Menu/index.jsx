import React, { useState, useEffect } from 'react';
import { Menu } from '@arco-design/web-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SubMenuCompontent } from '../SubMenu';
import store from '@/store';

import useLocale from '@/utils/useLocale';

const MenuItem = Menu.Item;

export default function MenuCompontent() {
  const t = useLocale();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [routerList, setRouterList] = useState([]);
  const [selectRouter, setSelectRouter] = useState('home');
  const [opneKeys, setOpenKeys] = useState(['/dashboard', '/multi']);

  // const local = useLocation();
  useEffect(() => {
    const { routers } = store.getState().routerReducer;
    setRouterList(routers);
  }, []);

  useEffect(() => {
    setSelectRouter(pathname);
  }, [pathname]);

  const handlerToRouter = (key) => {
    navigate('../' + key);
  };

  return (
    <Menu
      selectedKeys={[selectRouter]}
      openKeys={opneKeys}
      levelIndent={32}
      onClickMenuItem={handlerToRouter}
      onClickSubMenu={(_, openKeys) => {
        setOpenKeys(openKeys);
      }}
      style={{
        width: '100%'
      }}
    >
      {routerList.map((item) => {
        if (item.children) {
          return SubMenuCompontent(item, t);
        }
        return (
          <MenuItem key={item.key}>
            {item.meta.icon ? item.meta.icon : ''}
            {t[item.meta.name]}
          </MenuItem>
        );
      })}
    </Menu>
  );
}
