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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/actions";
import Courses from "./components/DashBoard/Courses";
import Setting from "./components/DashBoard/Setting";
import Blog from "./components/DashBoard/Blog";
import AddInstructors from "./components/DashBoard/AddInstructors";
import AddCourse from "./components/DashBoard/AddCourse";
import Profile from "./components/DashBoard/Profile";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute exact path="/dashboard">
          <DashBoard />
        </PrivateRoute>
        <PrivateRoute exact path="/students">
          <Students />
        </PrivateRoute>
        <PrivateRoute exact path="/instructors">
          <Instructors />
        </PrivateRoute>
        <PrivateRoute exact path="/all-courses">
          <Courses />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/setting">
          <Setting />
        </PrivateRoute>
        <PrivateRoute exact path="/blogs">
          <Blog />
        </PrivateRoute>
        <PrivateRoute exact path="/add-instructors">
          <AddInstructors />
        </PrivateRoute>
        <PrivateRoute exact path="/add-course">
          <AddCourse />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
