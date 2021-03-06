import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signOut());
  };
  return (
    <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>

        <div>
          <li>
            <Link to="/all-courses" className="text-white text-decoration-none">
              <FontAwesomeIcon icon={faCalendar} /> <span>Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/students" className="text-white text-decoration-none">
              <FontAwesomeIcon icon={faUsers} /> <span>Students</span>
            </Link>
          </li>
          <li>
            <Link to="/instructors" className="text-white text-decoration-none">
              <FontAwesomeIcon icon={faUsers} /> <span>Instructors</span>
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="text-white text-decoration-none">
              <FontAwesomeIcon icon={faCalendar} /> <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link
              to="/add-instructors"
              className="text-white text-decoration-none"
            >
              <FontAwesomeIcon icon={faUserPlus} /> <span>Add Instructor</span>
            </Link>
          </li>
          <li>
            <Link to="/add-course" className="text-white text-decoration-none">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Add Course</span>
            </Link>
          </li>
        </div>
        <li>
          <Link to="/admin/setting" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white text-decoration-none">
          <FontAwesomeIcon icon={faSignOutAlt} />{" "}
          <span onClick={logout}>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
