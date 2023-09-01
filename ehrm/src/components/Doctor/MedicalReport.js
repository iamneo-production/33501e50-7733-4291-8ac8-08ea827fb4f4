import React, { useState } from "react";
import { toast } from "react-toastify";

const MedicalReport = ({ data, isOpen, onRequestClose }) => {
  const { appointmentId, patientId, doctorId } = data;

  const [medications, setMedications] = useState("");
  const [dosage, setDosage] = useState("");
  const [tests, setTests] = useState("");
  const [comments, setComments] = useState("");

  const medicalReportGeneration = () => {
    const IsValidate = () => {
      let isProceed = true;
      let errorMessage = "Please enter the value in ";

      if (!medications) {
        isProceed = false;
        errorMessage += "Medications";
      }

      if (!isProceed) {
        toast.warning(errorMessage);
      }

      return isProceed;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const reportObj = {
        appointmentId,
        patientId,
        doctorId,
        medications,
        dosage,
        tests,
        comments,
      };

      if (IsValidate()) {
        fetch("http://localhost:8000/medicalReports", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(reportObj),
        })
          .then((res) => {
            toast.success("Medical report added successfully.");
          })
          .catch((err) => {
            toast.error("Failed: " + err.message);
          });
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Appointment ID</label>
          <input value={appointmentId} className="form-control" disabled />
        </div>
        <div className="form-group">
          <label>Patient ID</label>
          <input value={patientId} className="form-control" disabled />
        </div>
        <div className="form-group">
          <label>Doctor ID</label>
          <input value={doctorId} className="form-control" disabled />
        </div>
        <div className="form-group">
          <label>Medications</label>
          <input
            value={medications}
            onChange={(e) => setMedications(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Dosage</label>
          <input
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Tests</label>
          <input
            value={tests}
            onChange={(e) => setTests(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Medical Report
        </button>
      </form>
    );
  };

  return (
    <div
      className={`modal ${isOpen ? "show" : ""}`}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Medical Report</h5>
            <button type="button" className="close" onClick={onRequestClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{medicalReportGeneration()}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onRequestClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalReport;
