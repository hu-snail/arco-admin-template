import { Form, Input, Button, Space, Checkbox } from "@arco-design/web-react";
import { IconUser, IconSafe } from "@arco-design/web-react/icon";

// 路由
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
// store
import { loginHandler } from "@/store/actions/user";

const FormItem = Form.Item;
import "./login.less";
import store from "@/store";

export default function Login() {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    await dispatch(loginHandler(form));
    const { accessToken } = store.getState().userReducer;
    if (accessToken) navigate("/page/home");
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
            onSubmit={handleSubmit}
          >
            <Space direction="vertical" size={10}>
              <FormItem
                field="username"
                rules={[{ required: true, message: "用户名不能为空" }]}
              >
                <Input prefix={<IconUser />} placeholder="请输入用户名" />
              </FormItem>
              <FormItem
                field="password"
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
