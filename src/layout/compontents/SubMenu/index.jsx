import { Menu } from '@arco-design/web-react';

const { SubMenu } = Menu;
const MenuItem = Menu.Item;

export function SubMenuCompontent(item) {
  const { key, meta, children } = item;
  return (
    <SubMenu
      key={key}
      title={
        <span className="sub-menu-icon">
          {meta.icon ? meta.icon : ''}
          {meta.title}
        </span>
      }
    >
      {children.map((option) => {
        if (option.children) {
          return SubMenuCompontent(option);
        }
        return (
          <MenuItem key={option.key}>
            {option.meta.icon ? option.meta.icon : ''}
            {option.meta.title}
          </MenuItem>
        );
      })}
    </SubMenu>
  );
}
