import { Fragment, useEffect, useState } from "react";
import {
  Grid,
  Card,
  Link,
  PageHeader,
  Radio,
  Space,
} from "@arco-design/web-react";
const Row = Grid.Row;
const Col = Grid.Col;

import { getResouceList } from "@/api/resource";
import styles from "./style/resource.module.less";

export default function ResourceCompontent() {
  const [selectedList, setSelectedList] = useState([]);
  useEffect(() => {
    onGetResouceList();
  }, []);

  const onGetResouceList = () => {
    getResouceList().then((res) => {
      setSelectedList(res.data.list);
    });
  };
  return (
    <Fragment>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={17}>
          <PageHeader
            className={styles["page-header"]}
            title="React 生态资源"
            subTitle="为您推荐优质资源"
            extra={
              <div>
                <Radio.Group mode="fill" type="button" defaultValue="small">
                  <Radio value="large">精选</Radio>
                  <Radio value="medium">开源项目</Radio>
                  <Radio value="small">技术社区</Radio>
                </Radio.Group>
              </div>
            }
          >
            <div>
              <Space size={(16, 16)} wrap>
                {selectedList.map((item, index) => {
                  return (
                    <div key={index} className={styles["card-item"]}>
                      <div className={styles["card-item-head"]}>
                        <div className={styles["card-item-head-logo"]}>
                          <img src={item.logo} width="100%" alt="" />
                        </div>
                        <div className={styles["card-item-head-title"]}>
                          {item.title}
                        </div>
                      </div>
                      <div className={styles["card-item-desc"]}>
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </Space>
            </div>
          </PageHeader>
        </Col>
        <Col xs={24} sm={24} md={7}>
          <Card title="排行榜" extra={<Link>查看更多</Link>} bordered={false}>
            Card content
            <br />
            Card content
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
