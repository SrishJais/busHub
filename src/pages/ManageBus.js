import React from "react";
import "../css/ManageBus.css";
import "../css/BusItem.css";
import "../css/AddUpdateBusModal.css";

import BusItem from "../components/BusItem";
import AddUpdateBusModal from "../components/AddUpdateBusModal";

import { Box, Paper, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { MdDelete } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import Bus from "../assets/photos/bus.png";
import Avatar from "@mui/material/Avatar";
import { MdNumbers } from "react-icons/md";
import { MdLocationOff } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";
import { BsBusFront } from "react-icons/bs";
const ManageBus = () => {
  const activeStatus="Active";

  return (
    
    // manage bus heading
    <div>
      <div className="about">
        <div className="abt_heading">
          <h1>
            <span>Manage</span> BUS
          </h1>
        </div>
      </div>

      <div
        id="bus_page"
        className="row d-flex justify-content-center align-items-center"
      >
        <div className="col-md-6 col-lg-3">
          <div className="d-flex justify-content-end px-2">


            {/* ------------------------------------Bus actions icon section -----------------------------  */}
            <div>
            {/* add icon & add/update bus details  */}
              <AddUpdateBusModal/>
              {/* update/edit icon  */}
              <Fab
                className="ml-2 muiIcon"
                size="small"
                aria-label="edit"
                id="busEditIcon"
              >
                <EditIcon />
              </Fab>
              {/* delete icon  */}
              <Fab
                className="ml-2 muiIcon"
                size="small"
                aria-label="delete"
                id="busDeleteIcon"
              >
                <MdDelete />
              </Fab>
            </div>
          </div>
        {/* ----------------------------------no bus info data section ------------------------------------  */}
          {/* <Paper component={Box} p={4} m={1}>
            <div className="d-flex justify-content-center">
              <NoBusInfoImg />
            </div>

            <Typography
              variant="body1"
              color="text.secondary"
              className="text-center font-weight-bold"
            >
              No bus info available
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              className="text-center font-weight-bold"
            >
              Please add bus information to display
            </Typography>
          </Paper> */}

{/* -----------------------Bus info banner section ------------------------------------  */}
          <Paper component={Box} id="busBox">
          <div className="d-flex justify-content-center my-1 py-2" id="busBanner" >
            <Avatar
              id="bus_img"
              src={Bus}
              sx={{ width: 100, height: 100 }}
            />
          </div>

            {/* ---------------------------Bus items section----------------------*/}
          <div className="px-3 py-2 mt-4">
          <div className="d-flex align-items-center">
              <FaInfoCircle className="muiIcon mr-1" id="busInfoIcon" />
              <Typography id="busInfo_heading" variant="body1">
                BUS INFO
              </Typography>
            </div>
            {/* ______Bus items ______*/}
          <BusItem  busInfoitem_label="Bus No." busitem_content="5666767" Iconcomp={<MdNumbers />}/>
          <BusItem  busInfoitem_label="Registration Plate No." busitem_content="19765RT" Iconcomp={<BsBusFront/>}/>

          <BusItem  busInfoitem_label="Status" busitem_content={activeStatus} Iconcomp={activeStatus==="Active"?<FaLocationDot />:<MdLocationOff/> }/>

          <BusItem  busInfoitem_label="Travel State" busitem_content="West Bengal" Iconcomp={<FaCity/>}/>


          </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default ManageBus;
