import { Button, Space } from '@arco-design/web-react';
import {
  IconPlus,
  IconDelete,
  IconLeft,
  IconRight,
  IconMore,
  IconStar,
  IconSettings,
  IconMessage,
  IconDown
} from '@arco-design/web-react/icon';

const ButtonGroup = Button.Group;

export default function Home() {
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
      <div className="card-head">
        <h2>组合按钮</h2>
        <p className="card-head-desc">可用在同级多项操作，以按钮组合方式出现。</p>
      </div>
      <Space size="large" direction="vertical">
        <Space size="large">
          <ButtonGroup>
            <Button>Publish</Button>
            <Button icon={<IconDown />} />
          </ButtonGroup>
          <ButtonGroup>
            <Button type="secondary">Publish</Button>
            <Button type="secondary" icon={<IconMore />} />
          </ButtonGroup>
        </Space>
        <ButtonGroup>
          <Button type="primary">Publish</Button>
          <Button type="primary" icon={<IconDown />} />
        </ButtonGroup>
        <Space size="large">
          <ButtonGroup>
            <Button
              type="primary"
              icon={<IconLeft />}
              style={{
                padding: '0 8px'
              }}
            >
              Prev
            </Button>
            <Button
              type="primary"
              style={{
                padding: '0 8px'
              }}
            >
              Next
              <IconRight />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon={<IconStar />} />
            <Button type="primary" icon={<IconMessage />} />
            <Button type="primary" icon={<IconSettings />} />
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon={<IconStar />}>
              Favorite
            </Button>
            <Button type="primary" icon={<IconSettings />}>
              Setting
            </Button>
          </ButtonGroup>
        </Space>
      </Space>
    </div>
  );
}
