//import useContext hook
import React, { useContext } from "react";
import "../css/About.css";
import "../css/BusTrack.css";

import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import BusIcon from "../assets/icons/busIcon.png";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
//for authentication
import { useAuth } from "../myFirebase/myAuthFirebase";
//context api for userType
import { userTypeContext } from "../App";

const BusTrack = () => {
  //for authentication
  const { currentUser } = useAuth();

  //context api for userType
  const { userType } = useContext(userTypeContext);
  const id = 123;

  return (
    // <div className='about'>
    //   <div className='abt_heading'>
    //     <h1><span>BUS </span> Tracking</h1>
    //   </div>
    // </div>

    <div>
      <div className="about">
        <div className="abt_heading">
          <h1>
            <span>BUS</span> Tracking
          </h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center my-3">
        {/* ________________________map for nearby buses __________________________________  */}
        <div className="col-md-6 col-lg-7">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            eligendi dignissimos iusto ullam corrupti, vel commodi dolore
            aperiam error hic nisi, nesciunt necessitatibus aut deleniti?
            Distinctio et laborum eum voluptatem, iste enim labore esse harum
            accusamus illo quam fugiat maiores quasi delectus deserunt ipsum
            dolor! Quo ut officiis, eius
          </Typography>
        </div>
      </div>
      <div className="row d-flex justify-content-center my-2">
        <div className="col-md-6 col-lg-4">
          <Typography variant="body1" style={{ fontWeight: "bolder" }}>
            NEARBY BUSES
          </Typography>

          <Paper component={Box} my={2} px={1} className="busTrackItem">
            <div className="d-flex align-items-center">
              {/* ____________Bus icon ____________  */}
              <Avatar alt="BusIcon" src={BusIcon} />
              <Divider
                orientation="vertical"
                variant="middle"
                style={{ height: "60px", color: "red" }}
                flexItem
                className="mx-3 align-self-center"
              />
              <div style={{ width: "100%" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <Typography
                    variant="body2"
                    className="profileItem_label py-1"
                  >
                    Bus no.
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                  >
                    <span className="busTrackItemContent">100m</span> away
                  </Typography>
                </div>

                <Typography
                  variant="h6"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  Reach in <span className="busTrackItemContent">10 min</span>
                </Typography>

                {/* ______________________Save btn_____________________  */}

                <div className="d-flex justify-content-end my-1" width="100%">
                  {currentUser && userType === "passenger" && (
                    <Link to="/saveridehistory" className="link_comp ">
                      <Button
                        id="travelHistorySaveBtn"
                        variant="contained"
                        p={2}
                        style={{ borderRadius: "20px" }}
                        className="mr-2"
                      >
                        SAVE
                      </Button>
                    </Link>
                  )}

                  {/* ______________________More btn_____________________  */}
                  <Link to={`/details/${id}`} className="link_comp ">
                    <Button
                      id="nearbyBusDetailsBtn"
                      variant="contained"
                      p={2}
                      style={{ borderRadius: "20px" }}
                    >
                      MORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default BusTrack;
