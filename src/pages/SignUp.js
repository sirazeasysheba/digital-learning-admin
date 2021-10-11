import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../redux/actions";
import Input from "../UI/Input";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const userSignup = (e) => {
    e.preventDefault();
    const user = { name, username, email, contactNumber, password };
    dispatch(signup(user));
  };

  if (user.authenticate) {
    return <Redirect to={`/dashboard`} />;
  }
  if (user.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <Form onSubmit={userSignup}>
              <Input
                label="Name*"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Username*"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                label="Email*"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Phone*"
                type="text"
                placeholder="Phone"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
              <Input
                label="Password *"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant="primary" type="submit">
                Signup{" "}
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
