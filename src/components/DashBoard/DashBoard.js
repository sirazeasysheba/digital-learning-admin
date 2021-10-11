import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import {
  faUser,
  faChalkboardTeacher,
  faFileInvoice,
  faBan,
  faHandSpock,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Layout/Sidebar";
import TopBar from "../Layout/TopBar";
import { useSelector } from "react-redux";
const DashBoard = () => {
  
  return (
    <>
      <div>
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
            <Container>
              <div className=" d-flex justify-content-between align-items-center">
                <h3>DashBoard</h3>
                <p className="me-3 text-danger" style={{ fontSize: 12 }}>
                  Home/dashboard
                </p>
              </div>
              <Row className="gx-5 mb-5">
                <Col md={4}>
                  <div className="shadow d-flex align-items-center my-3">
                    <div
                      className="icon-container m-2 d-flex justify-content-center align-items-center"
                      style={{ background: "#47c363" }}
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        className="dashboard-icon"
                      />
                    </div>
                    <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                      <p className="text-muted">Total Admin</p>
                      <p className="fw-bold text-center">10</p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="shadow d-flex align-items-center my-3">
                    <div
                      className="icon-container m-2 d-flex justify-content-center align-items-center"
                      style={{ background: "#191d21" }}
                    >
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        className="dashboard-icon"
                      />
                    </div>
                    <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                      <p className="text-muted">Total Instructor</p>
                      <p className="fw-bold text-center">10</p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="shadow d-flex align-items-center my-3">
                    <div
                      className="icon-container m-2 d-flex justify-content-center align-items-center"
                      style={{ background: "#ffa426" }}
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        className="dashboard-icon"
                      />
                    </div>
                    <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                      <p className=" text-muted">Total Students</p>
                      <p className="fw-bold text-center">10</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <h3>Charts</h3>

              <h3>Courses</h3>
              <Row className="gx-5 mb-5">
                <Col md={3}>
                  <div className="shadow d-flex align-items-center mb-3">
                    <div
                      className="icon-container m-2 d-flex justify-content-center align-items-center"
                      style={{ background: "#47c363" }}
                    >
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        className="dashboard-icon"
                      />
                    </div>
                    <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                      <p className="text-muted">Courses</p>
                      <p className="fw-bold text-center">10</p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="shadow d-flex align-items-center mb-3">
                    <div
                      className="icon-container m-2 d-flex justify-content-center align-items-center"
                      style={{ background: "#ffa426" }}
                    >
                      <FontAwesomeIcon
                        icon={faHandSpock}
                        className="dashboard-icon"
                      />
                    </div>
                    <div className="ms-4 mt-1" style={{ lineHeight: 1 }}>
                      <p className="text-muted" style={{ fontSize: 12 }}>
                        Waiting for approval
                      </p>
                      <p className="fw-bold ms-3">10</p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="shadow d-flex align-items-center mb-3">
                    <div
                      className="icon-container m-2 d-flex justify-content-center align-items-center"
                      style={{ background: " #191d21" }}
                    >
                      <FontAwesomeIcon
                        icon={faBan}
                        className="dashboard-icon"
                      />
                    </div>
                    <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                      <p className=" text-muted">Block</p>
                      <p className="fw-bold text-center">10</p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="shadow d-flex align-items-center mb-3">
                    <div
                      className="icon-container m-2 d-flex justify-content-center align-items-center"
                      style={{ background: "#ee524f" }}
                    >
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="dashboard-icon"
                      />
                    </div>
                    <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                      <p className=" text-muted">Rejected</p>
                      <p className="fw-bold text-center">10</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashBoard;
