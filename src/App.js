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
import ManageRoutes from "./pages/ManageRoutes";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/bustrack" element={<BusTrack />} />
          <Route path="/manageBus" element={<ManageBus />} />
          <Route path="/manageRoutes" element={<ManageRoutes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </>
  );
}

export default App;
