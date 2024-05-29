//import useContext hook
import React, { useContext } from "react";
import bgBus from "../assets/photos/movelocationbus.gif";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

// Authentication
import { useAuth } from "../myFirebase/myAuthFirebase";
  //context api for userType
  import { userTypeContext } from "../App";

const Home = () => {
  //context api for userType
  const { userType, setUserType } = useContext(userTypeContext);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="Homepage">
      <img className="Homebg" src={bgBus} alt="" />

      <div className="aboutwebsite">
        <Typography variant="h6">
          Navigate your way with Real-Time Bus Tracking
        </Typography>
        <Typography>
          <b>
            A convenient solution for real-time local bus tracking, making your
            commute stress free and efficient with live updates at your
            fingertips.
          </b>
        </Typography>
      </div>

      <Paper elevation={7} className="Text_container">
        <div className="Hometext">
          <div className="question">
            <h1>Are you a _____ ?</h1>
          </div>
          <div className="ans_opt">
            <Button
              className="explorebut"
              variant="outlined"
              onClick={() => {
                setUserType("passenger");
                !currentUser ? navigate("../login") : navigate("../bustrack");
              }}
            >
              Passenger
            </Button>
            <Button
              className="explorebut"
              variant="outlined"
              onClick={() => {
                setUserType("driver");
                !currentUser ? navigate("../login") : navigate("../manageBus");
              }}
            >
              Bus Operator
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Home;
