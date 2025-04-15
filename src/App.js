import React from "react";
import { Route, Routes } from "react-router-dom";

// Import your components
import DepartmentList from "./Components/department";
import SubDepartmentList from "./Components/subdepartment.js";
import Position from "./Employee/Position.js";
import AdminLayout from "./Layout/AdminLayout.jsx";
import AttendanceForm from "./Pages/AttendanceForm.js";
import Dashboard from "./Pages/Dashboard.jsx";
import Holiday from "./Pages/Holiday.js";
import DiagnostiCreate from "./Pages/LeaveApplication.js";
import LeaveApproval from "./Pages/LeaveApproval";
import Leaves from "./Pages/Leaves.js";
import MissingAttendance from "./Pages/MissingAttendance.js";
import MonthlyAttendance from "./Pages/MonthlyAttendance.js";
import WeeklyHoliday from "./Pages/WeeklyHoliday.js";
import Recruitment from "./Components/recruitment.js";
import Employees from "./Employee/Employees.js";
import Manageemployeesalary from "./Employee/Manageemployeesalary.js";
import Performance from "./Employee/Performance.js";
import SalaryAdvance from "./Employee/SalaryAdvance.js";
import SalaryGenerate from "./Employee/SalaryGenerate.js";
import DiagnosticList from "./Pages/Awardlist.js";
import BackupReset from "./Pages/BackupReset.js";
import LanguageSetup from "./Pages/LanguageSetup.js";
import MessagesTable from "./Pages/Message.js";
import NoticeList from "./Pages/Noticelist.js";
import SentMessagesTable from "./Pages/Sent.js";
import Settings from "./Pages/Setting";
import SetupRulesTable from "./Pages/Setup.js";
import CandidateShortlist from "./Pages/CandidateShortlist.js";
import InterviewList from "./Pages/InterviewList.js";
import CandidateSelection from "./Pages/CandidateSelection.js";
import ClientsTable from "./Pages/ClientsTable.js";
import ProjectsTable from "./Pages/ProjectsTable.js";
import ProjectTasksTable from "./Pages/ProjectTasksTable.js";
import ManageProjects from "./Pages/ManageProject.js";
import CompanyDetailsForm from "./Pages/CompanyDetailsForm.js";
import CompanyList from "./Pages/CompanyList.js";
import DoctorDetailsForm from "./Pages/DoctorDetailsForm.js";
import DoctorList from "./Pages/DoctorList.js";
import StaffDetailsForm from "./Pages/StaffDetailsForm.js";
import StaffList from "./Pages/StaffList.js";
import DiagnosticsBookingList from "./Pages/DiagnosticsBookingList.js";
import DoctorAppointmentList from "./Pages/DoctorAppointmentList.js";
import AppointmentBookingForm from "./Pages/AppointmentBookingForm.js";
import DiagnosticDetail from "./Pages/DiagnosticDetail.js";
import DiagnosticsPendingBooking from "./Pages/DiagnosticsPendingBooking.js";
import DoctorAppointmentListPending from "./Pages/DoctorAppointmentListPending.js";
import LoginPage from "./Pages/Login.js";
import CategoryForm from "./Pages/CategoryForm.js";
import CategoryList from "./Pages/CategoryList.js";
import CompanySidebar from "./Components/CompanySidebar.js";
import CompanyLayout from "./Layout/CompanyLayout.js";
import CompanyDashboard from "./Comany/CompanyDashboard.js";
import CompanyLoginPage from "./Components/CompanyLoginPage.js";
import CompanyStaffDetailsForm from "./Comany/CompanyStaffDetailsForm.js";
import CompanyStaffList from "./Comany/CompanyStaffList.js";
import DiagnosticsAcceptedBooking from "./Pages/DiagnosticsAcceptedBooking.js";
import DiagnosticsRejectedBooking from "./Pages/DiagnosticsRejectedBooking.js";
import AcceptedAppointmentsList from "./Pages/AcceptedAppointmentsList.js";
import RejectedAppointmentsList from "./Pages/RejectedAppointmentsList.js";
import CompanyProfilePage from "./Comany/CompanyProfilePage.js";

function App() {
  return (
    <Routes>
      {/* Login page rendered outside AdminLayout */}
      <Route path="/" element={<LoginPage />} />

      {/* All other routes inside AdminLayout */}
      <Route
        path="/*"
        element={
          <AdminLayout>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/department" element={<DepartmentList />} />
              <Route path="/subdepartment" element={<SubDepartmentList />} />
              <Route path="/position" element={<Position />} />
              <Route path="/attendanceform" element={<AttendanceForm />} />
              <Route path="/monthlyattendance" element={<MonthlyAttendance />} />
              <Route path="/missingattendance" element={<MissingAttendance />} />
              <Route path="/weeklyholiday" element={<WeeklyHoliday />} />
              <Route path="/holiday" element={<Holiday />} />
              <Route path="/create-diagnostic" element={<DiagnostiCreate />} />
              <Route path="/leaves" element={<Leaves />} />
              <Route path="/leaveapproval" element={<LeaveApproval />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/setting" element={<Settings />} />
              <Route path="/languagesetup" element={<LanguageSetup />} />
              <Route path="/backupreset" element={<BackupReset />} />
              <Route path="/diagnosticlist" element={<DiagnosticList />} />
              <Route path="/message" element={<MessagesTable />} />
              <Route path="/noticelist" element={<NoticeList />} />
              <Route path="/sentlist" element={<SentMessagesTable />} />
              <Route path="/setuplist" element={<SetupRulesTable />} />
              <Route path="/salaryadvance" element={<SalaryAdvance />} />
              <Route path="/salarygenerate" element={<SalaryGenerate />} />
              <Route path="/manageemployeesalary" element={<Manageemployeesalary />} />
              <Route path="/candidate-shortlist" element={<CandidateShortlist />} />
              <Route path="/interviewlist" element={<InterviewList />} />
              <Route path="/selectedcandidates" element={<CandidateSelection />} />
              <Route path="/clients" element={<ClientsTable />} />
              <Route path="/projects" element={<ProjectsTable />} />
              <Route path="/task" element={<ProjectTasksTable />} />
              <Route path="/manage-project" element={<ManageProjects />} />
              <Route path="/company-register" element={<CompanyDetailsForm />} />
              <Route path="/companylist" element={<CompanyList />} />
              <Route path="/create-doctor" element={<DoctorDetailsForm />} />
              <Route path="/doctorlist" element={<DoctorList />} />
              <Route path="/staff-register" element={<StaffDetailsForm />} />
              <Route path="/stafflist" element={<StaffList />} />
              <Route path="/diagnosticslist" element={<DiagnosticsBookingList />} />
              <Route path="/diagnosticsacceptedlist" element={<DiagnosticsAcceptedBooking />} />
              <Route path="/diagnosticsrejectedlist" element={<DiagnosticsRejectedBooking />} />
              <Route path="/doctoracceptedlist" element={<AcceptedAppointmentsList />} />
              <Route path="/doctorrejectedlist" element={<RejectedAppointmentsList />} />
              <Route path="/appintmentlist" element={<DoctorAppointmentList />} />
              <Route path="/appintmentbooking" element={<AppointmentBookingForm />} />
              <Route path="/diagnostic-center/:id" element={<DiagnosticDetail />} />
              <Route path="/diagnosticpending" element={<DiagnosticsPendingBooking />} />
              <Route path="/doctorpendingbookings" element={<DoctorAppointmentListPending />} />
              <Route path="/categoryform" element={<CategoryForm />} />
              <Route path="/categorylist" element={<CategoryList />} />
              <Route path="/companysidebar" element={<CompanySidebar />} />


            </Routes>
          </AdminLayout>
        }
      />

        {/* Company Routes */}
        <Route
        path="/company/*"
        element={
          <CompanyLayout>
            <Routes>
              <Route path="companydashboard" element={<CompanyDashboard />} />
              <Route path="add-benificary" element={<CompanyStaffDetailsForm />} />
              <Route path="all-benificary" element={<CompanyStaffList />} />
              <Route path="doctorlist" element={<DoctorList />} />
              <Route path="appointments" element={<DoctorAppointmentList />} />
              <Route path="book-appointment" element={<AppointmentBookingForm />} />
              <Route path="profile" element={<CompanyProfilePage />} />
              {/* Add more company routes as needed */}
            </Routes>
          </CompanyLayout>
        }
      />

      {/* Standalone Company Login Route */}
      <Route path="/company-login" element={<CompanyLoginPage />} />
    </Routes>
  );
}

export default App;
