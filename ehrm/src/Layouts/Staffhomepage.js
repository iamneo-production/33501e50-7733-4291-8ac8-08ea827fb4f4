import React from "react";
import { FaCalendar, FaEye, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "bootstrap/dist/css/bootstrap.min.css";
import "./Staffhomepage.css";
import Navbar from "./Navbar";

function Staffhomepage() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="background-image-container">
      <Navbar />
      <div className="container-fluid mt-4">
        {/* <h1 className="text-center">Welcome, Username</h1>
        <h5 className="text-center">
          You have access to various staff functions. Use the buttons below to
          navigate through different options.
        </h5> */}
        <br></br>
        <br></br>
        <table className="table text-center">
          <tbody>
            <tr style={{ height: "190px" }}>
              <td>
                <div
                  className="button-container"
                  onClick={() => navigate("/staff/add-patient")} // Navigate to AddPatient component
                >
                  <button className="btn btn-success btn-lg btn-circle">
                    <FaPlus />
                  </button>
                  <h5>Add Patient</h5>
                </div>
              </td>
              <td>
                <div
                  className="button-container"
                  onClick={() => navigate("/staff/view-patients")} // Navigate to ViewPatients component
                >
                  <button className="btn btn-info btn-lg btn-circle">
                    <FaEye />
                  </button>
                  <h5>View Patients</h5>
                </div>
              </td>
              <td>
                <div
                  className="button-container"
                  onClick={() => navigate("/staff/view-doctors")} // Navigate to ViewDoctors component
                >
                  <button className="btn btn-primary btn-lg btn-circle">
                    <FaEye />
                  </button>
                  <h5>View Doctors</h5>
                </div>
              </td>
            </tr>
            <tr style={{ height: "190px" }}>
              <td>
                <div
                  className="button-container"
                  onClick={() => navigate("/staff/appointment-booking")} // Navigate to AppointmentBooking component
                >
                  <button className="btn btn-light btn-lg btn-circle">
                    <FaCalendar />
                  </button>
                  <h5>Appointment Booking</h5>
                </div>
              </td>
              <td>
                <div
                  className="button-container"
                  onClick={() => navigate("/staff/view-appointments")} // Navigate to ViewAppointments component
                >
                  <button className="btn btn-secondary btn-lg btn-circle">
                    <FaEye />
                  </button>
                  <h5>View Appointments</h5>
                </div>
              </td>
              <td>
                <div
                  className="button-container"
                  onClick={() => navigate("/staff/view-medical-reports")} // Navigate to ViewMedicalReports component
                >
                  <button className="btn btn-dark btn-lg btn-circle">
                    <FaEye />
                  </button>
                  <h5>View Medical Reports</h5>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Staffhomepage;

// import React from "react";
// import { FaCalendar, FaEye, FaPlus } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./StaffHomePage.css";
// import Navbar from "./Navbar";
// function Staffhomepage() {
//   return (
//     <div className="background-image-container">
//       <Navbar />
//       <div className="container-fluid mt-4">
//         <h1 className="text-center">Welcome, Username</h1>
//         <h5 className="text-center">
//           You have access to various staff functions. Use the buttons below to
//           navigate through different options.
//         </h5>
//         <br></br>
//         <table className="table text-center">
//           <tbody>
//             <tr>
//               <td>
//                 <div className="button-container">
//                   <button className="btn btn-success btn-lg btn-circle">
//                     <FaPlus />
//                   </button>
//                   <h5>Add Patient</h5>
//                 </div>
//               </td>
//               <td>
//                 <div className="button-container">
//                   <button className="btn btn-info btn-lg btn-circle">
//                     <FaEye />
//                   </button>
//                   <h5>View Patients</h5>
//                 </div>
//               </td>
//               <td>
//                 <div className="button-container">
//                   <button className="btn btn-primary btn-lg btn-circle">
//                     <FaEye />
//                   </button>
//                   <h5>View Doctors</h5>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <div className="button-container">
//                   <button className="btn btn-light btn-lg btn-circle">
//                     <FaCalendar />
//                   </button>
//                   <h5>Appointment Booking</h5>
//                 </div>
//               </td>
//               <td>
//                 <div className="button-container">
//                   <button className="btn btn-secondary btn-lg btn-circle">
//                     <FaEye />
//                   </button>
//                   <h5>View Appointments</h5>
//                 </div>
//               </td>
//               <td>
//                 <div className="button-container">
//                   <button className="btn btn-dark btn-lg btn-circle">
//                     <FaEye />
//                   </button>
//                   <h5>View Medical Reports</h5>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// export default Staffhomepage;
