// import css file
import "../css/Profile.css";

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { FaUser } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Profile = () => {
  return (
    <div
      id="profile_page"
      className="row d-flex justify-content-center align-items-center"
    >
      <div className="col-md-6 col-lg-3">
        <Paper component={Box} p={2} m={1} style={{ borderRadius: "25px" }}>
          {/* myprofile_heading  */}
          <Typography id="myprofile_heading" variant="body1">
            MY PROFILE
          </Typography>
          {/* profile img  */}
          <div className="d-flex justify-content-center my-1">
            <Avatar
              id="profile_img"
              src="/broken-image.jpg"
              sx={{ width: 85, height: 85 }}
            />
          </div>

          <Typography id="profile_name" variant="h6" className="text-center">
            Srishti Jaiswal
          </Typography>
          {/* Username  */}
          <Typography
            variant="body2"
            className="text-center profileItem_label pb-1"
          >
            Srishjais
          </Typography>
          {/* ______________________updateProfileBtn_____________________  */}
          <Button
            id="updateProfileBtn"
            variant="contained"
            fullWidth
            p={2}
            style={{ borderRadius: "20px" }}
          >
            UPDATE PROFILE
          </Button>

          {/* ___________________Profile Items ___________________  */}
          <Paper component={Box} my={2} px={1} className="profileItem">
            <div className="d-flex">
              <div
                style={{ fontSize: "15px" }}
                className="d-flex align-items-center"
              >
                <span className="p-2 profileItemIcon">
                  <FaUser />
                </span>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  style={{ height: "40px", color: "red" }}
                  flexItem
                  className="mx-3"
                />
              </div>
              {/* __________Name____________  */}
              <div style={{ width: "100%" }}>
                <Typography variant="body2" className="profileItem_label py-1">
                  Name
                </Typography>
                <Typography className="profileItem_content" variant="h6" style={{fontSize:"15px",fontWeight:"bold"}}>
                  Srishti Jaiswal
                </Typography>
                {/* ________________________Editable name __________________  */}
                {/* <TextField
                  // Override default extra padding in textfield
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "0px",
                    },
                    // Override styling bottom border underline

                    "& .MuiInput-underline:before": {
                      borderBottom: "3px solid grey",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottom: "3px solid rgb(18, 185, 182)",
                    },
                  }}
                  //Change styling of textField
                  inputProps={{
                    //style placeholder
                    sx: {
                      "&::placeholder": {
                        color: "grey",
                        fontWeight: "normal",
                      },
                    },
                    //Style input content
                    style: {
                      color: "rgb(18, 185, 182)",
                      fontWeight: "bold",
                    },
                  }}
                  id="filled-basic"
                  fullWidth
                  autoFocus
                  size="small"
                  placeholder="Enter name"
                  variant="standard"
                /> */}
              </div>
            </div>
          </Paper>
          {/* __________Email____________  */}
          <Paper component={Box} my={2} px={1} className="profileItem">
            <div className="d-flex">
              <div
                style={{ fontSize: "15px" }}
                className="d-flex align-items-center"
              >
                <span className="p-2 profileItemIcon">
                  <MdEmail />
                </span>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  style={{ height: "40px", color: "red" }}
                  flexItem
                  className="mx-3"
                />
              </div>
              <div style={{ width: "100%" }}>
                <Typography variant="body2" className="profileItem_label py-1">
                  Email
                </Typography>
                <Typography
                  className="profileItem_content"
                  variant="h6"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  srishtijais02@gmail.com
                </Typography>
                {/* ________________________Editable email __________________  */}

                {/* <TextField
                  // Override default extra padding in textfield
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "0px",
                    },
                    // Override styling bottom border underline

                    "& .MuiInput-underline:before": {
                      borderBottom: "3px solid grey",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottom: "3px solid rgb(18, 185, 182)",
                    },
                  }}
                  //Change styling of textField
                  inputProps={{
                    //style placeholder
                    sx: {
                      "&::placeholder": {
                        color: "grey",
                        fontWeight: "normal",
                      },
                    },
                    //Style input content
                    style: {
                      color: "rgb(18, 185, 182)",
                      fontWeight: "bold",
                    },
                  }}
                  id="filled-basic"
                  fullWidth
                  autoFocus
                  size="small"
                  placeholder="Enter email"
                  variant="standard"
                /> */}
              </div>
            </div>
          </Paper>
          {/* __________Phone no.____________  */}
          <Paper component={Box} my={2} px={1} className="profileItem">
            <div className="d-flex">
              <div
                style={{ fontSize: "15px" }}
                className="d-flex align-items-center"
              >
                <span className="p-2 profileItemIcon">
                  <FaPhone />
                </span>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  style={{ height: "40px", color: "red" }}
                  flexItem
                  className="mx-3"
                />
              </div>
              <div style={{ width: "100%" }}>
                <Typography variant="body2" className="profileItem_label py-1">
                  Phone no.
                </Typography>
                <Typography
                  className="profileItem_content"
                  variant="h6"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  6289200091
                </Typography>
                {/* ________________________Editable phone no. __________________  */}

                {/* <TextField
                  // Override default extra padding in textfield
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "0px",
                    },
                    // Override styling bottom border underline

                    "& .MuiInput-underline:before": {
                      borderBottom: "3px solid grey",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottom: "3px solid rgb(18, 185, 182)",
                    },
                  }}
                  //Change styling of textField
                  inputProps={{
                    //style placeholder
                    sx: {
                      "&::placeholder": {
                        color: "grey",
                        fontWeight: "normal",
                      },
                    },
                    //Style input content
                    style: {
                      color: "rgb(18, 185, 182)",
                      fontWeight: "bold",
                    },
                  }}
                  id="filled-basic"
                  fullWidth
                  autoFocus
                  size="small"
                  placeholder="Enter phone no."
                  variant="standard"
                /> */}
              </div>
            </div>
          </Paper>
        </Paper>
      </div>
    </div>
  );
};

export default Profile;
