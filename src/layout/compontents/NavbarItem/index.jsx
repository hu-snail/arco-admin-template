import React, {
  useState, useEffect, useContext
} from 'react';

import {
  Drawer,
  Space,
  Menu,
  Input,
  Button,
  Dropdown,
  Tooltip,
  Message,
  Divider,
  Typography,
  Form,
  Switch,
  Slider
} from '@arco-design/web-react';

import {
  IconFullscreen,
  IconFullscreenExit,
  IconLanguage,
  IconMoonFill,
  IconSun,
  IconNotification,
  IconRefresh,
  IconSettings,
  IconSearch
} from '@arco-design/web-react/icon';
import { TwitterPicker } from 'react-color';
import './navbarItem.less';
import screenfull from 'screenfull';
import { generate } from '@arco-design/color';
import { GlobalContext } from '@/context';

const FormItem = Form.Item;

export default function NavBarItemCompontent() {
  const [isScreenfull, setScreenfull] = useState(false);
  const [isRefresh, setRefresh] = useState(true);
  const [theme, setTheme] = useState('light');
  const { setLang, lang } = useContext(GlobalContext);
  const [visible, setVisible] = useState(false);

  const list = generate('#00D084', { list: true });
  console.log(list);
  const handleChangeScreen = () => {
    if (!screenfull.isEnabled) {
      Message.warning('进入全屏失败');
      return false;
    }
    setScreenfull(!isScreenfull);
    screenfull.toggle();
  };

  useEffect(() => {
    setRefresh(true);
  }, [isRefresh]);

  const handlerChangeRefresh = () => {
    setRefresh(false);
  };

  const handleChangetheme = () => {
    const themeType = theme === 'light' ? 'dark' : 'light';
    setTheme(themeType);
    if (themeType === 'dark') document.body.setAttribute('arco-theme', 'dark');
    else document.body.removeAttribute('arco-theme');
  };

  const handlerChangeLang = (val) => {
    setLang(val);
  };

  return (
    <div className="layout-header-edit">
      <Space size="medium">
        <Input
          style={{
            width: 200
          }}
          prefix={<IconSearch />}
          placeholder="请输入内容查询"
        />
        <Tooltip
          position="bottom"
          trigger="hover"
          content={`点击${isScreenfull ? '退出' : '切换'}全屏模式`}
        >
          <Button
            shape="circle"
            icon={isScreenfull ? <IconFullscreenExit /> : <IconFullscreen />}
            onClick={handleChangeScreen}
          />
        </Tooltip>
        <Dropdown
          position="br"
          droplist={
            <Menu defaultSelectedKeys={[lang]} onClickMenuItem={handlerChangeLang}>
              <Menu.Item key="zh-CN">简体中文</Menu.Item>
              <Menu.Item key="en-US">English</Menu.Item>
            </Menu>
          }
        >
          <Button shape="circle" icon={<IconLanguage />} />
        </Dropdown>
        <Tooltip position="bottom" trigger="hover" content="点击页面配置">
          <Button shape="circle" icon={<IconSettings />} onClick={() => setVisible(true)} />
        </Tooltip>
        <Button shape="circle" icon={<IconNotification />} />
        <Tooltip
          position="bottom"
          trigger="hover"
          content={`点击切换为${theme === 'light' ? '暗黑' : '亮色'}模式`}
        >
          <Button
            shape="circle"
            icon={theme === 'light' ? <IconMoonFill /> : <IconSun />}
            onClick={handleChangetheme}
          />
        </Tooltip>
        <Tooltip position="bottom" trigger="hover" content="刷新">
          <Button shape="circle" icon={<IconRefresh />} onClick={handlerChangeRefresh} />
        </Tooltip>
      </Space>
      <Drawer
        width={332}
        title={
          <span>
            <IconSettings /> 页面配置{' '}
          </span>
        }
        visible={visible}
        okText="复制配置"
        cancelText="关闭"
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <Typography.Title heading={6}>主题色</Typography.Title>
        <TwitterPicker width="100%" triangle="hide" />
        <ul className="ul">
          {list.map((item, index) => (
            <li key={index} className="li" style={{ backgroundColor: item }} />
          ))}
        </ul>
        <Typography.Paragraph style={{ fontSize: 12 }}>
          根据主题颜色生成的 10 个梯度色（将配置复制到项目中，主题色才能对亮色 / 暗黑模式同时生效）
        </Typography.Paragraph>
        <Divider />
        <Typography.Title heading={6}>导航区域</Typography.Title>
        <Form
          className="setting-form"
          size="small"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ width: '100%' }}
          labelAlign="left"
        >
          <FormItem label="显示搜索">
            <Switch size="small" />
          </FormItem>
          <FormItem label="显示全屏">
            <Switch size="small" />
          </FormItem>
          <FormItem label="显示语言">
            <Switch size="small" />
          </FormItem>
          <FormItem label="显示通知">
            <Switch size="small" />
          </FormItem>
        </Form>
        <Divider />
        <Typography.Title heading={6}>内容区域</Typography.Title>
        <Form
          className="setting-form"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ width: '100%' }}
          labelAlign="left"
        >
          <FormItem label="菜单宽度">
            <Slider />
          </FormItem>
        </Form>
      </Drawer>
    </div>
  );
}
