import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Staffhomepage.css";
function ViewAllDoctors() {
  const [doctors, setDoctors] = useState([]);
  // const [editModalOpen, setEditModalOpen] = useState(false);
  // const [selectedDoctor, setSelectedDoctor] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/doctors")
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ViewAllDoctors;
