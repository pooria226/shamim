import React from "react";
import { Button, Col, Row } from "antd";
import Styles from "@/styles/scss/common/CardContent.module.scss";
import EditIcon from "public/assets/images/svgs/edit.svg";
import TrashIcon from "public/assets/images/svgs/trash.svg";
export default function CardDivider() {
  return (
    <Row className={Styles.cardDivider}>
      <Col span={24}>
        <div className="flex justify-end items-center">
          <div className="flex pr-4">
            <div className="pr-4">
              <Button className={Styles.trashButton}>
                <TrashIcon />
              </Button>
            </div>
            <div>
              <Button className={Styles.lightEditButton}>
                <EditIcon />
              </Button>
            </div>
          </div>
          <div>
            <p className={Styles.text}>تدوین و صدا گذاری</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}
