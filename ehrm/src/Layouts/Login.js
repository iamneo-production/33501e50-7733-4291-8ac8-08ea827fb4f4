import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  //const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      if (role === "Admin") {
        fetch("http://localhost:8000/admin/" + userName)
          .then((res) => {
            return res.json();
          })

          .then((resp) => {
            console.log(resp);

            if (Object.keys(resp).length === 0) {
              toast.error("Please Enter valid username");
            } else {
              if (resp.password === password) {
                toast.success("Success");
                sessionStorage.setItem("role", role);
                sessionStorage.setItem("username", userName);
                navigate("/admin-home");
              } else {
                toast.error("Please Enter valid credentials");
              }
            }
          })

          .catch((err) => {
            toast.error("Login Failed due to :" + err.message);
          });
      } else if (role === "Doctor") {
        fetch("http://localhost:8000/doctors/" + userName)
          .then((res) => {
            return res.json();
          })

          .then((resp) => {
            console.log(resp);

            if (Object.keys(resp).length === 0) {
              toast.error("Please Enter valid username");
            } else {
              if (resp.password === password) {
                toast.success("Success");
                sessionStorage.setItem("role", role);
                sessionStorage.setItem("username", userName);
                navigate("/doctor-home");
              } else {
                toast.error("Please Enter valid credentials");
              }
            }
          })

          .catch((err) => {
            toast.error("Login Failed due to :" + err.message);
          });
      } else if (role === "Patient") {
        fetch("http://localhost:8000/patients/" + userName)
          .then((res) => {
            return res.json();
          })

          .then((resp) => {
            console.log(resp);

            if (Object.keys(resp).length === 0) {
              toast.error("Please Enter valid username");
            } else {
              if (resp.password === password) {
                toast.success("Success");
                sessionStorage.setItem("role", role);
                sessionStorage.setItem("username", userName);
                navigate("/patient-home");
              } else {
                toast.error("Please Enter valid credentials");
              }
            }
          })

          .catch((err) => {
            toast.error("Login Failed due to :" + err.message);
          });
      } else if (role === "Staff") {
        fetch("http://localhost:8000/staff/" + userName)
          .then((res) => {
            return res.json();
          })

          .then((resp) => {
            console.log(resp);

            if (Object.keys(resp).length === 0) {
              toast.error("Please Enter valid username");
            } else {
              if (resp.password === password) {
                toast.success("Success");
                sessionStorage.setItem("role", role);
                sessionStorage.setItem("username", userName);
                navigate("/staff-home");
              } else {
                toast.error("Please Enter valid credentials");
              }
            }
          })

          .catch((err) => {
            toast.error("Login Failed due to :" + err.message);
          });
      }
    }
  };

  const validate = () => {
    let result = true;

    if (userName === "" || userName === null) {
      result = false;

      toast.warning("Please Enter Username");
    }

    if (password === "" || password === null) {
      result = false;

      toast.warning("Please Enter Password");
    }

    if (role === "" || role === null) {
      result = false;

      toast.warning("Please Select Role");
    }

    return result;
  };

  return (
    <div className="background-image-container1">
      <br />
      <br />
      <center>
        <h1 style={{ color: "aliceblue" }}>Welcome to EHRM Portal</h1>
      </center>
      <br />
      <form className="transparent-form" onSubmit={handleLogin}>
        <div style={{ height: "60px", color: "black" }} className="card-header">
          <center>
            <h3>
              <b>User Login</b>
            </h3>
          </center>
        </div>

        <div
          // className="form-group col-md-6"
          style={{ margin: "auto", width: "50%" }}
        >
          <input
            type="text"
            className="form-control"
            id="exampleInputUserName"
            aria-describedby="userNameHelp"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <br />
        <div
          // className="form-group col-md-6"
          style={{ margin: "auto", width: "50%" }}
        >
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div
          // className="form-group col-md-6"
          style={{ margin: "auto", width: "50%" }}
        >
          <select
            className="form-select"
            aria-label="Default select example"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option disabled value="">
              Select role
            </option>
            <option>Admin</option>
            <option>Doctor</option>
            <option>Patient</option>
            <option>Staff</option>
          </select>
        </div>
        <br />
        <center>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </center>
        {/* {loginError && <div className="text-danger">{loginError}</div>} */}
      </form>
    </div>
  );
}

export default Login;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Login.css";
// function Login() {
//   return (
//     <div className="background-image-container">
//       <br></br>
//       <br></br>
//       <center>
//         <h1>Welcome to EHRM Portal</h1>
//       </center>
//       <br></br>
//       <form className="transparent-form">
//         <div style={{height:"60px", color:"black"}} className="card-header">
//         <center><h3><b>User Login</b></h3></center>
//         </div>
//         {/* <div className="card-header">
//           <h3>User Login</h3>
//         </div> */}

//         <div class="form-group col-md-6">
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           />
//         </div>
//         <br></br>
//         <div class="form-group col-md-6">
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//             placeholder="Password"
//           />
//         </div>
//         <br></br>
//         <div class="form-group col-md-6">
//           <select class="form-select" aria-label="Default select example">
//           <option disabled selected>Select role</option>
//             <option>Admin</option>
//             <option>Doctor</option>
//             <option>Patient</option>
//             <option>Staff</option>
//           </select>
//         </div>
//         <br></br>
//         <center>
//           <button type="submit" class="btn btn-dark">
//             Login
//           </button>
//         </center>
//       </form>
//     </div>
//   );
// }
// export default Login;
