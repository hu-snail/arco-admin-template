import React, { useState, useEffect } from "react";
import {
  Space,
  Menu,
  Input,
  Button,
  Dropdown,
  Tooltip,
} from "@arco-design/web-react";

import {
  IconFullscreen,
  IconFullscreenExit,
  IconLanguage,
  IconMoonFill,
  IconSun,
  IconNotification,
  IconRefresh,
  IconSkin,
  IconSearch,
} from "@arco-design/web-react/icon";

import screenfull from "screenfull";

export default function NavBarItemCompontent() {
  const [isScreenfull, setScreenfull] = useState(false);
  const [isRefresh, setRefresh] = useState(true);
  const [mode, setMode] = useState("light");

  const handleChangeScreen = () => {
    if (!screenfull.isEnabled) {
      Message.warning("进入全屏失败");
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

  const handleChangeMode = () => {
    const modeType = mode === "light" ? "dark" : "light";
    setMode(modeType);
    if (modeType === "dark") document.body.setAttribute("arco-theme", "dark");
    else document.body.removeAttribute("arco-theme");
  };

  return (
    <div className="layout-header-edit">
      <Space size="medium">
        <Input
          style={{ width: 200 }}
          prefix={<IconSearch />}
          placeholder="请输入内容查询"
        />
        <Tooltip
          position="bottom"
          trigger="hover"
          content={`点击${isScreenfull ? "退出" : "切换"}全屏模式`}
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
            <Menu>
              <Menu.Item key="admin">简体中文</Menu.Item>
              <Menu.Item key="logout">English</Menu.Item>
            </Menu>
          }
        >
          <Button shape="circle" icon={<IconLanguage />} />
        </Dropdown>
        <Tooltip position="bottom" trigger="hover" content="点击切换皮肤">
          <Button shape="circle" icon={<IconSkin />} />
        </Tooltip>
        <Button shape="circle" icon={<IconNotification />} />
        <Tooltip
          position="bottom"
          trigger="hover"
          content={`点击切换为${mode === "light" ? "暗黑" : "亮色"}模式`}
        >
          <Button
            shape="circle"
            icon={mode === "light" ? <IconMoonFill /> : <IconSun />}
            onClick={handleChangeMode}
          />
        </Tooltip>
        <Tooltip position="bottom" trigger="hover" content="刷新">
          <Button
            shape="circle"
            icon={<IconRefresh />}
            onClick={handlerChangeRefresh}
          />
        </Tooltip>
      </Space>
    </div>
  );
}
