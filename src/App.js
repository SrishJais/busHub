import "./App.css";
import { Route, Routes } from "react-router-dom";
//import components (req)
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import BusTrack from "./pages/BusTrack";
import ManageBus from "./pages/ManageBus";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import DetailsBusTrack from "./pages/DetailsBusTrack";
import RideHistory from "./pages/RideHistory";
import React, { createContext, useState } from "react";

// Create a new context
export const userTypeContext = createContext("");

function App() {
  // Pass value through useContext
  let [userType, setUserType] = useState("");

  return (
    <>
      <userTypeContext.Provider value={{ userType, setUserType }}>
        <Header />
        {/* -------Authorization------------
      Status-login/logout 
      UserType-passenger, Driver,All

      1.Profile page -  login + All
      2. Bus Info page - login + Driver
      2.Save ride History page - login + Passenger */}

        {/* Nested route  */}
        <Routes>
          {/* ------------------------------------------------------------Visible to all --------------------------------------------------  */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/bustrack" element={<BusTrack />} />
          {/* id parameter in url is req */}
          <Route path="/details/:id" element={<DetailsBusTrack />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ------------------------------------------Visible to authorized person(Private route) ----------------------------------------  */}
          {/* 1. work for both with and without id parameter in url,i.e for add without id,update with id. 
            2. Status-login, UserType-Driver
        */}
          <Route
            path="/manageBus/:id?"
            element={<ProtectedRoute Cmp={<ManageBus />} />}
          />
          {/*1.work for both with and without id parameter in url,i.e for display without id in url,update with id in url(input feild show).
           2.Status-login, UserType-All(Passenger/Driver)  */}
          <Route
            path="/profile/:id?"
            element={<ProtectedRoute Cmp={<Profile />} />}
          />
          {/* Status-login, UserType-Passenger */}
          <Route
            path="/saveridehistory"
            element={<ProtectedRoute Cmp={<RideHistory />} />}
          />
          {/* ------------------------------------------------Visible to all --------------------------------------------------------------  */}
          <Route path="/errorpage" element={<PageNotFound />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </userTypeContext.Provider>
    </>
  );
}

export default App;
