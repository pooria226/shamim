import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import Styles from "@/styles/scss/common/SidebarItem.module.scss";
export default function TabItem({ text, href = "/", icon, active = false }) {
  return (
    <Row>
      <Col span={24}>
        <div className={active ? Styles.lightTabActive : Styles.lightTab}>
          <Link className="flex justify-end items-center" href={href}>
            {text} <span className="pl-4">{icon}</span>
          </Link>
        </div>
      </Col>
    </Row>
  );
}
