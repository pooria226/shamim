import React from "react";
import { Col, Row } from "antd";
import TabItem from "../shared/TabItem";
import Styles from "@/styles/scss/common/SidebarItem.module.scss";
import DashboardIcon from "public/assets/images/svgs/dashboard.svg";
import UserIcon from "public/assets/images/svgs/user.svg";
import ChatIcon from "public/assets/images/svgs/chat.svg";
import SmsIcon from "public/assets/images/svgs/sms.svg";
import BillIcon from "public/assets/images/svgs/bill.svg";
import BarcodeIcon from "public/assets/images/svgs/barcode.svg";
export default function SidebarItem({ router }) {
  return (
    <Row className={Styles.openWrapper}>
      <Col span={24} className="px-4 pt-6">
        <TabItem
          active={router.route == "/"}
          icon={<DashboardIcon />}
          text="داشبورد"
        />
        <TabItem icon={<UserIcon />} text="پروفایل" />
        <TabItem icon={<ChatIcon />} text="گفتگو ها" />
        <TabItem icon={<SmsIcon />} text="ارسال دعوت نامه" />
        <TabItem icon={<BillIcon />} text="صدور پیش فاکتور" />
        <TabItem icon={<UserIcon />} text="عضویت در کانتمو" />
        <TabItem icon={<BarcodeIcon />} text="نمایش اثار" />
      </Col>
    </Row>
  );
}
