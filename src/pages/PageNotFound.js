// import css file
import "../css/PageNotFound.css";
//import from package
import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <div
      id="pageNotFound_page"
      className="row d-flex justify-content-center align-items-center"
    >
      <div className="col-md-6">
        <Paper component={Box} p={3} m={1} className="text-center">
          {/* pageNotFound_heading */}
          <div className="py-2" id="pageNotFound_heading">
            404
          </div>

          <Typography variant="h5">Oops! Page not found</Typography>
          <div id="oops_subheading">
            <Typography variant="subtitle1">
              The page you are looking for does not exist or you don't have access to this page.
            </Typography>
          </div>
          {/* Go back to Home page btn */}
          <div>
            <Link to="/home" className="link_comp">
              <Button
                type="submit"
                id="gotoHome_btn"
                className="my-3"
                variant="contained"
              >
                Go back to Home
              </Button>
            </Link>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default PageNotFound;
