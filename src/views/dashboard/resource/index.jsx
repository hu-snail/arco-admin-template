import { useEffect, useState } from 'react';
import {
  Spin, Grid, Carousel, PageHeader, Space
} from '@arco-design/web-react';

import { getResouceList } from '@/api/resource';
import styles from './style/resource.module.less';

const { Row } = Grid;
const { Col } = Grid;

const imageSrc = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'
];

export default function ResourceCompontent() {
  const [selectedList, setSelectedList] = useState([]);
  const [communityData, setCommunityData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [studyData, setStudyData] = useState([]);
  const [imgPrefix, setImgPrefix] = useState(null);
  const [loading, setLoading] = useState(true);

  const onGetResouceList = () => {
    getResouceList().then((res) => {
      const { prefix, list, communityList, teamList, studyList } = res.data;
      setImgPrefix(prefix);
      setSelectedList(list);
      setTeamData(teamList);
      setStudyData(studyList);
      setCommunityData(communityList);
      setLoading(false);
    });
  };

  useEffect(() => {
    onGetResouceList();
  }, []);

  return (
    <Row gutter={16}>
      <Col xs={24} sm={24} md={17}>
        <PageHeader
          className={styles['page-header']}
          title="React 生态资源"
          subTitle="为您推荐优质资源"
        >
          <Spin loading={loading} style={{ width: '100%' }}>
            {/* <Space size={(16, 16)} wrap className="space-wrap"> */}
            <div className={styles['card-box']}>
              {selectedList.map((item, index) => (
                <div key={index} className={styles['card-item']}>
                  <div className={styles['card-item-head']}>
                    <div className={styles['card-item-head-logo']}>
                      <img src={imgPrefix + item.logo} width="100%" alt="" />
                    </div>
                    <div className={styles['card-item-head-title']}>{item.title}</div>
                  </div>
                  <div className={styles['card-item-desc']}>{item.desc}</div>
                </div>
              ))}
            </div>
            {/* </Space> */}
          </Spin>
        </PageHeader>
        <Row
          gutter={16}
          style={{
            marginTop: '16px'
          }}
        >
          <Col xs={24} sm={24} md={12}>
            <PageHeader className={styles['page-header']} title="精选社区" subTitle="技术社区">
              <Space size={8} direction="vertical" className={styles['space-width']}>
                {communityData.map((item, index) => (
                  <div key={index} className={styles['community-item']}>
                    <div className={styles['community-item-logo']}>
                      <img src={item.logo} width="100%" alt="" />
                    </div>
                    <div className={styles['community-item-title']}>
                      <b>【{item.title}】</b>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </Space>
            </PageHeader>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <PageHeader className={styles['page-header']} title="技术团队" subTitle="精选团队">
              <Space size={(10, 10)} wrap>
                {teamData.map((item, index) => (
                  <div key={index} className={styles['team-card-item']}>
                    <div className={styles['team-card-item-head']}>
                      <div className={styles['team-card-item-head-logo']}>
                        <img src={item.logo} width="100%" alt="" />
                      </div>
                      <div className={styles['team-card-item-head-title']}>{item.title}</div>
                    </div>
                    <div className={styles['team-card-item-desc']}>{item.desc}</div>
                  </div>
                ))}
              </Space>
            </PageHeader>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={7}>
        <PageHeader className={styles['page-header']} title="排行榜" subTitle="精选排行">
          <Space size={8} direction="vertical" className={styles['space-width']}>
            {studyData.map((item, index) => (
              <div key={index} className={styles['community-item']}>
                <div className={styles['community-item-logo']}>
                  <img src={item.logo} width="100%" alt="" />
                </div>
                <div className={styles['community-item-title']}>
                  <b>{item.title}:</b>
                  {item.desc}
                </div>
              </div>
            ))}
          </Space>
        </PageHeader>
        <Space
          style={{
            marginTop: '16px'
          }}
          size={16}
          direction="vertical"
          className={styles['space-width']}
        >
          <Carousel
            indicatorType="line"
            style={{
              width: '100%',
              height: 150
            }}
          >
            {imageSrc.map((src, index) => (
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
        </Space>
      </Col>
    </Row>
  );
}
