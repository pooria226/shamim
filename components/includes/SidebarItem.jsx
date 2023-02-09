import React from "react";
import { Button, Col, Row } from "antd";
import TabItem from "../shared/TabItem";
import Styles from "@/styles/scss/common/SidebarItem.module.scss";

import DashboardIcon from "public/assets/images/svgs/dashboard.svg";
import UserIcon from "public/assets/images/svgs/user.svg";
import ChatIcon from "public/assets/images/svgs/chat.svg";
import SmsIcon from "public/assets/images/svgs/sms.svg";
import BillIcon from "public/assets/images/svgs/bill.svg";
import ArrowIcon from "public/assets/images/svgs/arrow.svg";
import BarcodeIcon from "public/assets/images/svgs/barcode.svg";
export default function SidebarItem({
  router,
  handleToggleSidebar,
  sidebar,
  theme,
}) {
  return (
    <Row
      className={`${sidebar ? Styles.openWrapper : Styles.closeWrapper} ${
        theme ? Styles.lightWrapper : Styles.darkWrapper
      }`}
    >
      <Col span={24} className="px-4 pt-6">
        <TabItem
          active={router.route == "/"}
          icon={<DashboardIcon />}
          text="داشبورد"
          sidebar={sidebar}
        />
        <TabItem sidebar={sidebar} icon={<UserIcon />} text="پروفایل" />
        <TabItem sidebar={sidebar} icon={<ChatIcon />} text="گفتگو ها" />
        <TabItem sidebar={sidebar} icon={<SmsIcon />} text="ارسال دعوت نامه" />
        <TabItem sidebar={sidebar} icon={<BillIcon />} text="صدور پیش فاکتور" />
        <TabItem sidebar={sidebar} icon={<UserIcon />} text="عضویت در کانتمو" />
        <TabItem sidebar={sidebar} icon={<BarcodeIcon />} text="نمایش اثار" />
      </Col>
      <Button onClick={handleToggleSidebar} className={Styles.lightCloseButton}>
        <ArrowIcon />
      </Button>
    </Row>
  );
}
