import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import TopBar from "../Layout/TopBar";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const Courses = () => {
  const [course, setCourse] = useState([]);
  axios.get("http://localhost:8000/api/courses/getcourses").then((response) => {
    setCourse(response.data.course);
  });

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

        <Container>
          <div className=" d-flex justify-content-between align-items-center">
            <h3>Instructors</h3>
            <p className="me-3 text-danger" style={{ fontSize: 12 }}>
              Home/Courses
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <p className="text-danger">Instructors list</p>
            <Form className="d-flex ">
              <p className="mt-2 me-3" style={{ fontSize: 12 }}>
                Search courses:{" "}
              </p>
              <Form.Group className="mb-3 w-50">
                <Form.Control type="text" placeholder="Search" />
              </Form.Group>
            </Form>
          </div>
          <div className="admin-table">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Added by</th>
                  <th>Price</th>
                  <th>Duration</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: 12 }}>
                {course?.map((course, index) => (
                  <tr>
                    <td>{index}</td>
                    <td>{course.name}</td>
                    <td>{course._id}</td>
                    <td>{course.price}</td>
                    <td>{course.duration}</td>
                    <td>Course</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default Courses;
