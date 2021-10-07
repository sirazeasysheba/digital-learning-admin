import React from "react";
import { Container, Form, Table, Button, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Students = () => {
  return (
    <Container>
      <div className=" d-flex justify-content-between align-items-center">
        <h3>Students</h3>
        <p className="me-3 text-danger" style={{ fontSize: 12 }}>
          Home/students
        </p>
      </div>
      <div className=" d-flex justify-content-between align-items-center">
        <p className="text-danger">Student list</p>
        <Form className="d-flex ">
          <p className="mt-2 me-3" style={{ fontSize: 12 }}>
            Search Student:{" "}
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
              <th>Email</th>
              <th>Course</th>
              <th>Status</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: 12 }}>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>mark@gmail.com</td>
              <td>web development</td>
              <td>
                <p className="active-status">Active</p>
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  style={{ fontSize: 12, padding: "2px 10px" }}
                >
                  Block
                </Button>
              </td>
              <td>
                <Link to="student/details">
                  {" "}
                  <Button variant="outline-info" className="table-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mark</td>
              <td>mark@gmail.com</td>
              <td>web development</td>
              <td>
                <span className="block-status ">Block</span>
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  style={{ fontSize: 12, padding: "2px 10px" }}
                >
                  Un-block
                </Button>
              </td>
              <td>
                <Link to="student/details">
                  {" "}
                  <Button variant="outline-info" className="table-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container>
  );
};

export default Students;
