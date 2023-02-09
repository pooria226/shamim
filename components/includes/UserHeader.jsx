import React from "react";
import { Row, Col } from "antd";
import HeaderButton from "../shared/HeaderButton";
import ThemeButton from "../shared/ThemeButton";
import Styles from "@/styles/scss/common/UserHeader.module.scss";

import SettingIcon from "public/assets/images/svgs/setting.svg";
import LogoutIcon from "public/assets/images/svgs/logout.svg";
import BellIcon from "public/assets/images/svgs/bell.svg";
import ImageProvider from "@/providers/ImageProvider";

export default function UserHeader() {
  return (
    <Row className={Styles.wrapper}>
      <Col className="flex justify-between px-10 py-5" span={24}>
        <div className="flex items-center">
          <div className="pr-2.5">
            <ThemeButton />
          </div>
          <div className="pr-4">
            <HeaderButton icon={<LogoutIcon />} />
          </div>
          <div className="pr-4">
            <HeaderButton icon={<SettingIcon />} />
          </div>
          <div className="pr-4">
            <HeaderButton badge={true} icon={<BellIcon />} />
          </div>
        </div>
        <div>
          <ImageProvider
            width={100}
            height={40}
            src="/assets/images/jpg/logo.jpg"
            alt="logo"
          />
        </div>
      </Col>
    </Row>
  );
}
