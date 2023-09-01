import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
Modal.setAppElement('#root'); // For accessibility

function StaffEditModal({ staff, isOpen, onRequestClose, onUpdate }) {
  const [editedStaff, setEditedStaff] = useState(staff);

 

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEditedStaff(prevStaff => ({ ...prevStaff, [name]: value }));
  };

 

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8000/staff/${editedStaff.id}`, editedStaff)
      .then(() => {
        onUpdate(editedStaff);
        onRequestClose();
      })
      .catch(error => console.error(error));
  };

 

  return (
<Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Staff"
>
<div className="modal-content">
<div className="modal-header">
<h2 className="modal-title">Editing {editedStaff.id} Details</h2>
</div>
<div className="modal-body">
<form>
<div className="form-group">
<label>Name:</label>
<input
                type="text"
                className="form-control"
                name="name"
                value={editedStaff.name}
                onChange={handleInputChange}
              />
</div>
<div className="form-group">
<label>Email:</label>
<input
                type="text"
                className="form-control"
                name="email"
                value={editedStaff.email}
                onChange={handleInputChange}
              />
</div>
<div className="form-group">
<label>Education:</label>
<input
                type="text"
                className="form-control"
                name="education"
                value={editedStaff.education}
                onChange={handleInputChange}
              />
</div>
<div className="form-group">
<label>Contact No:</label>
<input
                type="text"
                className="form-control"
                name="phone"
                value={editedStaff.phone}
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
</button> &nbsp;
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

 

export default StaffEditModal;