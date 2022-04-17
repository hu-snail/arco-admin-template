import { Menu } from '@arco-design/web-react';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export const SubMenuCompontent = (item) => {
  return (
    <SubMenu
      key={item.key}
      title={
        <span className="sub-menu-icon">
          {item.meta.icon ? item.meta.icon : ''}
          {item.meta.title}
        </span>
      }
    >
      {item.children.map((option) => {
        if (option.children) {
          return SubMenuCompontent(option);
        } else {
          return (
            <MenuItem key={option.key}>
              {option.meta.icon ? option.meta.icon : ''}
              {option.meta.title}
            </MenuItem>
          );
        }
      })}
    </SubMenu>
  );
};
