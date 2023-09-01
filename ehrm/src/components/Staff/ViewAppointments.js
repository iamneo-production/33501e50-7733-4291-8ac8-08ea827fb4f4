import React, { useState, useEffect } from "react";
import axios from "axios";
import AppointmentEditModal from "./AppointmentEditModal";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Staffhomepage.css";

function ViewAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/appointments")
      .then((response) => {
        console.log(response.data);
        setAppointments(response.data);
      })
      .catch((error) => console.error(error));
  }, [appointments]);

  const handleEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setEditModalOpen(true);
  };
  const handleUpdateAppointment = (updatedAppointment) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === updatedAppointment.id
          ? updatedAppointment
          : appointment
      )
    );
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/appointments/${id}`)
      .then(() => {
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

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
            {console.log(appointments)}
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.patientId}</td>
                <td>{appointment.doctorId}</td>
                <td>{appointment.appointmentDateTime}</td>
                <td>{appointment.appointmentStatus}</td>
                <td>{appointment.medicalHistory}</td>
                <td>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => handleDelete(appointment.id)}
                  >
                    Delete
                  </button>{" "}
                  &nbsp;
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(appointment)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Edit modal */}{" "}
        {selectedAppointment && (
          <AppointmentEditModal
            appointment={selectedAppointment}
            isOpen={editModalOpen}
            onRequestClose={() => setEditModalOpen(false)}
            onUpdate={handleUpdateAppointment}
          />
        )}
      </div>
    </>
  );
}
export default ViewAppointments;
