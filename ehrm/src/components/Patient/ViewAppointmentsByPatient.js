import React, { useState, useEffect } from "react";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Patienthomepage.css";
import axios from "axios";

function ViewAppointmentsByPatient() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const patientId = "ABC"; // Replace with the actual doctor ID

    axios
      .get(`http://localhost:8000/appointments?patientId=${patientId}`)

      .then((response) => setAppointments(response.data))

      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Appointments List</h2>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>

              <th>Patient Id</th>

              <th>Doctor Id</th>

              <th>Appointment Date and Time</th>

              <th>Appointment Status</th>

              <th>Medical History</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>

                <td>{appointment.patientId}</td>

                <td>{appointment.doctorId}</td>

                <td>{appointment.appointmentDateTime}</td>

                <td>{appointment.appointmentStatus}</td>

                <td>{appointment.medicalHistory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewAppointmentsByPatient;
