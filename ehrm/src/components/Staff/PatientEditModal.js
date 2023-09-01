import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root"); // For accessibility

function PatientEditModal({ patient, isOpen, onRequestClose, onUpdate }) {
  const [editedPatient, setEditedPatient] = useState(patient);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8000/patients/${editedPatient.id}`, editedPatient)
      .then(() => {
        onUpdate(editedPatient);
        onRequestClose();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Patient"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Editing {editedPatient.id} Details</h2>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={editedPatient.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="text"
                className="form-control"
                name="age"
                value={editedPatient.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={editedPatient.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={editedPatient.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Disease:</label>
              <input
                type="text"
                className="form-control"
                name="specialization"
                value={editedPatient.disease}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Contact No:</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={editedPatient.phone}
                onChange={handleInputChange}
              />
            </div>
            <br></br>
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

export default PatientEditModal;
