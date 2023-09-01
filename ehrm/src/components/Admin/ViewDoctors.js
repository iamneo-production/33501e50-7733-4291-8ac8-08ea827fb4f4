import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorEditModal from "./DoctorEditModal";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Adminhomepage.css";

function ViewDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/doctors")
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor);
    setEditModalOpen(true);
  };
  const handleUpdateDoctor = (updatedDoctor) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) =>
        doctor.id === updatedDoctor.id ? updatedDoctor : doctor
      )
    );
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/doctors/${id}`)
      .then(() => {
        setDoctors((prevDoctors) =>
          prevDoctors.filter((doctor) => doctor.id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
    <Navbar />
    <div className="container mt-5">
      
      <br />
      <h2>Doctors List</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Education</th>
            <th>Specialization</th>
            <th>ContactNo</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.email}</td>
              <td>{doctor.education}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.phone}</td>
              <td>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => handleDelete(doctor.id)}
                >
                  Delete
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(doctor)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Edit modal */}{" "}
      {selectedDoctor && (
        <DoctorEditModal
          doctor={selectedDoctor}
          isOpen={editModalOpen}
          onRequestClose={() => setEditModalOpen(false)}
          onUpdate={handleUpdateDoctor}
        />
      )}
    </div>
    </>
  );
}
export default ViewDoctors;
