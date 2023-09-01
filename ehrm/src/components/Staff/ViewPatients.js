import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientEditModal from "./PatientEditModal";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Staffhomepage.css";
function ViewPatients() {
  const [patients, setPatients] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/patients")
      .then((response) => setPatients(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    setEditModalOpen(true);
  };
  const handleUpdatePatient = (updatedPatient) => {
    setPatients((prevPatients) =>
      prevPatients.map((patients) =>
        patients.id === updatedPatient.id ? updatedPatient : patients
      )
    );
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/patients/${id}`)
      .then(() => {
        setPatients((prevPatients) =>
          prevPatients.filter((patient) => patient.id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <h2>Patients List</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
            <th>Disease</th>
            <th>ContactNo</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.email}</td>
              <td>{patient.address}</td>
              <td>{patient.disease}</td>
              <td>{patient.phone}</td>
              <td>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => handleDelete(patient.id)}
                >
                  Delete
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(patient)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Edit modal */}{" "}
      {selectedPatient && (
        <PatientEditModal
          patient={selectedPatient}
          isOpen={editModalOpen}
          onRequestClose={() => setEditModalOpen(false)}
          onUpdate={handleUpdatePatient}
        />
      )}
    </div>
    </>
  );
}
export default ViewPatients;
