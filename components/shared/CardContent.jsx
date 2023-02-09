import React from "react";
import { Button, Col, Row } from "antd";
import Styles from "@/styles/scss/common/CardContent.module.scss";
import CustomeCard from "./CustomeCard";
import CardDivider from "./CardDivider";
import AddIcon from "public/assets/images/svgs/add.svg";
export default function CardContent({ theme }) {
  return (
    <Row className={theme ? Styles.lightWrapper : Styles.darkWrapper}>
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
                <Button
                  className={theme ? Styles.lightShowMore : Styles.darkShowMore}
                >
                  نمایش <br />
                  ...بیشتر
                </Button>
              </div>
            </div>
          </Col>
          <Col
            className="mb-4 md:px-4 px-0"
            xl={{ span: 7 }}
            lg={{ span: 24 }}
            span={24}
          >
            <CustomeCard theme={theme} />
          </Col>
          <Col
            className="mb-4 md:px-4 px-0"
            xl={{ span: 7 }}
            lg={{ span: 24 }}
            span={24}
          >
            <CustomeCard theme={theme} />
          </Col>
          <Col
            className=" mb-4 md:px-4 px-0"
            xl={{ span: 7 }}
            lg={{ span: 24 }}
            span={24}
          >
            <CustomeCard theme={theme} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
