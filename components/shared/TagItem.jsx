import React from "react";
import Styles from "@/styles/scss/common/TagItem.module.scss";
export default function TagItem({ text }) {
  return <span className={Styles.wrapper}>{text}</span>;
}
