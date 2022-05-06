import React from 'react';
import {
  Grid, Typography, Button
} from '@arco-design/web-react';
import { IconArrowLeft } from '@arco-design/web-react/icon';
import { useNavigate } from 'react-router-dom';
import styles from './error.module.less';
import IMG_404 from '@/assets/error/404.png';

const { Row } = Grid;
const { Col } = Grid;

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className={'app-main-container ' + styles.error}>
      <div className={styles['error-wrap']}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <div className={styles['error-img']}>
              <img src={IMG_404} alt="" width="80%" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <div className={styles['error-content']}>
              <Typography.Title type="primary">抱歉！</Typography.Title>
              <Typography.Title heading={5}>当前页面不存在...</Typography.Title>
              <Typography.Text>
                请检查您输入的网址是否正确，或点击下面的按钮返回首页
              </Typography.Text>
              <div className={styles['back-home']}>
                <Button
                  shape="round"
                  type="primary"
                  onClick={() => navigate('/')}
                  icon={<IconArrowLeft />}
                >
                  返回首页
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
