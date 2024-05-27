import React from "react";
import { Navigate } from "react-router-dom";
// import useAuth from './useAuth';
// import { useAuth } from "../myFirebase/myAuthFirebase";

const ProtectedRoute = ({ Cmp }) => {
  // const { currentUser } = useAuth();
  const currentUser = true;
  const UserType = "passenger";

  //if not login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  //if logged in
  if ( 
    // login + All
    (currentUser && Cmp.type.name === "Profile") || 
    // login + driver only
    (currentUser && UserType === "driver" && Cmp.type.name === "ManageBus") ||
    // login + passenger only
    (currentUser && UserType === "passenger" && Cmp.type.name === "RideHistory")
  ) {
   
    return Cmp;
  }
 //login but any sub condition failed in if part
  return <Navigate to="/errorpage" />;
};

export default ProtectedRoute;
