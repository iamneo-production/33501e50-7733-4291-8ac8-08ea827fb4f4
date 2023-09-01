import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctorhomepage from "../Layouts/Doctorhomepage";
import ViewAppointmentsById from "../components/Doctor/ViewAppointmentsById";
import ViewMedicalReportByDoctor from "../components/Doctor/ViewMedicalReportByDoctor";
function DoctorRouting() {
  return (
    <div>
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/doctor-home" element={<Doctorhomepage />} />
          <Route path="/view-appointments" element={<ViewAppointmentsById />} />
          <Route
            path="/view-medical-reports"
            element={<ViewMedicalReportByDoctor />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default DoctorRouting;
