//import useContext hook
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
// Authentication
import { useAuth } from "../myFirebase/myAuthFirebase";
  //context api for userType
import { userTypeContext } from "../App";

const ProtectedRoute = ({ Cmp }) => {
  //context api for userType
  const { userType} = useContext(userTypeContext);
  const { currentUser } = useAuth();

  //if not login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  //if logged in
  if ( 
    // login + All
    (currentUser && Cmp.type.name === "Profile") || 
    // login + driver only
    (currentUser && userType === "driver" && Cmp.type.name === "ManageBus") ||
    // login + passenger only
    (currentUser && userType === "passenger" && Cmp.type.name === "RideHistory")
  ) {
   
    return Cmp;
  }
 //login but any sub condition failed in if part
  return <Navigate to="/errorpage" />;
};

export default ProtectedRoute;
