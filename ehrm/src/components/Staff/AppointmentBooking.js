import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Staffhomepage.css";

function AppointmentBooking() {
  const [patientId, pidchange] = useState("");
  const [doctorId, didchange] = useState("");
  const [appointmentDateTime, appointmentchange] = useState("");
  const [appointmentStatus, statuschange] = useState("");
  const [medicalHistory, historychange] = useState("");

  const handleClearForm = () => {
    pidchange("");
    didchange("");
    appointmentchange("");
    statuschange("");
    historychange("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regobj = {
      patientId,
      doctorId,
      appointmentDateTime,
      appointmentStatus,
      medicalHistory,
    };

    axios
      .get("http://localhost:8000/patients")
      .then((response) => {
        const isPatientValid = response.data.some(
          (patient) => patient.id === patientId
        );

        if (!isPatientValid) {
          toast.error("Invalid Patient ID.");
          return;
        }

        // Fetch doctors and patients data from db.json
        axios
          .get("http://localhost:8000/doctors")
          .then((response) => {
            const isDoctorValid = response.data.some(
              (doctor) => doctor.id === doctorId
            );

            if (!isDoctorValid) {
              toast.error("Invalid Doctor ID.");
              return;
            }

            // Fetch patients data from db.json

            // Both patientId and doctorId are valid
            //console.log(regobj);

            axios
              .post("http://localhost:8000/appointments", regobj)
              .then(() => {
                toast.success("Appointment booked successfully.");
              })
              .catch((error) => {
                toast.error("Failed: " + error.message);
              });
          })
          .catch((error) => {
            toast.error("Failed to fetch patients: " + error.message);
          });
      })
      .catch((error) => {
        toast.error("Failed to fetch doctors: " + error.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Appointment Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Patient ID:</label>
            <input
              type="text"
              className="form-control"
              name="patientId"
              value={patientId}
              onChange={(e) => pidchange(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Doctor ID:</label>
            <input
              type="text"
              className="form-control"
              name="doctorId"
              value={doctorId}
              onChange={(e) => didchange(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Appointment Date and Time:</label>
            <input
              type="datetime-local"
              className="form-control"
              name="appointmentDateTime"
              value={appointmentDateTime}
              onChange={(e) => appointmentchange(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Appointment Status:</label>
            <select
              className="form-control"
              name="appointmentStatus"
              value={appointmentStatus}
              onChange={(e) => statuschange(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="canceled">Canceled</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="form-group">
            <label>Medical History:</label>
            <textarea
              className="form-control"
              name="medicalHistory"
              value={medicalHistory}
              onChange={(e) => historychange(e.target.value)}
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>{" "}
          &nbsp;
          <button
            type="button"
            className="btn btn-secondary ml-2"
            onClick={handleClearForm}
          >
            Clear
          </button>
        </form>
      </div>
    </>
  );
}
export default AppointmentBooking;

// import React, { useState } from "react";
// import { toast } from "react-toastify";
// function AppointmentBooking() {
//   const [patientId, pidchange] = useState("");

//   const [doctorId, didchange] = useState("");

//   const [appointmentDateTime, appointmentchange] = useState("");

//   const [appointmentStatus, statuschange] = useState("");

//   const [medicalHistory, historychange] = useState("");

//   const handleClearForm = () => {
//     pidchange("");
//     didchange("");
//     appointmentchange("");
//     statuschange("");
//     historychange("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let regobj = {
//       patientId,
//       doctorId,
//       appointmentDateTime,
//       appointmentStatus,
//       medicalHistory,
//     };

//     //if (IsValidate()) {

//     console.log(regobj);

//     fetch("http://localhost:8000/appointments", {
//       method: "POST",

//       headers: { "content-type": "application/json" },

//       body: JSON.stringify(regobj),
//     })
//       .then((res) => {
//         toast.success("Appointment details added successfully.");

//         //navigate("/login");
//       })

//       .catch((err) => {
//         toast.error("Failed :" + err.message);
//       });

//     // }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Appointment Booking Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Patient ID:</label>
//           <input
//             type="text"
//             className="form-control"
//             name="patientId"
//             value={patientId}
//             onChange={(e) => pidchange(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Doctor ID:</label>
//           <input
//             type="text"
//             className="form-control"
//             name="doctorId"
//             value={doctorId}
//             onChange={(e) => didchange(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Appointment Date and Time:</label>
//           <input
//             type="datetime-local"
//             className="form-control"
//             name="appointmentDateTime"
//             value={appointmentDateTime}
//             onChange={(e) => appointmentchange(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Appointment Status:</label>
//           <select
//             className="form-control"
//             name="appointmentStatus"
//             value={appointmentStatus}
//             onChange={(e) => statuschange(e.target.value)}
//             required
//           >
//             <option value="">Select Status</option>
//             <option value="pending">Pending</option>
//             <option value="confirmed">Confirmed</option>
//             <option value="canceled">Canceled</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Medical History:</label>
//           <textarea
//             className="form-control"
//             name="medicalHistory"
//             value={medicalHistory}
//             onChange={(e) => historychange(e.target.value)}
//             rows="4"
//           ></textarea>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button> &nbsp;
//         <button
//           type="button"
//           className="btn btn-secondary ml-2"
//           onClick={handleClearForm}
//         >
//           Clear
//         </button>
//       </form>
//     </div>
//   );
// }
// export default AppointmentBooking;
