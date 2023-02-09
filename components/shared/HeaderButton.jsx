import React from "react";
import { Button } from "antd";
import Styles from "@/styles/scss/common/HeaderButton.module.scss";
export default function HeaderButton({ icon, badge = false }) {
  return (
    <Button className={Styles.lightButton}>
      {icon}
      {badge ? <div className={Styles.badge}>2</div> : null}
    </Button>
  );
}
