import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import Styles from "@/styles/scss/common/SidebarItem.module.scss";
export default function TabItem({
  text,
  href = "/",
  icon,
  active = false,
  sidebar,
}) {
  return (
    <Row>
      <Col span={24}>
        <div
          className={`${active ? Styles.lightTabActive : Styles.lightTab} ${
            !sidebar && Styles.closeTab
          }`}
        >
          <Link className="flex md:justify-end items-center" href={href}>
            <span className={Styles.link}> {text}</span>{" "}
            <span className="pl-4">{icon}</span>
          </Link>
        </div>
      </Col>
    </Row>
  );
}
