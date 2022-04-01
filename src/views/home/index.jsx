import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Space,
  Card,
  Grid,
  Message,
  Modal,
} from "@arco-design/web-react";
import { getRouters } from "@/api/routers";

const { Meta } = Card;

const Row = Grid.Row;
const Col = Grid.Col;

export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    onGetRouters();
  }, []);

  const onGetRouters = (flag) => {
    getRouters().then((res) => {
      if (flag) {
        Modal.success({
          title: `请求数据成功，共记${res.data.length}条数据，打开控制台查看`,
        });
      }
      setList(res.data);
    });
  };

  const handleGetData = () => {
    onGetRouters(true);
  };
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
        <div style={{ marginTop: "20px" }}>
          <Button type="primary" onClick={handleGetData}>
            请求接口
          </Button>
          {/* <div
            className="code"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(hotGoodses) }}
          ></div> */}
        </div>

        <div style={{ marginTop: "20px" }}>
          <Row>
            {list.map((option) => {
              return (
                <Col
                  key={option.id}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                  xxl={6}
                >
                  <div>{option.path}</div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </Fragment>
  );
}
