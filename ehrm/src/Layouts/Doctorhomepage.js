import React from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "bootstrap/dist/css/bootstrap.min.css";
import "./Doctorhomepage.css";
import Navbar from "./Navbar";

function Doctorhomepage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleViewAppointments = () => {
    navigate("/doctor/view-appointmentsById"); // Navigate to the 'view-appointments' route
  };

  const handleViewMedicalReports = () => {
    navigate("/doctor/view-medical-reportsById"); // Navigate to the 'view-medical-reports' route
  };

  return (
    <div className="background-image-container">
      <Navbar />
      <div className="container-fluid mt-4">
        {/* <h1 className="text-center">Welcome, [Username]</h1>
        <h5 className="text-center">You have access to doctor functions. Use the
        buttons below to navigate through it.</h5><br /> */}
        <br></br>
        <br></br>
        <div className="d-flex justify-content-center">
          <table className="table text-center">
            <tbody>
              <tr style={{ height: "300px" }}>
                <td>
                  <div className="button-container mb-4">
                    <button
                      className="btn btn-danger btn-lg btn-circle"
                      onClick={handleViewAppointments}
                    >
                      <FaEye />
                    </button>
                    <h5>View appointments</h5>
                  </div>
                </td>
                <td>
                  <div className="button-container mb-4">
                    <button
                      className="btn btn-warning btn-lg btn-circle"
                      onClick={handleViewMedicalReports}
                    >
                      <FaEye />
                    </button>
                    <h5>View medical reports</h5>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Doctorhomepage;

// import React from 'react';
// import { FaEye } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Doctorhomepage.css';
// import Navbar from './Navbar';

// function Doctorhomepage() {
//   return (
//     <div className="background-image-container">
//       <Navbar />
//       <div className="container-fluid mt-4">
//         <h1 className="text-center">Welcome, [Username]</h1>
//         <h5 className="text-center">You have access to doctor functions. Use the
//         buttons below to navigate through it.</h5><br />
// <br></br>
// <br></br>
// <br></br>
// <br></br>
//         <div className="d-flex justify-content-center">
//           <table className="table text-center">
//             <tbody>
//               <tr>
//                 <td>
//                   <div className="button-container mb-4">
//                     <button className="btn btn-danger btn-lg btn-circle"><FaEye /></button>
//                     <h5>View appointments</h5>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="button-container mb-4">
//                     <button className="btn btn-warning btn-lg btn-circle"><FaEye /></button>
//                     <h5>View medical reports</h5>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Doctorhomepage;
