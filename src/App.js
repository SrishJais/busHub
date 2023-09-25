import "./App.css";
import { Routes, Route } from "react-router-dom";
//import components (req)
import SideDrawer from "./components/SideDrawer";
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
    <div>
      <Routes>
        <Route path="/" element={<SideDrawer />}>
          {/* Nested routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          <Route path="/about" element={<About />} />
          <Route path="/bustrack" element={<BusTrack />} />
          <Route path="/managebus" element={<ManageBus />} />
          <Route path="/manageroutes" element={<ManageRoutes />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
