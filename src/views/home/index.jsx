import { useEffect, useState } from 'react';
import {
  Button, Space, Grid
} from '@arco-design/web-react';
import { IconPlus, IconDelete } from '@arco-design/web-react/icon';
import { getResouceList } from '@/api/index';

const { Row } = Grid;
const { Col } = Grid;

export default function Home() {
  const [list, setList] = useState([]);

  const onGetResouceList = () => {
    getResouceList().then((res) => {
      setList(res.data.list);
    });
  };

  useEffect(() => {
    onGetResouceList();
  }, []);

  const handleGetData = () => {
    onGetResouceList(true);
  };
  return (
    <div className="app-main-container">
      <div className="card-head">
        <h2>基本用法</h2>
        <p className="card-head-desc">
          按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种。
        </p>
      </div>
      <Space size="large">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="outline">Outline</Button>
        <Button type="text">Text</Button>
      </Space>
      <div className="card-head">
        <h2>图标按钮</h2>
        <p className="card-head-desc">
          Button 可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等。
        </p>
      </div>
      <Space size="large">
        <Button type="primary" icon={<IconPlus />} />
        <Button type="primary" icon={<IconDelete />}>
          {' '}
          Delete
        </Button>
      </Space>

      <div className="card-head">
        <h2>按钮形状</h2>
        <p className="card-head-desc">
          Button 有多种形状，square - 长方形 (默认), circle - 圆形, round - 全圆角。
        </p>
      </div>
      <Space size="large">
        <Button type="primary" icon={<IconPlus />} />
        <Button shape="circle" type="primary" status="warning" icon={<IconPlus />} />
        <Button shape="round" status="success" type="primary">
          Success
        </Button>
        <Button status="danger" type="primary">
          Danger
        </Button>
      </Space>

      <div
        style={{
          marginTop: '20px'
        }}
      >
        <Button type="primary" onClick={handleGetData}>
          请求接口
        </Button>
      </div>

      <div
        style={{
          marginTop: '20px'
        }}
      >
        <Row>
          {list.map((option, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <div>{option.title}</div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
