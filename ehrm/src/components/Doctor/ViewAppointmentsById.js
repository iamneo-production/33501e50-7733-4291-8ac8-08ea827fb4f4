import React, { useState, useEffect } from "react";

import axios from "axios";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Doctorhomepage.css";

import AppointmentEditModal from "./AppointmentEditModalByDoctor";
import MedicalReport from "./MedicalReport";

function ViewAppointmentsById() {
  const [appointments, setAppointments] = useState([]);

  const [editModalOpen, setEditModalOpen] = useState(false);

  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const [patientModalOpen, setPatientModalOpen] = useState(false);
  const [medicalReportData, setMedicalReportData] = useState(null);
  const [medicalReportModalOpen, setMedicalReportModalOpen] = useState(false);

  const handleViewPatient = async (patientId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/patients/${patientId}`
      );

      setSelectedPatient(response.data);

      setPatientModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const doctorId = sessionStorage.getItem("username"); // Replace with the actual doctor ID

    axios
      .get(`http://localhost:8000/appointments?doctorId=${doctorId}`)

      .then((response) => setAppointments(response.data))

      .catch((error) => console.error(error));
  }, []);

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

  const handleGenerateMedicalReport = (appointment) => {
    const { id, patientId, doctorId } = appointment;

    setMedicalReportData({
      appointmentId: id,
      patientId,
      doctorId,
    });

    setMedicalReportModalOpen(true);
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
                  </button>{" "}
                  &nbsp;
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewPatient(appointment.patientId)}
                  >
                    Patient details
                  </button>{" "}
                  &nbsp;
                  <button
                    className="btn btn-primary"
                    onClick={() => handleGenerateMedicalReport(appointment)}
                  >
                    GMR
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedAppointment && (
          <AppointmentEditModal
            appointment={selectedAppointment}
            isOpen={editModalOpen}
            onRequestClose={() => setEditModalOpen(false)}
            onUpdate={handleUpdateAppointment}
          />
        )}

        {selectedPatient && (
          <div
            className="modal"
            style={{ display: patientModalOpen ? "block" : "none" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Patient Details</h5>
                </div>

                <div className="modal-body">
                  <p>
                    <strong>Name:</strong> {selectedPatient.name}
                  </p>

                  <p>
                    <strong>Gender:</strong> {selectedPatient.gender}
                  </p>

                  <p>
                    <strong>Age:</strong> {selectedPatient.age}
                  </p>

                  <p>
                    <strong>Email:</strong> {selectedPatient.email}
                  </p>

                  <p>
                    <strong>Address:</strong> {selectedPatient.address}
                  </p>

                  <p>
                    <strong>Disease:</strong> {selectedPatient.disease}
                  </p>

                  <p>
                    <strong>Phone:</strong> {selectedPatient.phone}
                  </p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setPatientModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {medicalReportData && (
          <MedicalReport
            data={medicalReportData}
            isOpen={medicalReportModalOpen}
            onRequestClose={() => setMedicalReportModalOpen(false)}
          />
        )}
      </div>
    </>
  );
}

export default ViewAppointmentsById;
