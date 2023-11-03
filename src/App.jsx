import "./App.css"
import { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen"
import Policies from "./Screens/dashboard/Policies"
import IndexStudent from "./Screens/dashboard/students/Index"
import Dashboard from "./Screens/dashboard/Dashboard"
import NotFound from "./Screens/NotFound"
import ResetPassword from "./ResetPassword"
import Course from "./Screens/dashboard/students/Course";

import Grades from "./Screens/dashboard/students/Grades";
import IndexFaculty from "./Screens/dashboard/faculty/IndexFaculty";
import FacultyListScreen from "./Screens/dashboard/FacultyListScreen";
import MessageScreen from "./Screens/dashboard/MessageScreen";
import CourseDetails from "./Screens/dashboard/CourseDetails";
import AccountScreen from "./Screens/dashboard/AccountScreen";
import StudentListScreen from "./Screens/dashboard/StudentListScreen";
import CreateCourseScreen from "./Screens/dashboard/faculty/CreateCourseScreen";
import ManageCourse from "./Screens/dashboard/ManageCourse";
import CreateExamScreen from "./Screens/dashboard/faculty/CreateExamScreen";
import UpdateCourse from "./Screens/dashboard/cord/UpdateCourse";
import ManageStudent from "./Screens/dashboard/admin/ManageStudent";
import ManageQA from "./Screens/dashboard/admin/ManageQA";
import ManageCord from "./Screens/dashboard/admin/ManageCord";
import ManageFaculty from "./Screens/dashboard/admin/ManageFaculty";
import AboutPage from "./Screens/AboutPage";
import ServicesScreen from "./Screens/ServicesScreen";
import ContactScreen from "./Screens/ContactScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import StudentGrades from "./Screens/dashboard/StudentGrades"
import User from "./data/User";

import ExamScreen from "./Screens/dashboard/ExamScreen";
import IndexAdmin from "./Screens/dashboard/admin/IndexAdmin";
import AdminAccount from  "./Screens/dashboard/admin/Accounts"
import StudentProfile from "./Screens/dashboard/admin/StudentProfile";
import FacultyProfile from "./Screens/dashboard/admin/FacultyProfile";
import Settings from "./Screens/dashboard/Settings";


import IndexCord from "./Screens/dashboard/cord/IndexCord";
import Complain from "./Screens/dashboard/students/Complain";
import IndexQA from "./Screens/dashboard/qa/IndexQA";

import Delete from "./Screens/Delete";
import ModifyCourse from "./Screens/dashboard/qa/ModifyCourse";
import StudentEdit from "./Screens/dashboard/admin/StudentEdit";
import FacultyEdit from "./Screens/dashboard/admin/FacultyEdit";
import PasswordChange from "./Screens/dashboard/PasswordChange";
import NameChange from "./Screens/dashboard/NameChange";
import LogOut from "./Screens/dashboard/LogOut";
import ChatBot from "./Components/ChatBot";
import ChatComponent from "./Components/dashboard/ChatComponent";
import ForgetPassword from "./Screens/ForgetPassword";
import CourseReview from "./Screens/dashboard/CourseReview";
import Feedback from "./Screens/dashboard/cord/Feedback";
import Troubleshoot from  "./Screens/dashboard/admin/Troubleshoot";
import StudentGradesBar from "./Components/dashboard/StudentGradesBar"
import {AppContext} from "./AppContext"
import CommonGradesBar from "./CommonGrades"
const CordMessage = lazy(() => import("./Screens/dashboard/faculty/CordMessage"));
const AdminMessage = lazy(() => import("./Screens/dashboard/cord/AdminMessage"));
const Discussion = lazy(() => import("./Screens/dashboard/students/Discussion"));
const FacultyMessage = lazy(() => import("./Screens/dashboard/qa/FacultyMessage"));
const Enquiries = lazy(() => import("./Screens/dashboard/cord/Enquiries"));

export default function App() {
  let [user, setUser] = useState(localStorage.getItem("user"));
  const [loggedInUser, setLoggedInUser] = useState(null);
  let [id, setId] = useState(localStorage.getItem("id"));
  console.log("app", user)
  return <>
    <BrowserRouter>
      <User.Provider value={{ user, setUser, id, setId, loggedInUser, setLoggedInUser}}key={loggedInUser ? loggedInUser.id : 0}>
        <ChatBot />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/forgot_password" element={<ForgetPassword />} />
          <Route path="/chatComponent" element={<ChatComponent/>} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard userType={user} />}>
            {
              user === "student" && <>
                <Route path="" element={<IndexStudent />} />
                <Route path="faculty" element={<FacultyListScreen />} />
                <Route path="complain" element={<Complain />} />
                <Route path="message/:userType/:id" element={<MessageScreen />} />
                <Route path="faculty" element={<FacultyListScreen />} />
                <Route path="exam" element={<ExamScreen />} />
                <Route path="discussion" element={<Discussion />} />
                <Route path="courses" element={<Course />} />
                <Route path="course/:courseId" element={<CourseDetails />} />
                <Route path="grades" element={<StudentGradesBar />} />
              </>
            }
            {
              user === "faculty" && <>
                <Route path="" element={<IndexFaculty />} />
                <Route path="grades" element={<Grades />} />
                <Route path="exam" element={<ExamScreen />} />
                <Route path="create-course" element={<CreateCourseScreen />} />
                <Route path="students" element={<StudentListScreen />} />
                <Route path="manage-course" element={<ManageCourse />} />
                <Route path="message/admin" element={<AdminMessage />} />
                <Route path="message/cord" element={<CordMessage />} />
                <Route path="course/:courseId" element={<CourseDetails />} />
                <Route path="create-exam" element={<CreateExamScreen />} />
                <Route path="StudentGrades" element={<StudentGrades />} />
              </>
            }
            {
              user === "cord" && <>
                <Route path="" element={<CommonGradesBar/>} />
                <Route path="grades" element={<Grades />} />
                <Route path="message/admin" element={<AdminMessage />} />
                <Route path="enquiries" element={<Enquiries />} />
                <Route path="faculty" element={<FacultyListScreen />} />
                <Route path="message/:userType/:id" element={<MessageScreen />} />
                <Route path="students" element={<StudentListScreen />} />
                <Route path="update-course" element={<UpdateCourse />} />
                <Route path="feedback" element={<Feedback />} />
              </>
            }
            {
              user === "quality-admin" && <>
                <Route path="" element={<CommonGradesBar/>} />
                <Route path="grades" element={<Grades />} />
                <Route path="manage-course" element={<ModifyCourse />} />
                <Route path="course/:courseId" element={<CourseDetails />} />
                <Route path="students" element={<StudentListScreen />} />
                <Route path="message/admin" element={<AdminMessage />} />
                <Route path="message/faculty" element={<FacultyMessage />} />
                <Route path="message/:userType/:id" element={<MessageScreen />} />
                <Route path="student/:studentId" element={<StudentProfile userType={user} />} />
                <Route path="policies" element={<Policies userType={user}/>} />
                <Route path="course-review" element={<CourseReview />} />
              </>
            }
            {
              user === "admin" && <>
                <Route path="" element={ <CommonGradesBar/>} />
                <Route path="grades" element={<Grades />} />
                <Route path="manage-students" element={<ManageStudent userType={user} />} />
                <Route path="manage-students/edit" element={<StudentEdit />}/>
                <Route path="manage-faculty" element={<ManageFaculty userType={user} />} />
                <Route path="manage-faculty/edit" element={<FacultyEdit userType={user} />} />
                <Route path="manage-quality-admin" element={<ManageQA userType={user} />} />
                <Route path="manage-cord" element={<ManageCord userType={user} />} />
                <Route path="student/:studentId" element={<StudentProfile userType={user} />} />
                <Route path="faculty/:facultyId" element={<FacultyProfile userType={user} />} />
                <Route path="message/:userType/:id" element={<MessageScreen />} />
                <Route path="troubleshoot" element={<Troubleshoot />} />
              </>
            }
            <Route path="account" element={<AdminAccount userType={user} />} />
            <Route path="settings" element={<Settings />} />
            <Route path="settings/password-change" element={<PasswordChange userType={user} />} />
            <Route path="settings/name-change" element={<NameChange userType={user} />} />
            <Route path="logout" element={<LogOut />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/delete" element={<Delete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </User.Provider>
    </BrowserRouter>
  </>
}