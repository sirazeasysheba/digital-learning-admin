import React from "react";
import Sidebar from "./Sidebar";
const Courses = () => {
  return (
    <div
      className=" container-fluid row"
      style={{ height: "100%", backgroundColor: "#F4FDFB" }}
    >
      <div className="col-md-2 sidebar-container">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 p-5"></div>
    </div>
  );
};

export default Courses;
