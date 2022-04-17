import React, { useState, useEffect } from 'react';
import { Menu } from '@arco-design/web-react';
import { SubMenuCompontent } from '../SubMenu';
import { useNavigate, useLocation } from 'react-router-dom';
import store from '@/store';
const MenuItem = Menu.Item;

export default function MenuCompontent() {
  const [routerList, setRouterList] = useState([]);
  const [selectRouter, setSelectRouter] = useState('home');
  const [opneKeys, setOpenKeys] = useState(['/dashboard', '/multi']);
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const local = useLocation();
  useEffect(() => {
    const { routers } = store.getState().routerReducer;
    setRouterList(routers);
  }, []);

  useEffect(() => {
    const keys = '/' + pathname.split('/')[1].toString();
    console.log(keys);
    // setOpenKeys([...opneKeys, keys]);
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
      style={{ width: '100%' }}
    >
      {routerList.map((item) => {
        if (item.children) {
          return SubMenuCompontent(item);
        } else {
          return (
            <MenuItem key={item.key}>
              {item.meta.icon ? item.meta.icon : ''}
              {item.meta.title}
            </MenuItem>
          );
        }
      })}
    </Menu>
  );
}
