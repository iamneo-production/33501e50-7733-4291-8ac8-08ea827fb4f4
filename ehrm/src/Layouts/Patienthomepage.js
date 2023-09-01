import React from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "bootstrap/dist/css/bootstrap.min.css";
import "./Patienthomepage.css";
import Navbar from "./Navbar";

function Patienthomepage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleViewAppointments = () => {
    navigate("/patient/view-appointments"); // Navigate to the specific route for viewing appointments
  };

  const handleViewMedicalReports = () => {
    navigate("/patient/view-medical-reports"); // Navigate to the specific route for viewing medical reports
  };

  return (
    <div className="background-image-container">
      <Navbar />
      <div className="container-fluid mt-4">
        {/* <h1 className="text-center">Welcome, [Username]</h1>
        <h5 className="text-center">
          You have access to patient functions. Use the buttons below to
          navigate through it.
        </h5> */}
        <br />
        <br/>
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

export default Patienthomepage;

// import React from "react";
// import { FaEye } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Patienthomepage.css";
// import Navbar from "./Navbar";
// function Patienthomepage() {
//   return (
//     <div className="background-image-container">
//       <Navbar />
//       <div className="container-fluid mt-4">
//         <h1 className="text-center">Welcome, [Username]</h1>
//         <h5 className="text-center">
//           You have access to patient functions. Use the buttons below to
//           navigate through it.
//         </h5>
//         <br />
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <div className="d-flex justify-content-center">
//           <table className="table text-center">
//             <tbody>
//               <tr>
//                 <td>
//                   <div className="button-container mb-4">
//                     <button className="btn btn-danger btn-lg btn-circle">
//                       <FaEye />
//                     </button>
//                     <h5>View appointments</h5>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="button-container mb-4">
//                     <button className="btn btn-warning btn-lg btn-circle">
//                       <FaEye />
//                     </button>
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
// export default Patienthomepage;
