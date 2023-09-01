import "./App.css";
//import AddStaff from './components/Admin/AddStaff';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewDoctors from "./components/Admin/ViewDoctors";
import AddPatient from "./components/Staff/AddPatient";
import ViewStaff from "./components/Admin/ViewStaff";
//import AddPatient from './components/Staff/AddPatient';
import AddDoctor from "./components/Admin/AddDoctor";
import AddStaff from "./components/Admin/AddStaff";
import AppointmentBooking from "./components/Staff/AppointmentBooking";
import ViewPatients from "./components/Staff/ViewPatients";
import AdminHome from "./Layouts/AdminHome";
import { ToastContainer } from "react-toastify";
import ViewAppointments from "./components/Staff/ViewAppointments";
import { BrowserRouter } from "react-router-dom";
import ViewAppointmentsById from "./components/Doctor/ViewAppointmentsById";
import MedicalReport from "./components/Doctor/MedicalReport";
import ViewMedicalReportByDoctor from "./components/Doctor/ViewMedicalReportByDoctor";
import ViewAllMedicalReports from "./components/Staff/ViewAllMedicalReports";
import ViewAllDoctors from "./components/Staff/ViewAllDoctors";
import ViewAppointmentsByPatient from "./components/Patient/ViewAppointmentsByPatient";
import ViewMedicalReportsByPatient from "./components/Patient/ViewMedicalReportsByPatient";
import Adminhomepage from "./Layouts/Adminhomepage";
import Doctorhomepage from "./Layouts/Doctorhomepage";
import Staffhomepage from "./Layouts/Staffhomepage";
import Patienthomepage from "./Layouts/Patienthomepage";
import DoctorRouting from "./Routing/DoctorRouting";
import Login from "./Layouts/Login";
import ViewProfile from "./components/Profile/ViewProfile";
function App() {
  return (
    <div>
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          {/* For Doctor Routes */}
          <Route path="/doctor-home" element={<Doctorhomepage />} />
          <Route
            path="/doctor/view-appointments"
            element={<ViewAppointmentsById />}
          />
          <Route
            path="/doctor/view-medical-reports"
            element={<ViewMedicalReportByDoctor />}
          />

          {/* For Patient Routes */}
          <Route path="/patient-home" element={<Patienthomepage />} />
          <Route
            path="/patient/view-appointments"
            element={<ViewAppointmentsByPatient />}
          />
          <Route
            path="/patient/view-medical-reports"
            element={<ViewMedicalReportsByPatient />}
          />

          {/* For Admin Routes */}
          <Route path="/admin-home" element={<Adminhomepage />} />
          <Route path="/admin/add-doctors" element={<AddDoctor />} />
          <Route path="/admin/add-staff" element={<AddStaff />} />
          <Route path="/admin/view-doctors" element={<ViewDoctors />} />
          <Route path="/admin/view-staffs" element={<ViewStaff />} />

          {/* For Staff Routes */}
          <Route path="/staff-home" element={<Staffhomepage />} />
          <Route path="/staff/add-patient" element={<AddPatient />} />
          <Route path="/staff/view-patients" element={<ViewPatients />} />
          <Route path="/staff/view-doctors" element={<ViewAllDoctors />} />
          <Route
            path="/staff/appointment-booking"
            element={<AppointmentBooking />}
          />
          <Route
            path="/staff/view-appointments"
            element={<ViewAppointments />}
          />
          <Route
            path="/staff/view-medical-reports"
            element={<ViewAllMedicalReports />}
          />

          {/* For Logout */}
          <Route path="/logout" element={<Login />} />

          {/* For View Profile */}
          <Route path="/view-profile" element={<ViewProfile />} />
        </Routes>
      </BrowserRouter>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Adminhomepage />} />
          <Route path="/add-doctors" element={<AddDoctor />} />
          <Route path="/add-staff" element={<AddStaff />} />
          <Route path="/view-doctors" element={<ViewDoctors />} />
          <Route path="/view-staffs" element={<ViewStaff />} />
        </Routes>
      </Router> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<Doctorhomepage />} />
          <Route path="/view-appointments" element={<ViewAppointmentsById />} />
          <Route
            path="/view-medical-reports"
            element={<ViewMedicalReportByDoctor />}
          />
        </Routes>
      </Router> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<Patienthomepage />} />
          <Route
            path="/view-appointments"
            element={<ViewAppointmentsByPatient />}
          />
          <Route
            path="/view-medical-reports"
            element={<ViewMedicalReportsByPatient />}
          />
         </Routes>
      </Router>  */}

      {/* <Router>
      <Routes>
        <Route path="/" element={<Staffhomepage />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/view-patients" element={<ViewPatients />} />
        <Route path="/view-doctors" element={<ViewAllDoctors />} />
        <Route path="/appointment-booking" element={<AppointmentBooking />} />
        <Route path="/view-appointments" element={<ViewAppointments />} />
        <Route
          path="/view-medical-reports"
          element={<ViewAllMedicalReports />}
        /> */}
      {/* Add more routes for other components as needed */}
      {/* </Routes>
    </Router> */}
    </div>
  );
}
export default App;
