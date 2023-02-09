import React from "react";
import { Button } from "antd";
import Styles from "@/styles/scss/common/HeaderButton.module.scss";
export default function HeaderButton({ icon, badge = false, theme }) {
  return (
    <Button className={theme ? Styles.lightButton : Styles.darkButton}>
      {icon}
      {badge ? <div className={Styles.badge}>2</div> : null}
    </Button>
  );
}
