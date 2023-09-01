import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root"); // For accessibility

function AppointmentEditModal({
  appointment,
  isOpen,
  onRequestClose,
  onUpdate,
}) {
  const [editedAppointment, setEditedAppointment] = useState(appointment);
  // const appointmentDateTime=editedAppointment.appointmentDateTime;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    axios
      .put(
        `http://localhost:8000/appointments/${editedAppointment.id}`,
        editedAppointment
      )
      .then(() => {
        onUpdate(editedAppointment);
        onRequestClose();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Appointments"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Editing Appointment Details</h2>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label>Appointment Id</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={editedAppointment.id}
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
                value={editedAppointment.patientId}
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
                value={editedAppointment.doctorId}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Appointment Date and Time:</label>
              <input
                type="text"
                className="form-control"
                name="appointmentDateTime"
                value={editedAppointment.appointmentDateTime}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Appointment Status:</label>
              <select
                className="form-control"
                name="appointmentStatus"
                value={editedAppointment.appointmentStatus}
                onChange={handleInputChange}
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
              <input
                type="text"
                className="form-control"
                name="medicalHistory"
                value={editedAppointment.medicalHistory}
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

export default AppointmentEditModal;
