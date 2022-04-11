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
  Comment,
  List,
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
  IconHeart,
  IconMessage,
  IconHeartFill,
  IconStarFill,
  IconStar,
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
  const [likes, setLikes] = React.useState([]);
  const [stars, setStars] = React.useState([]);
  const data2 = [
    {
      id: 1,
      author: "张 三",
      like: 13,
      star: 3,
      avatar:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp",
      content: "感谢作者开源！非常的好用，值得推荐！！！",
      datetime: "1 小时前",
    },
    {
      id: 2,
      author: "李 四",
      like: 12,
      star: 1,
      avatar:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp",
      content: "值得推荐！！！赶快去试试",
      datetime: "2 hour",
    },
    {
      id: 3,
      author: "Hu-snail",
      like: 12,
      star: 1,
      avatar:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp",
      content: "UI很好看，很用心的开源👍",
      datetime: "2 hour",
    },
  ];

  return (
    <Fragment>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={18}>
          <Card bordered={false}>
            <div className={style.ctw}>
              <Typography.Paragraph
                heading={6}
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
                <Typography.Title heading={6}>更新日志</Typography.Title>

                <Timeline>
                  <TimelineItem label="2022-03-27" dotColor="#00B42A">
                    Arco Admin Template 框架搭建完善
                  </TimelineItem>
                  <TimelineItem label="2022-03-28">
                    左侧菜单优化数据结构
                  </TimelineItem>
                  <TimelineItem label="2022-03-29" dotColor="#F53F3F">
                    主题内容布局调整
                  </TimelineItem>
                  <TimelineItem label="2022-04-1" dotColor="#C9CDD4">
                    Mock数据更新
                  </TimelineItem>
                </Timeline>
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false}>
                <Typography.Title heading={6}>评论列表</Typography.Title>

                <List bordered={false}>
                  {data2.map((item, index) => {
                    const like = likes.indexOf(item.id) > -1;
                    const star = stars.indexOf(item.id) > -1;

                    return (
                      <List.Item key={item.id}>
                        <Comment
                          author={item.author}
                          avatar={item.avatar}
                          content={item.content}
                          datetime={item.datetime}
                          actions={[
                            <span
                              className="custom-comment-action"
                              key="heart"
                              onClick={() =>
                                setLikes(
                                  like
                                    ? likes.filter((x) => x !== item.id)
                                    : [...likes, item.id]
                                )
                              }
                            >
                              {like ? (
                                <IconHeartFill style={{ color: "#f53f3f" }} />
                              ) : (
                                <IconHeart />
                              )}{" "}
                              {item.like + (like ? 1 : 0)}
                            </span>,
                            <span
                              className="custom-comment-action"
                              key="star"
                              onClick={() =>
                                setStars(
                                  star
                                    ? stars.filter((x) => x !== item.id)
                                    : [...stars, item.id]
                                )
                              }
                            >
                              {star ? (
                                <IconStarFill style={{ color: "#ffb400" }} />
                              ) : (
                                <IconStar />
                              )}{" "}
                              {item.star + (star ? 1 : 0)}
                            </span>,
                            <span className="custom-comment-action" key="reply">
                              <IconMessage /> Reply
                            </span>,
                          ]}
                        />
                      </List.Item>
                    );
                  })}
                </List>
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
