import React from "react";
import { Row, Col, Button } from "antd";
import HeaderButton from "../shared/HeaderButton";
import ThemeButton from "../shared/ThemeButton";
import Styles from "@/styles/scss/common/UserHeader.module.scss";

import SettingIcon from "public/assets/images/svgs/setting.svg";
import LogoutIcon from "public/assets/images/svgs/logout.svg";
import BellIcon from "public/assets/images/svgs/bell.svg";
import BarIcon from "public/assets/images/svgs/bar.svg";
import ImageProvider from "@/providers/ImageProvider";

export default function UserHeader({
  handleToggleSidebar,
  theme,
  handleChangeTheme,
}) {
  return (
    <Row className={theme ? Styles.lightWrapper : Styles.darkWrapper}>
      <Col className="flex justify-between md:px-10 px-2 py-5" span={24}>
        <div className="flex items-center">
          <div className="md:pr-2.5 pr-1">
            <ThemeButton handleChangeTheme={handleChangeTheme} />
          </div>
          <div className="md:pr-4 pr-2">
            <HeaderButton theme={theme} icon={<LogoutIcon />} />
          </div>
          <div className="md:pr-4 pr-2">
            <HeaderButton theme={theme} icon={<SettingIcon />} />
          </div>
          <div className="md:pr-4 pr-2">
            <HeaderButton theme={theme} badge={true} icon={<BellIcon />} />
          </div>
        </div>
        <div className="flex items-center">
          <div className="md:block hidden">
            <ImageProvider
              width={100}
              height={40}
              src="/assets/images/jpg/logo.jpg"
              alt="logo"
            />
          </div>
          <div className="md:hidden block pr-2">
            <ImageProvider
              width={70}
              height={40}
              src="/assets/images/jpg/logo.jpg"
              alt="logo"
            />
          </div>
          <div className="md:hidden block">
            <Button onClick={handleToggleSidebar} className={Styles.menuBar}>
              <BarIcon />
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
