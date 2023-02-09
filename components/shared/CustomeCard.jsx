import React from "react";
import { Button, Col, Row } from "antd";
import ImageProvider from "@/providers/ImageProvider";
import Styles from "@/styles/scss/common/CardContent.module.scss";
import MenuIcon from "public/assets/images/svgs/menu.svg";
export default function CustomeCard({ theme }) {
  return (
    <Row className={theme ? Styles.lightCard : Styles.darkCard}>
      <Col span={24}>
        <div className="flex flex-col">
          <div className={Styles.menuBar}>
            <Button>
              <MenuIcon />
            </Button>
          </div>
          <div>
            <ImageProvider
              width={250}
              height={40}
              src="/assets/images/jfif/coca.jfif"
              styles={{ width: "100%" }}
            />
          </div>
          <div>
            <p className={Styles.cardFooter}>
              لورم ایپسوم متن ساختگی با تولید سادگی سادگی
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}
