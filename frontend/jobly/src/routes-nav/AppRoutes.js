import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

import NotFound from "./NotFound";


function AppRoutes({ login, signup }) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `signup=${typeof signup}`,
  );

  return (
    <div className="pt-5">
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        <Route exact path="/login" element={<LoginForm login={login} />} />

        <Route exact path="/signup" element={<SignupForm signup={signup} />} />

        <Route exact path="/companies" element={
          <PrivateRoute>
            <CompanyList />
          </PrivateRoute>
        } />

        <Route exact path="/jobs" element={
          <PrivateRoute>
            <JobList />
          </PrivateRoute>
        } />

        <Route exact path="/companies/:handle" element={
          <PrivateRoute>
            <CompanyDetail />
          </PrivateRoute>
        } />

        <Route path="/profile" element={
          <PrivateRoute>
            <ProfileForm />
          </PrivateRoute>
        } />


        <Route path="*" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
