import {
  Form, Input, Button, Space, Checkbox, Typography
} from '@arco-design/web-react';
import {
  IconUser, IconSafe, IconGithub, IconWechat, IconFile
} from '@arco-design/web-react/icon';

// 路由
import { useNavigate } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
// store
import { loginHandler } from '@/store/actions/user';

import './login.less';
import store from '@/store';

export default function Login() {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (formItem) => {
    await dispatch(loginHandler(formItem));
    const { accessToken } = store.getState().userReducer;
    if (accessToken) navigate('/dashboard/workplace');
  };
  return (
    <div className="login-wrap">
      <div className="login-left">
        <div className="login-left-content">
          <Typography.Title className="login-text">ARCO ADMIN TEMPLATE</Typography.Title>
          <Typography.Title className="login-text" heading={5}>
            开箱即用中后台管理系统
          </Typography.Title>
          <Typography.Text className="login-text">点击右侧登录即可体验</Typography.Text>
          <div className="btn">
            <Space size={16}>
              <Button shape="round" type="primary" icon={<IconGithub />}>
                Github
              </Button>
              <Button shape="round" type="primary" icon={<IconFile />}>
                文档
              </Button>
              <Button shape="round" type="primary" icon={<IconWechat />}>
                微信交流群
              </Button>
            </Space>
          </div>
        </div>
      </div>
      <div className="login-form">
        <div className="form-warp">
          <Typography.Title>您好！</Typography.Title>
          <Typography.Title heading={5}>欢迎登录Arco Admin</Typography.Title>
          <Form
            form={form}
            wrapperCol={{
              span: 24
            }}
            initialValues={{
              username: 'admin',
              password: 123456
            }}
            onSubmit={handleSubmit}
          >
            <Space direction="vertical" size={10}>
              <Form.Item
                field="username"
                rules={[
                  {
                    required: true,
                    message: '用户名不能为空'
                  }
                ]}
              >
                <Input prefix={<IconUser />} placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item
                field="password"
                rules={[
                  {
                    required: true,
                    message: '密码不能为空'
                  }
                ]}
              >
                <Input.Password prefix={<IconSafe />} placeholder="请输入密码" />
              </Form.Item>
              <Form.Item className="forget-pwd">
                <Checkbox>记住密码</Checkbox>
                <Button type="text">忘记密码</Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" shape="round" htmlType="submit" long>
                  登 录
                </Button>
              </Form.Item>
            </Space>
          </Form>
        </div>
      </div>
      {/* <div className="login-bg">
        <div className="logo-bg-img"></div>
      </div>
      */}
    </div>
  );
}
