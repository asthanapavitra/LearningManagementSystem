import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentRegister from "./pages/StudentRegister";
import "remixicon/fonts/remixicon.css";
import LMSLogin from "./pages/LMSLogin";
import FacultyLogin from "./pages/FacultyLogin";
import ForgotPassword from "./pages/ForgotPassword";
import LMSProtectedWrapper from "./pages/LMSProtectedWrapper";
import FacultyProtectedWrapper from "./pages/FacultyProtectedWrapper";
import AdminProtectedWrapper from "./pages/AdminProtectedWrapper";
import AdminLogin from "./pages/AdminLogin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lms-login" element={<LMSLogin />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/lms-register" element={<StudentRegister />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        
      </Routes>
    </>
  );
};

export default App;
