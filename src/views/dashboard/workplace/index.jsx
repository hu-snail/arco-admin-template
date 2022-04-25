import React, { useEffect, useState } from 'react';
import { Chart, LineAdvance } from 'bizcharts';
import {
  Spin,
  Space,
  Statistic,
  Card,
  Grid,
  Typography,
  Divider,
  Button,
  Timeline,
  Comment,
  List,
  Carousel
} from '@arco-design/web-react';
import {
  IconDesktop,
  IconCloud,
  IconGithub,
  IconFile,
  IconArrowRise,
  IconHeart,
  IconMessage,
  IconHeartFill,
  IconStarFill,
  IconStar
} from '@arco-design/web-react/icon';
import style from './style/index.module.less';

import { getWorkplace } from '@/api/workplace';
import useLocale from '@/utils/useLocale';

const { Row, Col } = Grid;
const TimelineItem = Timeline.Item;

export default function WorkplaceCompontent() {
  const [likes] = useState([]);
  const [stars] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [staticData, setStaticData] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [loading, setLoading] = useState(true);
  const t = useLocale();

  const quikEntranceList = [
    {
      icon: <IconDesktop />,
      title: t['workplace.quick.entrance.workplace']
    },
    {
      icon: <IconCloud />,
      title: t['workplace.quick.entrance.resource']
    },
    {
      icon: <IconFile />,
      title: t['workplace.quick.entrance.documents']
    },
    {
      icon: <IconGithub />,
      title: 'GitHub'
    }
  ];

  const onGetWorkplace = () => {
    getWorkplace().then((res) => {
      const { imageList, staticList, commentList } = res.data;
      setCommentData(commentList);
      setStaticData(staticList);
      setImgList(imageList);
      setLoading(false);
    });
  };

  useEffect(() => {
    onGetWorkplace();
  }, []);

  return (
    <Row gutter={16}>
      <Col xs={24} sm={24} md={18}>
        <Spin loading={loading} style={{ width: '100%' }}>
          <Card bordered={false}>
            <div className={style.ctw}>
              <Typography.Paragraph
                heading={6}
                className={style['chart-title']}
                style={{
                  marginBottom: 0
                }}
              >
                {t['workplace.statistics.title']}
                <span className={style['chart-sub-title']}>
                  {t['workplace.statistics.title.tip']}
                </span>
              </Typography.Paragraph>
            </div>
            <Chart padding={[10, 20, 70, 40]} autoFit height={300} data={staticData}>
              <LineAdvance shape="smooth" point area position="month*temperature" color="city" />
            </Chart>
          </Card>
        </Spin>

        <Row
          gutter={16}
          style={{
            marginTop: '16px'
          }}
        >
          <Col span={12}>
            <Spin loading={loading} style={{ width: '100%' }}>
              <Card bordered={false}>
                <Typography.Title heading={6}>{t['workplace.update.log.title']}</Typography.Title>

                <Timeline>
                  <TimelineItem label="2022-03-27" dotColor="#00B42A">
                    {t['workplace.update.log.01']}
                  </TimelineItem>
                  <TimelineItem label="2022-03-28">{t['workplace.update.log.02']}</TimelineItem>
                  <TimelineItem label="2022-03-29" dotColor="#F53F3F">
                    {t['workplace.update.log.03']}
                  </TimelineItem>
                  <TimelineItem label="2022-04-1" dotColor="#C9CDD4">
                    {t['workplace.update.log.04']}
                  </TimelineItem>
                </Timeline>
              </Card>
            </Spin>
          </Col>
          <Col span={12}>
            <Spin loading={loading} style={{ width: '100%' }}>
              <Card
                bordered={false}
                style={{
                  height: '384px'
                }}
              >
                <Typography.Title heading={6}>
                  {t['workplace.commennt.list.title']}
                </Typography.Title>

                <List bordered={false}>
                  {commentData.map((item) => {
                    const like = likes.indexOf(item.id) > -1;
                    const star = stars.indexOf(item.id) > -1;

                    return (
                      <List.Item key={item.id}>
                        <Comment
                          author={t[item.author]}
                          avatar={item.avatar}
                          content={t[item.content]}
                          datetime={t[item.datetime]}
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
            </Spin>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={6}>
        <Space direction="vertical" size="medium" style={{ width: '100%' }}>
          <Spin loading={loading} style={{ width: '100%' }}>
            <Card bordered={false}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Typography.Title heading={6}>
                  {t['workplace.quick.entrance.title']}
                </Typography.Title>
              </div>
              <div className={style['shortcut-content']}>
                {quikEntranceList.map((item, index) => (
                  <div className={style['shortcut-item']} key={index}>
                    <Button shape="circle" icon={item.icon} />
                    <div className={style['shortcut-item-title']}>{item.title}</div>
                  </div>
                ))}
              </div>
              <Divider />
              <Typography.Title heading={6}>{t['workplace.recent.visit.title']}</Typography.Title>
              <div className={style['shortcut-content']}>
                {quikEntranceList.map((item, index) => {
                  if (item.title !== 'GitHub') {
                    return (
                      <div className={style['shortcut-item']} key={index}>
                        <Button shape="circle" icon={item.icon} />
                        <div className={style['shortcut-item-title']}>{item.title}</div>
                      </div>
                    );
                  }
                })}
              </div>
            </Card>
          </Spin>
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
            <Typography.Title heading={6}>{t['workplace.user.data.title']}</Typography.Title>
            <Divider />
            <div className={style['card-statistic']}>
              <Statistic
                title={t['workplace.user.new']}
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
                title={t['workplace.user.growth.rate']}
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
