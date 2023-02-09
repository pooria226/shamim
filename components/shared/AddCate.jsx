import React from "react";
import { Button, Col, Row } from "antd";
import Styles from "@/styles/scss/common/AddCate.module.scss";
import AddIcon from "public/assets/images/svgs/add.svg";
export default function AddCate() {
  return (
    <Row>
      <Col span={24}>
        <Button className={Styles.lightButton}>
          افزودن دسته جدید
          <span className="pl-4">
            <AddIcon />
          </span>
        </Button>
      </Col>
    </Row>
  );
}
