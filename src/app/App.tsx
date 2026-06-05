import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfessionalDashboard from "./pages/professional/ProfessionalDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import DashboardLayout from "./components/DashboardLayout";

// Professional Pages (placeholders for now)
import ProfessionalChatbot from "./pages/professional/Chatbot";
import ProfessionalEmail from "./pages/professional/EmailGenerator";
import ProfessionalMeetingNotes from "./pages/professional/MeetingNotes";
import ProfessionalTaskPlanner from "./pages/professional/TaskPlanner";
import ProfessionalResearch from "./pages/professional/ResearchAssistant";
import ProfessionalCVBuilder from "./pages/professional/CVBuilder";
import ProfessionalDeadlinePlanner from "./pages/professional/DeadlinePlanner";

// Student Pages (placeholders for now)
import StudentChatbot from "./pages/student/Chatbot";
import StudentStudyHub from "./pages/student/StudyHub";
import StudentHumanizer from "./pages/student/Humanizer";
import StudentCVBuilder from "./pages/student/CVBuilder";
import StudentDeadlinePlanner from "./pages/student/DeadlinePlanner";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/:userType" element={<SignUpPage />} />

        {/* Professional Dashboard Routes */}
        <Route
          path="/dashboard/professional"
          element={
            <DashboardLayout userType="professional">
              <ProfessionalDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/professional/chatbot"
          element={
            <DashboardLayout userType="professional">
              <ProfessionalChatbot />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/professional/email"
          element={
            <DashboardLayout userType="professional">
              <ProfessionalEmail />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/professional/meeting-notes"
          element={
            <DashboardLayout userType="professional">
              <ProfessionalMeetingNotes />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/professional/task-planner"
          element={
            <DashboardLayout userType="professional">
              <ProfessionalTaskPlanner />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/professional/research"
          element={
            <DashboardLayout userType="professional">
              <ProfessionalResearch />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/professional/cv-builder"
          element={
            <DashboardLayout userType="professional">
              <ProfessionalCVBuilder />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/professional/deadline-planner"
          element={
            <DashboardLayout userType="professional">
              <ProfessionalDeadlinePlanner />
            </DashboardLayout>
          }
        />

        {/* Student Dashboard Routes */}
        <Route
          path="/dashboard/student"
          element={
            <DashboardLayout userType="student">
              <StudentDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/student/study-hub"
          element={
            <DashboardLayout userType="student">
              <StudentStudyHub />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/student/chatbot"
          element={
            <DashboardLayout userType="student">
              <StudentChatbot />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/student/humanizer"
          element={
            <DashboardLayout userType="student">
              <StudentHumanizer />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/student/cv-builder"
          element={
            <DashboardLayout userType="student">
              <StudentCVBuilder />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/student/deadline-planner"
          element={
            <DashboardLayout userType="student">
              <StudentDeadlinePlanner />
            </DashboardLayout>
          }
        />

        {/* Catch all - redirect to landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
