import { Col, Row } from "react-bootstrap";
import { Route, Switch } from "react-router";
import DashBoard from "./components/DashBoard/DashBoard";
import Sidebar from "./components/Layout/Sidebar";
import Students from "./components/DashBoard/Students";
import "./styles/styles.scss";
import TopBar from "./components/Layout/TopBar";
import Instructors from "./components/DashBoard/Instructors";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Route exact path="/students">
          <Students />
        </Route>
        <Route exact path="/instructors">
          <Instructors />
        </Route>
      </Switch>
    </>
  );
}

export default App;
