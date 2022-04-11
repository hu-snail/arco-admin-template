import React, { Fragment } from "react";
import { Chart, LineAdvance } from "bizcharts";
import {
  Space,
  Statistic,
  Card,
  Grid,
  Typography,
  Divider,
  Link,
  Button,
  Timeline,
} from "@arco-design/web-react";
import style from "./style/index.module.less";
import {
  IconDesktop,
  IconCloud,
  IconCode,
  IconGithub,
  IconFile,
  IconArrowRise,
  IconArrowFall,
  IconExclamationCircleFill,
} from "@arco-design/web-react/icon";

// 数据源
const data = [
  {
    month: "Jan",
    city: "Tokyo",
    temperature: 7,
  },
  {
    month: "Jan",
    city: "London",
    temperature: 3.9,
  },
  {
    month: "Feb",
    city: "Tokyo",
    temperature: 13,
  },
  {
    month: "Feb",
    city: "London",
    temperature: 4.2,
  },
  {
    month: "Mar",
    city: "Tokyo",
    temperature: 16.5,
  },
  {
    month: "Mar",
    city: "London",
    temperature: 5.7,
  },
  {
    month: "Apr",
    city: "Tokyo",
    temperature: 14.5,
  },
  {
    month: "Apr",
    city: "London",
    temperature: 8.5,
  },
  {
    month: "May",
    city: "Tokyo",
    temperature: 10,
  },
  {
    month: "May",
    city: "London",
    temperature: 11.9,
  },
  {
    month: "Jun",
    city: "Tokyo",
    temperature: 7.5,
  },
  {
    month: "Jun",
    city: "London",
    temperature: 15.2,
  },
  {
    month: "Jul",
    city: "Tokyo",
    temperature: 9.2,
  },
  {
    month: "Jul",
    city: "London",
    temperature: 17,
  },
  {
    month: "Aug",
    city: "Tokyo",
    temperature: 14.5,
  },
  {
    month: "Aug",
    city: "London",
    temperature: 16.6,
  },
  {
    month: "Sep",
    city: "Tokyo",
    temperature: 9.3,
  },
  {
    month: "Sep",
    city: "London",
    temperature: 14.2,
  },
  {
    month: "Oct",
    city: "Tokyo",
    temperature: 8.3,
  },
  {
    month: "Oct",
    city: "London",
    temperature: 10.3,
  },
  {
    month: "Nov",
    city: "Tokyo",
    temperature: 8.9,
  },
  {
    month: "Nov",
    city: "London",
    temperature: 5.6,
  },
  {
    month: "Dec",
    city: "Tokyo",
    temperature: 5.6,
  },
  {
    month: "Dec",
    city: "London",
    temperature: 9.8,
  },
];

const { Row, Col } = Grid;
const TimelineItem = Timeline.Item;

export default function WorkplaceCompontent() {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={18}>
          <Card bordered={false}>
            <Typography.Title heading={5}>欢迎回来，Hu-snail</Typography.Title>

            <Divider />

            <div className={style.ctw}>
              <Typography.Paragraph
                className={style["chart-title"]}
                style={{ marginBottom: 0 }}
              >
                折线图数据
                <span className={style["chart-sub-title"]}>(近1年)</span>
              </Typography.Paragraph>
              <Link>更多数据</Link>
            </div>
            <Chart padding={[10, 20, 70, 40]} autoFit height={300} data={data}>
              <LineAdvance
                shape="smooth"
                point
                area
                position="month*temperature"
                color="city"
              />
            </Chart>
          </Card>
          <Row gutter={16} style={{ marginTop: "16px" }}>
            <Col span={12}>
              <Card bordered={false}>
                <Timeline>
                  <TimelineItem label="2017-03-10" dotColor="#00B42A">
                    The first milestone
                  </TimelineItem>
                  <TimelineItem label="2018-05-22">
                    The second milestone
                  </TimelineItem>
                  <TimelineItem label="2020-06-22" dotColor="#F53F3F">
                    The third milestone
                    <IconExclamationCircleFill
                      style={{ color: "F53F3F", fontSize: 12, marginLeft: 4 }}
                    />
                  </TimelineItem>
                  <TimelineItem label="2020-09-30" dotColor="#C9CDD4">
                    The fourth milestone
                  </TimelineItem>
                </Timeline>
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false}>
                <Timeline>
                  <TimelineItem label="2017-03-10" dotColor="#00B42A">
                    The first milestone
                  </TimelineItem>
                  <TimelineItem label="2018-05-22">
                    The second milestone
                  </TimelineItem>
                  <TimelineItem label="2020-06-22" dotColor="#F53F3F">
                    The third milestone
                    <IconExclamationCircleFill
                      style={{ color: "F53F3F", fontSize: 12, marginLeft: 4 }}
                    />
                  </TimelineItem>
                  <TimelineItem label="2020-09-30" dotColor="#C9CDD4">
                    The fourth milestone
                  </TimelineItem>
                </Timeline>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={6}>
          <Space direction="vertical" size="medium">
            <Card bordered={false}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography.Title heading={6}>快捷入口</Typography.Title>
                <Link>查看更多</Link>
              </div>
              <div className={style["shortcut-content"]}>
                <div className={style["shortcut-item"]}>
                  <Button shape="circle" icon={<IconDesktop />} />
                  <div className={style["shortcut-item-title"]}>工作台</div>
                </div>
                <div className={style["shortcut-item"]}>
                  <Button shape="circle" icon={<IconCloud />} />
                  <div className={style["shortcut-item-title"]}>资源中心</div>
                </div>
                <div className={style["shortcut-item"]}>
                  <Button shape="circle" icon={<IconFile />} />
                  <div className={style["shortcut-item-title"]}>使用文档</div>
                </div>
                <div className={style["shortcut-item"]}>
                  <Button shape="circle" icon={<IconCode />} />
                  <div className={style["shortcut-item-title"]}>表单组件</div>
                </div>
                <div className={style["shortcut-item"]}>
                  <Button shape="circle" icon={<IconGithub />} />
                  <div className={style["shortcut-item-title"]}>GitHub</div>
                </div>
              </div>
              <Divider />
              <Typography.Title heading={6}>最近访问</Typography.Title>
              <div className={style["shortcut-content"]}>
                <div className={style["shortcut-item"]}>
                  <Button shape="circle" icon={<IconDesktop />} />
                  <div className={style["shortcut-item-title"]}>工作台</div>
                </div>
                <div className={style["shortcut-item"]}>
                  <Button shape="circle" icon={<IconCloud />} />
                  <div className={style["shortcut-item-title"]}>资源中心</div>
                </div>
                <div className={style["shortcut-item"]}>
                  <Button shape="circle" icon={<IconGithub />} />
                  <div className={style["shortcut-item-title"]}>GitHub</div>
                </div>
              </div>
            </Card>
            <Card bordered={false}>
              <Typography.Title heading={6}>用户数据</Typography.Title>
              <Divider />
              <div className={style["card-statistic"]}>
                <Statistic
                  title="新用户"
                  value={1923}
                  suffix={<IconArrowRise style={{ color: "#ee4d38" }} />}
                />
                <Statistic
                  title="用户增长率"
                  value={50.32}
                  precision={2}
                  prefix={<IconArrowRise style={{ color: "#ee4d38" }} />}
                  suffix="%"
                  styleValue={{ color: "#ee4d38" }}
                />
              </div>
            </Card>
          </Space>
        </Col>
      </Row>
    </Fragment>
  );
}
