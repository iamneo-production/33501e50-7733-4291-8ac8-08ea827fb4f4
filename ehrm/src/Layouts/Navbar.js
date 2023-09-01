import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { FaUser, FaSignOutAlt, FaHome } from "react-icons/fa";

import { useState } from "react";

import { useNavigate, useLocation, Navigate } from "react-router-dom";

import { useEffect } from "react";

function Navbar() {
  const [displayusername, displayusernameupdate] = useState("");

  const [showmenu, showmenuupdateupdate] = useState(false);

  const usenavigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);

      let username = sessionStorage.getItem("username");

      if (username === "" || username === null) {
        usenavigate("/");
      } else {
        displayusernameupdate(username);
      }
    }
  }, [location]);

  const role = sessionStorage.getItem("role"); // Fetch the role from session storage

  const userName = sessionStorage.getItem("username");

  function clearSessionStorage() {
    sessionStorage.clear();

    usenavigate("/");
  }

  const getNavItems = () => {
    if (role === "Doctor") {
      return (
        <>
          {showmenu && (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/doctor-home">
                  <FaHome className="mr-1" /> Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/view-profile">
                  <FaUser />
                  View profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/" onClick={clearSessionStorage}>
                  <FaSignOutAlt />
                  Logout
                </a>
              </li>
            </>
          )}
        </>
      );
    } else if (role === "Patient") {
      return (
        <>
          {showmenu && (
            <div
              style={{
                display: "flex",

                alignItems: "center",

                height: "50px",
              }}
            >
              <li className="nav-item">
                <a className="nav-link" href="/patient-home">
                  <FaHome className="mr-1" /> Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/view-profile">
                  <FaUser />
                  View profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/" onClick={clearSessionStorage}>
                  <FaSignOutAlt />
                  Logout
                </a>
              </li>
            </div>
          )}
        </>
      );
    } else if (role === "Staff") {
      return (
        <>
          {showmenu && (
            <div
              style={{
                display: "flex",

                alignItems: "center",

                height: "50px",
              }}
            >
              <li className="nav-item">
                <a className="nav-link" href="/staff-home">
                  <FaHome className="mr-1" /> Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/view-profile">
                  <FaUser />
                  View profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/" onClick={clearSessionStorage}>
                  <FaSignOutAlt />
                  Logout
                </a>
              </li>
            </div>
          )}
        </>
      );
    } else if (role === "Admin") {
      return (
        <>
          {showmenu && (
            <div
              style={{
                display: "flex",

                alignItems: "center",

                height: "50px",
              }}
            >
              <li className="nav-item">
                <a className="nav-link" href="/admin-home">
                  <FaHome className="mr-1" /> Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/view-profile">
                  <FaUser />
                  View profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/" onClick={clearSessionStorage}>
                  <FaSignOutAlt />
                  Logout
                </a>
              </li>
            </div>
          )}
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h3 style={{ color: "grey" }}>Welcome {userName}</h3>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">{getNavItems()}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUser, FaSignOutAlt, FaHome } from "react-icons/fa";

// function Navbar() {
//   const role = sessionStorage.getItem("role"); // Fetch the role from session storage
//   const userName = sessionStorage.getItem("username");
//   const getNavItems = () => {
//     if (role === "Doctor") {
//       // Fetch doctor-related items
//       return (
//         <>
//           <li className="nav-item">
//             <a className="nav-link" href="/doctor-home">
//               <FaHome className="mr-1" /> Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/view-profile">
//               <FaUser />
//               View profile
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/logout">
//               <FaSignOutAlt />
//               Logout
//             </a>
//           </li>
//         </>
//       );
//     } else if (role === "Patient") {
//       // Fetch patient-related items
//       return (
//         <>
//           <li className="nav-item">
//             <a className="nav-link" href="/patient-home">
//               <FaHome className="mr-1" /> Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/view-profile">
//               <FaUser />
//               View profile
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/logout">
//               <FaSignOutAlt />
//               Logout
//             </a>
//           </li>
//         </>
//       );
//     } else if (role === "Staff") {
//       // Fetch patient-related items
//       return (
//         <>
//           <li className="nav-item">
//             <a className="nav-link" href="/staff-home">
//               <FaHome className="mr-1" /> Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/view-profile">
//               <FaUser />
//               View profile
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/logout">
//               <FaSignOutAlt />
//               Logout
//             </a>
//           </li>
//         </>
//       );
//     } else if (role === "Admin") {
//       // Fetch patient-related items
//       return (
//         <>
//           <li className="nav-item">
//             <a className="nav-link" href="/admin-home">
//               <FaHome className="mr-1" /> Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/view-profile">
//               <FaUser />
//               View profile
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/logout">
//               <FaSignOutAlt />
//               Logout
//             </a>
//           </li>
//         </>
//       );
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <h3 style={{ color: "grey" }}>Welcome {userName}</h3>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div
//           className="collapse navbar-collapse justify-content-end"
//           id="navbarNav"
//         >
//           <ul className="navbar-nav">{getNavItems()}</ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
