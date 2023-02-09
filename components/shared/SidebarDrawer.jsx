import React from "react";
import { Button, Col, Drawer, Row } from "antd";
import CloseIcon from "public/assets/images/svgs/close.svg";
import DashboardIcon from "public/assets/images/svgs/dashboard.svg";
import UserIcon from "public/assets/images/svgs/user.svg";
import ChatIcon from "public/assets/images/svgs/chat.svg";
import SmsIcon from "public/assets/images/svgs/sms.svg";
import BillIcon from "public/assets/images/svgs/bill.svg";
import BarcodeIcon from "public/assets/images/svgs/barcode.svg";
import TabItem from "./TabItem";
export default function SidebarDrawer({ onClose, open, router, sidebar }) {
  return (
    <div>
      <Drawer
        headerStyle={{ display: "none" }}
        placement="right"
        onClose={onClose}
        open={open}
        className="sidebar-drawer"
      >
        <Button style={{ border: 0, boxShadow: "0 0 0px" }} onClick={onClose}>
          <CloseIcon />
        </Button>

        <Row>
          <Col span={24} className="px-4 pt-6">
            <TabItem
              active={router.route == "/"}
              icon={<DashboardIcon />}
              text="داشبورد"
              sidebar={sidebar}
            />
            <TabItem sidebar={sidebar} icon={<UserIcon />} text="پروفایل" />
            <TabItem sidebar={sidebar} icon={<ChatIcon />} text="گفتگو ها" />
            <TabItem
              sidebar={sidebar}
              icon={<SmsIcon />}
              text="ارسال دعوت نامه"
            />
            <TabItem
              sidebar={sidebar}
              icon={<BillIcon />}
              text="صدور پیش فاکتور"
            />
            <TabItem
              sidebar={sidebar}
              icon={<UserIcon />}
              text="عضویت در کانتمو"
            />
            <TabItem
              sidebar={sidebar}
              icon={<BarcodeIcon />}
              text="نمایش اثار"
            />
          </Col>
        </Row>
      </Drawer>
    </div>
  );
}
