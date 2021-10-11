import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import profile from "../../media/dummy-profile-pic.jpg";
import logo from "../../media/logo.svg";
import {
  faUser,
  faUserGraduate,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/actions";
const TopBar = () => {
  const auth = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signOut());
  };
  const { name } = auth;
  return (
    <Container>
      <div className="dashboard-header d-flex justify-content-between my-3">
        <div className="d-flex justify-content-center align-items-center ms-2">
          <div className="dashboard-header-icon">
            <FontAwesomeIcon
              icon={faUserGraduate}
              style={{ fontSize: 40, marginLeft: 10 }}
              className="mt-2"
            />
          </div>
          <img
            src={logo}
            alt=""
            className="image-fluid"
            style={{ height: 60 }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center me-5">
          <div className="profile me-2 mt-2 pb-3">
            <img src={profile} alt="" />
          </div>
          <h6 className="text-white">{name}</h6>
          <div>
            <Dropdown>
              <Dropdown.Toggle className="dashboard-btn"></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  style={{ fontSize: 12, fontWeight: 700 }}
                  disabled
                >
                  Logged in
                </Dropdown.Item>
                <Dropdown.Item style={{ fontSize: 12, fontWeight: 700 }}>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      fontSize: 12,
                      marginRight: 10,
                    }}
                    className="mt-2 text-muted"
                  />{" "}
                  Profile
                </Dropdown.Item>
                <Dropdown.Item style={{ fontSize: 12, fontWeight: 700 }}>
                  <FontAwesomeIcon
                    icon={faCog}
                    style={{
                      fontSize: 12,
                      marginRight: 10,
                    }}
                    className="mt-2 text-dark"
                  />{" "}
                  Setting
                </Dropdown.Item>
                <Dropdown.Item
                  style={{ fontSize: 12, fontWeight: 700 }}
                  onClick={logout}
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={{
                      fontSize: 12,
                      marginRight: 10,
                    }}
                    className="mt-2 text-danger"
                  />{" "}
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopBar;
