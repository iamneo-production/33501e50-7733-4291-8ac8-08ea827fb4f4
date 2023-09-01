import React, { useState, useEffect } from "react";

import axios from "axios";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Doctorhomepage.css";

import MedicalReportEditModal from "./MedicalReportEditModal";

function ViewMedicalReportByDoctor() {
  const [medicalReports, setMedicalReports] = useState([]);

  const [editModalOpen, setEditModalOpen] = useState(false);

  const [selectedMedicalReport, setSelectedMedicalReport] = useState(null);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const [patientModalOpen, setPatientModalOpen] = useState(false);

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
      .get(`http://localhost:8000/medicalReports?doctorId=${doctorId}`)

      .then((response) => setMedicalReports(response.data))

      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (medicalReport) => {
    setSelectedMedicalReport(medicalReport);

    setEditModalOpen(true);
  };

  const handleUpdateMedicalReport = (updatedMedicalReport) => {
    setMedicalReports((prevMedicalReports) =>
      prevMedicalReports.map((medicalReport) =>
        medicalReport.id === updatedMedicalReport.id
          ? updatedMedicalReport
          : medicalReport
      )
    );
  };

  const handleDelete = (id) => {
    axios

      .delete(`http://localhost:8000/medicalReports/${id}`)

      .then(() => {
        setMedicalReports((prevMedicalReports) =>
          prevMedicalReports.filter((medicalReport) => medicalReport.id !== id)
        );
      })

      .catch((error) => console.error(error));
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Medical Reports List</h2>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Report ID</th>
              <th>Appointment Id</th>

              <th>Patient Id</th>

              <th>Doctor Id</th>

              <th>Medications</th>

              <th>Dosage</th>

              <th>Tests</th>
              <th>Comments</th>
            </tr>
          </thead>

          <tbody>
            {medicalReports.map((medicalReport) => (
              <tr key={medicalReport.id}>
                <td>{medicalReport.id}</td>
                <td>{medicalReport.appointmentId}</td>
                <td>{medicalReport.patientId}</td>

                <td>{medicalReport.doctorId}</td>

                <td>{medicalReport.medications}</td>

                <td>{medicalReport.dosage}</td>

                <td>{medicalReport.tests}</td>
                <td>{medicalReport.comments}</td>

                <td>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => handleDelete(medicalReport.id)}
                  >
                    Delete
                  </button>{" "}
                  &nbsp;
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(medicalReport)}
                  >
                    Edit
                  </button>{" "}
                  &nbsp;
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewPatient(medicalReport.patientId)}
                  >
                    Patient details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedMedicalReport && (
          <MedicalReportEditModal
            medicalReport={selectedMedicalReport}
            isOpen={editModalOpen}
            onRequestClose={() => setEditModalOpen(false)}
            onUpdate={handleUpdateMedicalReport}
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
      </div>
    </>
  );
}

export default ViewMedicalReportByDoctor;
