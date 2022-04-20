import React, { useEffect, useState } from 'react';
import { Chart, LineAdvance } from 'bizcharts';
import {
  Space, Statistic, Card, Grid, Typography, Divider, Button, Timeline, Comment, List, Carousel
} from '@arco-design/web-react';
import {
  IconDesktop, IconCloud, IconCode, IconGithub, IconFile, IconArrowRise, IconHeart, IconMessage, IconHeartFill, IconStarFill, IconStar
} from '@arco-design/web-react/icon';
import style from './style/index.module.less';

import { getWorkplace } from '@/api/workplace';

const { Row, Col } = Grid;
const TimelineItem = Timeline.Item;

export default function WorkplaceCompontent() {
  const [likes] = useState([]);
  const [stars] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [staticData, setStaticData] = useState([]);
  const [imgList, setImgList] = useState([]);

  const onGetWorkplace = () => {
    getWorkplace().then((res) => {
      const { imageList, staticList, commentList } = res.data;
      setCommentData(commentList);
      setStaticData(staticList);
      setImgList(imageList);
    });
  };

  useEffect(() => {
    onGetWorkplace();
  }, []);

  return (
    <Row gutter={16}>
      <Col xs={24} sm={24} md={18}>
        <Card bordered={false}>
          <div className={style.ctw}>
            <Typography.Paragraph
              heading={6}
              className={style['chart-title']}
              style={{
                marginBottom: 0
              }}
            >
              折线图数据
              <span className={style['chart-sub-title']}>(近1年)</span>
            </Typography.Paragraph>
          </div>
          <Chart padding={[10, 20, 70, 40]} autoFit height={300} data={staticData}>
            <LineAdvance shape="smooth" point area position="month*temperature" color="city" />
          </Chart>
        </Card>
        <Row
          gutter={16}
          style={{
            marginTop: '16px'
          }}
        >
          <Col span={12}>
            <Card bordered={false}>
              <Typography.Title heading={6}>更新日志</Typography.Title>

              <Timeline>
                <TimelineItem label="2022-03-27" dotColor="#00B42A">
                  Arco Admin Template 框架搭建完善
                </TimelineItem>
                <TimelineItem label="2022-03-28">左侧菜单优化数据结构</TimelineItem>
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
            <Card
              bordered={false}
              style={{
                height: '384px'
              }}
            >
              <Typography.Title heading={6}>评论列表</Typography.Title>

              <List bordered={false}>
                {commentData.map((item) => {
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
                          <span className="custom-comment-action" key="heart">
                            {like ? (
                              <IconHeartFill
                                style={{
                                  color: '#f53f3f'
                                }}
                              />
                            ) : (
                              <IconHeart />
                            )}
                            {item.like + (like ? 1 : 0)}
                          </span>,
                          <span className="custom-comment-action" key="star">
                            {star ? (
                              <IconStarFill
                                style={{
                                  color: '#ffb400'
                                }}
                              />
                            ) : (
                              <IconStar />
                            )}
                            {item.star + (star ? 1 : 0)}
                          </span>,
                          <span className="custom-comment-action" key="reply">
                            <IconMessage />
                            Reply
                          </span>
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Title heading={6}>快捷入口</Typography.Title>
            </div>
            <div className={style['shortcut-content']}>
              <div className={style['shortcut-item']}>
                <Button shape="circle" icon={<IconDesktop />} />
                <div className={style['shortcut-item-title']}>工作台</div>
              </div>
              <div className={style['shortcut-item']}>
                <Button shape="circle" icon={<IconCloud />} />
                <div className={style['shortcut-item-title']}>资源中心</div>
              </div>
              <div className={style['shortcut-item']}>
                <Button shape="circle" icon={<IconFile />} />
                <div className={style['shortcut-item-title']}>使用文档</div>
              </div>
              <div className={style['shortcut-item']}>
                <Button shape="circle" icon={<IconCode />} />
                <div className={style['shortcut-item-title']}>表单组件</div>
              </div>
              <div className={style['shortcut-item']}>
                <Button shape="circle" icon={<IconGithub />} />
                <div className={style['shortcut-item-title']}>GitHub</div>
              </div>
            </div>
            <Divider />
            <Typography.Title heading={6}>最近访问</Typography.Title>
            <div className={style['shortcut-content']}>
              <div className={style['shortcut-item']}>
                <Button shape="circle" icon={<IconDesktop />} />
                <div className={style['shortcut-item-title']}>工作台</div>
              </div>
              <div className={style['shortcut-item']}>
                <Button shape="circle" icon={<IconCloud />} />
                <div className={style['shortcut-item-title']}>资源中心</div>
              </div>
              <div className={style['shortcut-item']}>
                <Button shape="circle" icon={<IconGithub />} />
                <div className={style['shortcut-item-title']}>GitHub</div>
              </div>
            </div>
          </Card>
          <Carousel
            indicatorType="line"
            style={{
              width: '100%',
              height: 145
            }}
          >
            {imgList.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
            ))}
          </Carousel>

          <Card bordered={false}>
            <Typography.Title heading={6}>用户数据</Typography.Title>
            <Divider />
            <div className={style['card-statistic']}>
              <Statistic
                title="新用户"
                value={1923}
                suffix={
                  <IconArrowRise
                    style={{
                      color: '#ee4d38'
                    }}
                  />
                }
              />
              <Statistic
                title="用户增长率"
                value={50.32}
                precision={2}
                prefix={
                  <IconArrowRise
                    style={{
                      color: '#ee4d38'
                    }}
                  />
                }
                suffix="%"
                styleValue={{
                  color: '#ee4d38'
                }}
              />
            </div>
          </Card>
        </Space>
      </Col>
    </Row>
  );
}
