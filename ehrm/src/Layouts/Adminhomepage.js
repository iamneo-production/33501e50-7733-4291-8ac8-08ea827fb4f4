import React from "react";
import { FaPlus, FaEye } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Adminhomepage.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

function Adminhomepage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Functions to navigate to different components
  const goToAddDoctors = () => {
    navigate("/admin/add-doctors");
  };

  const goToAddStaff = () => {
    navigate("/admin/add-staff");
  };

  const goToViewDoctors = () => {
    navigate("/admin/view-doctors");
  };

  const goToViewStaffs = () => {
    navigate("/admin/view-staffs");
  };

  return (
    <div className="background-image-container">
      <Navbar />
      <div className="container-fluid mt-4">
        {/* <h1 className="text-center">Welcome, [Username]</h1>
        <h5 className="text-center">
          You have access to various administrative functions. Use the buttons
          below to navigate through different options.
        </h5> */}
        <br></br>
        <br></br>
        <table className="table text-center">
          <tbody>
            <tr style={{ height: "190px" }}>
              <td>
                <div className="button-container">
                  <button
                    className="btn btn-primary btn-lg btn-circle"
                    onClick={goToAddDoctors}
                  >
                    <FaPlus />
                  </button>
                  <h5>Add Doctor</h5>
                </div>
              </td>
              <td>
                <div className="button-container">
                  <button
                    className="btn btn-warning btn-lg btn-circle"
                    onClick={goToAddStaff}
                  >
                    <FaPlus />
                  </button>
                  <h5>Add Staff</h5>
                </div>
              </td>
            </tr>
            <tr style={{ height: "190px" }}>
              <td>
                <div className="button-container">
                  <button
                    className="btn btn-success btn-lg btn-circle"
                    onClick={goToViewDoctors}
                  >
                    <FaEye />
                  </button>
                  <h5>View Doctors</h5>
                </div>
              </td>
              <td>
                <div className="button-container">
                  <button
                    className="btn btn-danger btn-lg btn-circle"
                    onClick={goToViewStaffs}
                  >
                    <FaEye />
                  </button>
                  <h5>View Staff</h5>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminhomepage;
