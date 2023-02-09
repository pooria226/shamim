import UserLayout from "@/components/layouts/UserLayout";
import CatContent from "@/components/shared/CatContent";
import InformationContent from "@/components/shared/InforamtionContent";
import { Col, Row } from "antd";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <UserLayout title="Dashboard">
      <Row className="py-4 px-4">
        <Col xl={{ span: 19 }} lg={{ span: 16 }} md={{ span: 14 }} span={24}>
          <CatContent />
        </Col>{" "}
        <Col xl={{ span: 5 }} lg={{ span: 8 }} md={{ span: 10 }} span={24}>
          <InformationContent />
        </Col>
      </Row>
    </UserLayout>
  );
}
