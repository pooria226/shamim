import React from "react";
import { Col, Row } from "antd";
import Styles from "@/styles/scss/common/CustomeDivider.module.scss";
import PenIcon from "public/assets/images/svgs/edit.svg";
export default function CustomeDivider({ text }) {
  return (
    <Row>
      <Col span={24}>
        <div className="flex justify-center items-center">
          <div>
            <PenIcon />
          </div>
          <div className={Styles.seprator}></div>
          <div>
            <p className={Styles.lightText}>{text}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}
