import ImageProvider from "@/providers/ImageProvider";
import { Col, Row } from "antd";
import React from "react";
import SocialItem from "./SocialItem";
import Styles from "@/styles/scss/common/Avatar.module.scss";
import DribbbleIcon from "public/assets/images/svgs/dribbble.svg";
import InstaIcon from "public/assets/images/svgs/insta.svg";
import SpancahtIcon from "public/assets/images/svgs/snapchat.svg";
export default function Avatar() {
  return (
    <Row className="text-center">
      <Col span={24}>
        <div className={Styles.wrapperImg}>
          <ImageProvider
            width={90}
            height={90}
            src={"/assets/images/jpg/pooria.jpg"}
          />
        </div>
        <div>
          <p className={Styles.text}>پوریا محمدی</p>
        </div>
        <div className="flex justify-center mt-4">
          <div>
            <SocialItem icon={<DribbbleIcon />} />
          </div>
          <div className="px-4">
            <SocialItem icon={<InstaIcon />} />
          </div>
          <div>
            <SocialItem icon={<SpancahtIcon />} />
          </div>
        </div>
      </Col>
    </Row>
  );
}
