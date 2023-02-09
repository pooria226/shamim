import React from "react";
import { Col, Row } from "antd";
import Styles from "@/styles/scss/common/InformationContent.module.scss";
import CustomeDivider from "./CustomeDivider";
import Avatar from "./Avatar";
import TagItem from "./TagItem";
export default function InformationContent() {
  return (
    <Row className={Styles.lightWrapper}>
      <Col span={24}>
        <CustomeDivider text={"اطلاعات شناسایی"} />
      </Col>
      <Col span={24} className="pt-4">
        <Avatar />
      </Col>
      <Col span={24} className="pt-4">
        <CustomeDivider text={"تگ لاین ها"} />
      </Col>
      <Col span={24} className="flex flex-wrap justify-end pt-4">
        <TagItem text="طراحی سایت" />
        <TagItem text="تجربه کابری" />
        <TagItem text="گرافیک" />
      </Col>
      <Col span={24} className="pt-4">
        <CustomeDivider text={"درباره من"} />
      </Col>
      <Col span={24}>
        <div className="py-4">
          <p className={Styles.lightAboutMe}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            روزنامه و مجله در
          </p>
        </div>
      </Col>{" "}
      <Col span={24} className="pt-4">
        <CustomeDivider text={"مهارت ها"} />
      </Col>
      <Col span={24} className="flex flex-wrap justify-end pt-4">
        <TagItem text="طراحی سایت" />
        <TagItem text="تجربه کابری" />
        <TagItem text="گرافیک" />
      </Col>
      <Col span={24} className="pt-4">
        <CustomeDivider text={"گواهینامه و مدارک تحصیلی"} />
      </Col>
      <Col span={24} className="pt-4">
        <div className={Styles.wrapperList}>
          <div>
            <div className={Styles.itemList}>
              <p>کارشناس کامپیوتر - دانشگاه تبریز</p>
            </div>
            <div className={Styles.itemList}>
              <p>مبانی طراحی - Udemy</p>
            </div>
          </div>
        </div>
      </Col>
      <Col span={24} className="pt-4">
        <CustomeDivider text={"سوابق شغلی"} />
      </Col>
      <Col span={24} className="pt-4">
        <div className={Styles.wrapperList}>
          <div>
            <div className={Styles.itemList}>
              <p>کارشناس کامپیوتر - دانشگاه تبریز</p>
            </div>
            <div className={Styles.itemList}>
              <p>مبانی طراحی - Udemy</p>
            </div>
          </div>
        </div>
      </Col>
      <div style={{ marginTop: 350 }}></div>
    </Row>
  );
}
