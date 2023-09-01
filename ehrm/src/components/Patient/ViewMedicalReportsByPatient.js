import React, { useState, useEffect } from "react";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Patienthomepage.css";
import axios from "axios";

function ViewMedicalReportsByPatient() {
  const [medicalReports, setMedicalReports] = useState([]);

  useEffect(() => {
    const patientId = "ABC"; // Replace with the actual doctor ID

    axios
      .get(`http://localhost:8000/medicalReports?patientId=${patientId}`)

      .then((response) => setMedicalReports(response.data))

      .catch((error) => console.error(error));
  }, []);

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewMedicalReportsByPatient;
