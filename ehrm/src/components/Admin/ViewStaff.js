import React, { useState, useEffect } from "react";

import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Adminhomepage.css";

import axios from "axios";

import StaffEditModal from "./StaffEditModal";

function ViewStaff() {
  const [staff, setStaff] = useState([]);

  const [editModalOpen, setEditModalOpen] = useState(false);

  const [selectedStaff, setSelectedStaff] = useState(null);

  useEffect(() => {
    axios

      .get("http://localhost:8000/staff")

      .then((response) => setStaff(response.data))

      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (staff) => {
    setSelectedStaff(staff);

    setEditModalOpen(true);
  };

  const handleUpdateStaff = (updatedStaff) => {
    setStaff((prevStaff) =>
      prevStaff.map((staff) =>
        staff.id === updatedStaff.id ? updatedStaff : staff
      )
    );
  };

  const handleDelete = (id) => {
    axios

      .delete(`http://localhost:8000/staff/${id}`)

      .then(() => {
        setStaff((prevDoctors) =>
          prevDoctors.filter((doctor) => doctor.id !== id)
        );
      })

      .catch((error) => console.error(error));
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <h2>Staff List</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Education</th>

            <th>ContactNo</th>
          </tr>
        </thead>

        <tbody>
          {staff.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>

              <td>{staff.name}</td>

              <td>{staff.email}</td>

              <td>{staff.education}</td>

              <td>{staff.phone}</td>

              <td>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => handleDelete(staff.id)}
                >
                  Delete
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(staff)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Edit modal */}{" "}
      {selectedStaff && (
        <StaffEditModal
          staff={selectedStaff}
          isOpen={editModalOpen}
          onRequestClose={() => setEditModalOpen(false)}
          onUpdate={handleUpdateStaff}
        />
      )}
    </div>
    </>
  );
}

export default ViewStaff;
