import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

 

Modal.setAppElement('#root'); // For accessibility

 

function DoctorEditModal({ doctor, isOpen, onRequestClose, onUpdate }) {
  const [editedDoctor, setEditedDoctor] = useState(doctor);

 

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEditedDoctor(prevDoctor => ({ ...prevDoctor, [name]: value }));
  };

 

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8000/doctors/${editedDoctor.id}`, editedDoctor)
      .then(() => {
        onUpdate(editedDoctor);
        onRequestClose();
      })
      .catch(error => console.error(error));
  };

 

  return (
<Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Doctor"
>
<div className="modal-content">
<div className="modal-header">
<h2 className="modal-title">Editing {editedDoctor.id} Details</h2>
</div>
<div className="modal-body">
<form>
<div className="form-group">
<label>Name:</label>
<input
                type="text"
                className="form-control"
                name="name"
                value={editedDoctor.name}
                onChange={handleInputChange}
              />
</div>
<div className="form-group">
<label>Email:</label>
<input
                type="text"
                className="form-control"
                name="email"
                value={editedDoctor.email}
                onChange={handleInputChange}
              />
</div>
<div className="form-group">
<label>Education:</label>
<input
                type="text"
                className="form-control"
                name="education"
                value={editedDoctor.education}
                onChange={handleInputChange}
              />
</div>
<div className="form-group">
<label>Specialization:</label>
<input
                type="text"
                className="form-control"
                name="specialization"
                value={editedDoctor.specialization}
                onChange={handleInputChange}
              />
</div>
<div className="form-group">
<label>Phone:</label>
<input
                type="text"
                className="form-control"
                name="phone"
                value={editedDoctor.phone}
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

 

export default DoctorEditModal;





// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import axios from 'axios';

 

// Modal.setAppElement('#root'); // For accessibility

 

// function DoctorEditModal({ doctor, isOpen, onRequestClose, onUpdate }) {
//   const [editedDoctor, setEditedDoctor] = useState(doctor);

 

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setEditedDoctor(prevDoctor => ({ ...prevDoctor, [name]: value }));
//   };

 

//   const handleUpdate = () => {
//     axios.put(`http://localhost:8000/doctors/${editedDoctor.id}`, editedDoctor)
//       .then(() => {
//         onUpdate(editedDoctor);
//         onRequestClose();
//       })
//       .catch(error => console.error(error));
//   };

 

//   return (
// <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Edit Doctor"
// >
// <h2>Editing {editedDoctor.id} Details</h2>
// <form>
// <div>
// <label>Name:</label>
// <input
//             type="text"
//             name="name"
//             value={editedDoctor.name}
//             onChange={handleInputChange}
//           />
// </div>
// <div>
// <label>Email:</label>
// <input
//             type="text"
//             name="email"
//             value={editedDoctor.email}
//             onChange={handleInputChange}
//           />
// </div>
// <div>
// <label>Specialization:</label>
// <input
//             type="text"
//             name="specialization"
//             value={editedDoctor.specialization}
//             onChange={handleInputChange}
//           />
// </div>
// <button onClick={handleUpdate}>Update</button>
// <button onClick={onRequestClose}>Cancel</button>
// </form>
// </Modal>
//   );
// }
// export default DoctorEditModal;