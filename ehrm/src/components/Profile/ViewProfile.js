import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Layouts/Navbar";

const ViewProfile = () => {
  const userId = sessionStorage.getItem("username");
  const role = sessionStorage.getItem("role");
  const [user, setUser] = useState({});

  let db;
  if (role === "Admin") {
    db = "admin";
  } else if (role === "Doctor") {
    db = "doctors";
  } else if (role === "Staff") {
    db = "staff";
  } else {
    db = "patients";
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/${db}/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="card shadow p-4">
          <div
            className="card-header  text-white text-center "
            style={{ backgroundColor: "rgb(50, 181, 214)" }}
          >
            <h2>User Profile</h2>
          </div>
          <div className="card-body">
            <p className="mb-1">
              <strong>Username:</strong> {user.id}
            </p>
            <p className="mb-1">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="mb-1">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="mb-1">
              <strong>Password:</strong> {user.password}
            </p>
            <p className="mb-0">
              <strong>Phone Number:</strong> {user.phone}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../../Layouts/Navbar";

// const ViewProfile = () => {
//   const userId = sessionStorage.getItem("username");
//   const role = sessionStorage.getItem("role");
//   const [user, setUser] = useState({});

//   let db;
//   if (role === "Admin") {
//     db = "admin";
//   } else if (role === "Doctor") {
//     db = "doctors";
//   } else if (role === "Staff") {
//     db = "staff";
//   } else {
//     db = "patients";
//   }

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/${db}/${userId}`)
//       .then((response) => setUser(response.data))
//       .catch((error) => console.error(error));
//   }, [userId]);

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-4">
//         <div className="card shadow">
//           <div className="card-header bg-primary text-white text-center">
//             <h2>User Profile</h2>
//           </div>
//           <div className="card-body">
//             <p className="mb-1">
//               <strong>Username:</strong> {user.id}
//             </p>
//             <p className="mb-1">
//               <strong>Name:</strong> {user.name}
//             </p>
//             <p className="mb-1">
//               <strong>Email:</strong> {user.email}
//             </p>
//             <p className="mb-1">
//               <strong>Password:</strong> {user.password}
//             </p>
//             <p className="mb-0">
//               <strong>Phone Number:</strong> {user.phone}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ViewProfile;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import Navbar from "../../Layouts/Navbar";

// // const ViewProfile = () => {
// //   const userId = sessionStorage.getItem("username");
// //   const role = sessionStorage.getItem("role");
// //   const [user, setUser] = useState({});

// //   let db;
// //   if (role === "Admin") {
// //     db = "admin";
// //   } else if (role === "Doctor") {
// //     db = "doctors";
// //   } else if (role === "Staff") {
// //     db = "staff";
// //   } else {
// //     db = "patients";
// //   }

// //   useEffect(() => {
// //     axios
// //       .get(`http://localhost:8000/${db}/${userId}`)
// //       .then((response) => setUser(response.data))
// //       .catch((error) => console.error(error));
// //   }, [userId]);

// //   return (
// //     <>
// //     <Navbar/>
// //     <div className="container d-flex justify-content-center align-items-center vh-100">
// //       <div className="card p-4">
// //         <div className="card-header text-center">
// //           <h2>User Profile</h2>
// //         </div>
// //         <div className="card-body">
// //           <p>
// //             <strong>Username:</strong> {user.id}
// //           </p>
// //           <p>
// //             <strong>Name:</strong> {user.name}
// //           </p>
// //           <p>
// //             <strong>Email:</strong> {user.email}
// //           </p>
// //           <p>
// //             <strong>Password:</strong> {user.password}
// //           </p>
// //           <p>
// //             <strong>Phone Number:</strong> {user.phone}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //     </>
// //   );
// // };

// // export default ViewProfile;
