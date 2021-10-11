import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link, useHistory, useLocation, Redirect } from "react-router-dom";
import Input from "../UI/Input";
import { isUserLoggedIn, login } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/dashboard" } };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const userLogin = (e) => {
    e.preventDefault();

    const user = { email, password };
    dispatch(login(user));
    history.replace(from);
  };

  if (auth.authenticate) {
    return <Redirect to={`/dashboard`} />;
  }
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email*"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password *"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember me?" />
              </Form.Group>
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
