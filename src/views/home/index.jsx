import { Fragment } from "react";
import { Button, Space } from "@arco-design/web-react";

export default function Home() {
  return (
    <Fragment>
      <div className="app-main-container">
        <Space size="large">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="outline">Outline</Button>
          <Button type="text">Text</Button>
        </Space>
      </div>
    </Fragment>
  );
}
