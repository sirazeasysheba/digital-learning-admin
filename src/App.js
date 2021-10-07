import { Col, Container, Row } from "react-bootstrap";
import { Route, Switch } from "react-router";
import DashBoard from "./components/DashBoard/DashBoard";
import Sidebar from "./components/Layout/Sidebar";
import Students from "./components/DashBoard/Students";
import Layout from "./components/Layout/Layout";
import "./styles/styles.scss";
import TopBar from "./components/Layout/TopBar";
import Instructors from "./components/DashBoard/Instructors";
import Navigation from "./components/Layout/Navigation";
function App() {
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
        <Switch>
          <Route exact path="/">
            <DashBoard />
          </Route>
          <Route exact path="/students">
            <Students />
          </Route>
          <Route exact path="/instructors">
            <Instructors />
          </Route>
          <Route exact path="/nav">
            <Navigation />
          </Route>
        </Switch>
      </Col>
    </Row>
  );
}

export default App;
