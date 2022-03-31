import {
  Form,
  Input,
  Button,
  Message,
  Space,
  Checkbox,
} from "@arco-design/web-react";

import { useNavigate } from "react-router-dom";

import { IconUser, IconSafe } from "@arco-design/web-react/icon";

const FormItem = Form.Item;
import "./index.less";

export default function Login() {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const handleSubmit = (v) => {
    console.log(v);
    Message.success("登录成功，跳转直首页");
    navigate(`/page/home?username=${v.name}`);
  };
  return (
    <div className="login-wrap">
      <div className="login-bg">
        <div className="logo-bg-img"></div>
      </div>
      <div className="login-form">
        <div className="form-warp">
          <h2 className="form-title">登 录</h2>
          <Form
            form={form}
            wrapperCol={{
              span: 24,
            }}
            onValuesChange={(v, vs) => {
              console.log(v, vs);
            }}
            onSubmit={(v) => handleSubmit(v)}
          >
            <Space direction="vertical" size={10}>
              <FormItem
                field="name"
                rules={[{ required: true, message: "用户名不能为空" }]}
              >
                <Input prefix={<IconUser />} placeholder="请输入用户名" />
              </FormItem>
              <FormItem
                field="pwd"
                rules={[{ required: true, message: "密码不能为空" }]}
              >
                <Input.Password
                  prefix={<IconSafe />}
                  placeholder="请输入密码"
                />
              </FormItem>
              <FormItem className="forget-pwd">
                <Checkbox>记住密码</Checkbox>
                <Button type="text">忘记密码</Button>
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" long>
                  登 录
                </Button>
              </FormItem>
            </Space>
          </Form>
        </div>
      </div>
    </div>
  );
}
