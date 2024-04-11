import React from "react";
import bgBus from "../assets/photos/movelocationbus.gif";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const Home = () => {
  return (
    <div className="Homepage">
      <img className="Homebg" src={bgBus} alt="" />

      <div className="aboutwebsite">
        <Typography style={{fontSize: 5}}>
          <h2>Navigate your way with Real-Time Bus Tracking</h2>
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
            <Button className="explorebut" variant="outlined">
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              >
                Passenger
              </Link>
            </Button>
            <Button className="explorebut" variant="outlined">
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              >
                Bus Operator
              </Link>
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Home;
