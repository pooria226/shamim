import React from "react";
import { Button, Col, Row } from "antd";
import Styles from "@/styles/scss/common/CardContent.module.scss";
import CustomeCard from "./CustomeCard";
import CardDivider from "./CardDivider";
import AddIcon from "public/assets/images/svgs/add.svg";
export default function CardContent() {
  return (
    <Row className={Styles.lightWrapper}>
      <Col span={24}>
        <CardDivider />
      </Col>
      <Col span={24}>
        <Row>
          <Col xl={{ span: 3, order: 0 }} order={1} span={24}>
            <div className={Styles.wrapperAdd}>
              <div>
                <Button className={Styles.addButton}>
                  <span>
                    {" "}
                    <AddIcon />
                  </span>
                  افزودن اثر
                </Button>
              </div>
              <div>
                <Button className={Styles.showMore}>
                  نمایش <br />
                  ...بیشتر
                </Button>
              </div>
            </div>
          </Col>
          <Col
            className="mb-4 px-4"
            xl={{ span: 7 }}
            lg={{ span: 24 }}
            span={24}
          >
            <CustomeCard />
          </Col>
          <Col
            className="mb-4 px-4"
            xl={{ span: 7 }}
            lg={{ span: 24 }}
            span={24}
          >
            <CustomeCard />
          </Col>
          <Col
            className=" mb-4 px-4"
            xl={{ span: 7 }}
            lg={{ span: 24 }}
            span={24}
          >
            <CustomeCard />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
