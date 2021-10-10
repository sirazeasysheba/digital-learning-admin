import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Input from "../UI/Input";

const Login = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <Form>
              <Input
                label="Email*"
                type="email"
                placeholder="Email"
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
              <Button variant="primary" type="submit">
                Login{" "}
              </Button>
            </Form>
            <p>
              Don't have any account? <Link to="/signup">Signup</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
