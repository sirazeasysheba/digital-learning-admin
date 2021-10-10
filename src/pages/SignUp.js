import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Input from "../UI/Input";
const SignUp = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <Form>
              <Input
                label="Name*"
                type="text"
                placeholder="Name"
                value=""
                onChange={() => {}}
              />
              <Input
                label="Username*"
                type="text"
                placeholder="Username"
                value=""
                onChange={() => {}}
              />
              <Input
                label="Email*"
                type="email"
                placeholder="Email"
                value=""
                onChange={() => {}}
              />
              <Input
                label="Phone*"
                type="text"
                placeholder="Phone"
                value=""
                onChange={() => {}}
              />
              <Input
                label="Password *"
                type="password"
                placeholder="Password"
                value=""
                onChange={() => {}}
              />
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember me?" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login{" "}
              </Button>
            </Form>
            <p>
              Already have an account? <Link to="/">SignIn</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
