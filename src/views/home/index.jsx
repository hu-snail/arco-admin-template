import { Fragment, useEffect, useState } from "react";
import { Button, Space, Grid } from "@arco-design/web-react";
import { getResouceList } from "@/api/index";

const Row = Grid.Row;
const Col = Grid.Col;

export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    onGetResouceList();
  }, []);

  const onGetResouceList = (flag) => {
    getResouceList().then((res) => {
      const { list } = res.data;
      setList(list);
    });
  };

  const handleGetData = () => {
    onGetResouceList(true);
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
            {list.map((option, index) => {
              return (
                <Col key={index} xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <div>{option.title}</div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </Fragment>
  );
}
