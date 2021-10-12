import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../Layout/Sidebar";
import TopBar from "../Layout/TopBar";

const AddCourse = () => {
  return (
    <Row>
      <Col md={2} className="sidebar-container">
        <Sidebar />
      </Col>
      <Col
        md={10}
        className="container-fluid "
        style={{ height: "100%", backgroundColor: "#F4FDFB" }}
      >
        <TopBar />
      </Col>
    </Row>
  );
};

export default AddCourse;
