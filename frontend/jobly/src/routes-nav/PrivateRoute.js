import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

function PrivateRoute({ children }) {
  const { currentUser } = useContext(UserContext);

  return currentUser ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
