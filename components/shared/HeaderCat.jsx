import React from "react";
import { Button, Col, Row } from "antd";
import Styles from "@/styles/scss/common/HeaderCat.module.scss";
import FolderIcon from "public/assets/images/svgs/folder.svg";
import AlignIcon from "public/assets/images/svgs/align.svg";
export default function HeaderCat() {
  return (
    <Row className="pl-1 pr-6 pt-2">
      <Col span={24}>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className={Styles.wrapperButton}>
              <Button className={Styles.leftButton}>
                <AlignIcon />
              </Button>
              <Button className={Styles.rightButton}>
                <FolderIcon />
              </Button>
            </div>
            <div className="pl-4">
              <p className={Styles.lightType}>: نوع نمایش </p>
            </div>
          </div>
          <div>
            <p className={Styles.lightText}> : آثار من </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}
