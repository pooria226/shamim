import React from "react";
import { Switch } from "antd";
import MoonIcon from "public/assets/images/svgs/moon.svg";
import SunIcon from "public/assets/images/svgs/sun.svg";
import Styles from "@/styles/scss/common/ThemeButton.module.scss";
export default function ThemeButton() {
  return (
    <div className={Styles.wrapper}>
      <Switch
        checkedChildren={
          <div style={{ transform: "rotate(-75deg)" }}>
            <MoonIcon />
          </div>
        }
        unCheckedChildren={<SunIcon />}
        defaultChecked
      />
    </div>
  );
}
