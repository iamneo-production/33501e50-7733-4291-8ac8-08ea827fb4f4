import { useState } from "react";

//import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import "../../Layouts/Staffhomepage.css";
import { toast } from "react-toastify";

const AddPatient = () => {
  const [id, idchange] = useState("");

  const [name, namechange] = useState("");

  const [gender, genderchange] = useState("");

  const [age, agechange] = useState("");

  const [email, emailchange] = useState("");

  const [password, passwordchange] = useState("");

  const [address, addresschange] = useState("");

  const [disease, diseasechange] = useState("");

  const [phone, phonechange] = useState("");

  //const navigate = useNavigate();

  // const IsValidate = () => {

  //   let isproceed = true;

  //   let errormessage = "Please enter the value in ";

  //   if (id === null || id === "") {

  //     isproceed = false;

  //     errormessage += " Username";

  //   }

  //   if (name === null || name === "") {

  //     isproceed = false;

  //     errormessage += " Fullname";

  //   }

  //   if (email === null || email === "") {

  //     isproceed = false;

  //     errormessage += " Email";

  //   }

  //   if (password === null || password === "") {

  //     isproceed = false;

  //     errormessage += " Password";

  //   }

  //   if (!isproceed) {

  //     toast.warning(errormessage);

  //   } else {

  //     if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

  //     } else {

  //       isproceed = false;

  //       toast.warning("Please enter the valid email");

  //     }

  //   }

  //   return isproceed;

  // };

  const handlesubmit = (e) => {
    e.preventDefault();

    let regobj = {
      id,
      name,
      gender,
      age,
      email,
      password,
      address,
      disease,
      phone,
    };

    //if (IsValidate()) {

    console.log(regobj);

    fetch("http://localhost:8000/patients", {
      method: "POST",

      headers: { "content-type": "application/json" },

      body: JSON.stringify(regobj),
    })
      .then((res) => {
        toast.success("Patient details added successfully.");

        //navigate("/login");
      })

      .catch((err) => {
        toast.error("Failed :" + err.message);
      });

    // }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-header">
                <h1>Patient details</h1>
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
                        Age <span className="errmsg">*</span>
                      </label>

                      <input
                        value={age}
                        onChange={(e) => agechange(e.target.value)}
                        className="form-control"
                      ></input>
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
                        Address <span className="errmsg">*</span>
                      </label>

                      <input
                        value={address}
                        onChange={(e) => addresschange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Disease <span className="errmsg"></span>
                      </label>

                      <input
                        value={disease}
                        onChange={(e) => diseasechange(e.target.value)}
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
    </>
  );
};

export default AddPatient;
