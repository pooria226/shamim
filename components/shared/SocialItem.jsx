import React from "react";
import Styles from "@/styles/scss/common/Avatar.module.scss";
export default function SocialItem({ icon }) {
  return (
    <a>
      <div className={Styles.wrapperIcon}>{icon}</div>
    </a>
  );
}
