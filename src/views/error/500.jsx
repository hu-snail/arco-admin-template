import React from 'react';
import {
  Grid, Typography, Button
} from '@arco-design/web-react';
import { IconArrowLeft } from '@arco-design/web-react/icon';
import styles from './error.module.less';
import IMG_500 from '@/assets/error/500.png';

const { Row } = Grid;
const { Col } = Grid;

export default function Error500() {
  return (
    <div className={'app-main-container ' + styles.error}>
      <div className={styles['error-wrap']}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <div className={styles['error-img']}>
              <img src={IMG_500} alt="" width="80%" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <div className={styles['error-content']}>
              <Typography.Title type="primary">抱歉！</Typography.Title>
              <Typography.Title heading={5}>您没有权限去该页面...</Typography.Title>
              <Typography.Text>请联系管理员，或点击下面按钮返回到首页</Typography.Text>
              <div className={styles['back-home']}>
                <Button shape="round" type="primary" icon={<IconArrowLeft />}>
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
