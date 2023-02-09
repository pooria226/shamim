import UserLayout from "@/components/layouts/UserLayout";
import CatContent from "@/components/shared/CatContent";
import InformationContent from "@/components/shared/InforamtionContent";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  //***************************
  // define hooks
  //***************************
  const router = useRouter();
  const dispatch = useDispatch();
  // *********************
  // store state
  // *********************
  const theme = useSelector((state) => state?.theme?.theme);
  return (
    <UserLayout title="Dashboard">
      <Row className="py-4 md:px-4 px-2">
        <Col
          xl={{ span: 19 }}
          lg={{ span: 16 }}
          md={{ span: 14, order: 0 }}
          order={1}
          span={24}
        >
          <CatContent theme={theme} />
        </Col>{" "}
        <Col xl={{ span: 5 }} lg={{ span: 8 }} md={{ span: 10 }} span={24}>
          <InformationContent theme={theme} />
        </Col>
      </Row>
    </UserLayout>
  );
}
