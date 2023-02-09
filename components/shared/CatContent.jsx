import { Col, Row } from "antd";
import React from "react";
import AddCate from "./AddCate";
import CardContent from "./CardContent";
import HeaderCat from "./HeaderCat";
export default function CatContent() {
  return (
    <Row>
      <Col span={24}>
        <HeaderCat />
      </Col>
      <Col span={24}>
        <div>
          <CardContent />
        </div>
        <div>
          <CardContent />
        </div>
        <div>
          <CardContent />
        </div>
      </Col>
      <Col span={24} className="pt-6  flex justify-end pr-6">
        <AddCate />
      </Col>
    </Row>
  );
}
