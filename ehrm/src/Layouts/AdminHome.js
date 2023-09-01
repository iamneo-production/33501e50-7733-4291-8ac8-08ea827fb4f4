import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaPlus, FaEye, FaSignOutAlt } from "react-icons/fa";

function AdminHome() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Admin Panel</span>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <FaUser className="icon" />
                  View Profile
                </Link>
              </li>
              &nbsp;
              &nbsp;
              &nbsp;
              <li className="nav-item">
                <Link to="/logout" className="nav-link text-danger">
                  <FaSignOutAlt className="icon" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-md-9 mx-auto">
            <div className="content">
              <h2 className="mb-4">Welcome to the Admin Panel</h2>
              <p>
                You have access to various administrative functions. Use the
                buttons below to navigate through different options.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/add-doctor" className="btn btn-primary btn-lg m-3">
                  <FaPlus className="btn-icon" />
                  Add Doctor
                </Link>
                <Link to="/add-staff" className="btn btn-success btn-lg m-3">
                  <FaPlus className="btn-icon" />
                  Add Staff
                </Link>
                <Link to="/view-doctors" className="btn btn-info btn-lg m-3">
                  <FaEye className="btn-icon" />
                  View Doctors
                </Link>
                <Link to="/view-staff" className="btn btn-warning btn-lg m-3">
                  <FaEye className="btn-icon" />
                  View Staff
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
