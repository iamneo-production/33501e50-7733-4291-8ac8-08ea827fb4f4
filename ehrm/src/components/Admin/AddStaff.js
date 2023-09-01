import { useState } from "react";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Adminhomepage.css";
//import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddStaff = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [gender, genderchange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");
  const [education, educationchange] = useState("");
  const [phone, phonechange] = useState("");
  //const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (gender === null || gender === "") {
      isproceed = false;
      errormessage += " Gender";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (education === null || education === "") {
      isproceed = false;
      errormessage += " Education";
    }
    if (phone === null || phone === "") {
      isproceed = false;
      errormessage += " Contact No";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, gender, email, password, education, phone };
    if (IsValidate()) {
      //console.log(regobj);
      fetch("http://localhost:8000/staff", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Staff details added successfully.");
          //navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <div>
      <Navbar />
      <br />
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>Staff details</h1>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>

                    <input
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>

                    <input
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <label>
                    Gender: <span className="errmsg">*&nbsp;</span>
                  </label>

                  <div className="form-check form-check-inline">
                    <br />

                    <input
                      type="radio"
                      className="form-check-input"
                      id="male"
                      value="male"
                      checked={gender === "male"}
                      onChange={() => genderchange("male")}
                    />

                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="female"
                      value="female"
                      checked={gender === "female"}
                      onChange={() => genderchange("female")}
                    />

                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>

                    <input
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>

                    <input
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Education <span className="errmsg">*</span>
                    </label>

                    <input
                      value={education}
                      onChange={(e) => educationchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      phone <span className="errmsg"></span>
                    </label>

                    <input
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Add
            </button>{" "}
            {/* <Link to={"/login"} className="btn btn-danger">




              Close




            </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddStaff;
