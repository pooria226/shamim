import { Col, Row } from "antd";
import React from "react";
import AddCate from "./AddCate";
import CardContent from "./CardContent";
import HeaderCat from "./HeaderCat";
export default function CatContent({ theme }) {
  return (
    <Row>
      <Col span={24} className="md:mt-0 mt-6">
        <HeaderCat />
      </Col>
      <Col span={24}>
        <div>
          <CardContent theme={theme} />
        </div>
        <div>
          <CardContent theme={theme} />
        </div>
        <div>
          <CardContent theme={theme} />
        </div>
      </Col>
      <Col span={24} className="pt-6  flex justify-end pr-6">
        <AddCate />
      </Col>
    </Row>
  );
}
