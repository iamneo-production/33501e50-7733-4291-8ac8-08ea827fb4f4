import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root"); // For accessibility

function MedicalReportEditModal({
  medicalReport,
  isOpen,
  onRequestClose,
  onUpdate,
}) {
  const [editedMedicalReport, setEditedMedicalReport] = useState(medicalReport);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setEditedMedicalReport((prevMedicalReport) => ({
      ...prevMedicalReport,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    axios
      .put(
        `http://localhost:8000/medicalReports/${editedMedicalReport.id}`,
        editedMedicalReport
      )
      .then(() => {
        onUpdate(editedMedicalReport);
        onRequestClose();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Medical Reports"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Editing Medical Report Details</h2>
        </div>

        <div className="modal-body">
          <form>
            <div className="form-group">
              <label>Medical Report Id</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={editedMedicalReport.id}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Appointment ID:</label>
              <input
                type="text"
                className="form-control"
                name="appointmentId"
                value={editedMedicalReport.appointmentId}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Patient ID:</label>
              <input
                type="text"
                className="form-control"
                name="patientId"
                value={editedMedicalReport.patientId}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Doctor ID:</label>
              <input
                type="text"
                className="form-control"
                name="doctorId"
                value={editedMedicalReport.doctorId}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Medications:</label>
              <input
                type="text"
                className="form-control"
                name="medications"
                value={editedMedicalReport.medications}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Dosage</label>
              <input
                className="form-control"
                type="text"
                name="dosage"
                value={editedMedicalReport.dosage}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Tests:</label>
              <input
                type="text"
                className="form-control"
                name="tests"
                value={editedMedicalReport.tests}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Comments:</label>
              <input
                type="text"
                className="form-control"
                name="comments"
                value={editedMedicalReport.comments}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={handleUpdate}
            >
              Update
            </button>{" "}
            &nbsp;
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onRequestClose}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default MedicalReportEditModal;
