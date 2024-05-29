//import useContext hook
import React, { useContext } from "react";
import "../css/Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
//left drawer
import LeftDrawer from "../components/LeftDrawer";
import { Button } from "@mui/material";

//for authentication
import { useAuth } from "../myFirebase/myAuthFirebase";
//context api for userType
import { userTypeContext } from "../App";

//------------------------------------------------------------Appbar js section----------------------------------------------------------
function Header() {
  //context api for userType
  const { userType } = useContext(userTypeContext);
  //for authentication
  const { currentUser, myLogout } = useAuth();

  const navigate = useNavigate();

  //for appbar
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //______________logout function start ________________
  const handleLogout = async () => {
    try {
      await myLogout();
      //sessionStorage.setItem("tempOppData", JSON.stringify([]));
      navigate("../home");
    } catch (err) {
      console.log(err);
    }
  };
  //______________logout function end________________

  //Arrays for menuItems and Menu links
  const menuItems = ["Home", "Bus Info", "Track Bus", "About", "Contact"];
  //Arrays for myaccount profile items
  const menuItemUrl = ["/", "/manageBus", "/bustrack", "/about", "/contact"];
  const myAccountItem = ["Profile", "Logout"];
  const myAccountItemIcon = [
    <Avatar />,
    <Logout
      fontSize="small"
      style={{
        width: "32px",
        height: "32px",
        marginLeft: "-4px",
        marginRight: "8px",
        color: "grey",
      }}
    />,
  ];

  // -------------------------------------------------------------Appbar JSX start -----------------------------------------------------
  return (
    <AppBar
      //override default styling of appbar
      style={{
        backgroundColor: "rgb(18, 185, 182)",
        /* navbar positon */
        position: "sticky",
        top: "0",
        zIndex: "1",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* ----------------logo and brand name section(Desktop)--------- */}
          <Link to="/" className="d-flex align-items-center" id="navbar_brand">
            {/* logo  */}
            <DirectionsBusIcon
              id="app_logo"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            />
            {/* app name  */}
            <Typography
              id="app_name"
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              BusHub
            </Typography>
          </Link>
          {/* ----------------------------------------------MenuIcon,MenuItems in phone start---------------------------------------------- */}

          {/* _______Change logo,app name position in phone______*/}
          {/* Note-
              In phone, menu icon havng flexGrow property
              1.flexGrow:"1"   => logo,app name will  remain in btw
              2.flexGrow:"0"   => logo,app name will  remain in leftmost
              3.flexGrow:"100"   => logo,app name will  remain in rightmost 

          */}
          {/* -------hamberger menu and Drawer section in phone -------- */}

          <Box sx={{ flexGrow: "1", display: { xs: "flex", md: "none" } }}>
            <LeftDrawer />
          </Box>
          {/* --------- logo and brand name section(Phone) ----------*/}
          <Link
            id="navbar_brand"
            to="/"
            className="d-flex align-items-center"
            style={{ textDecoration: "none", flexGrow: "1" }}
          >
            {/* logo in phone  */}
            <DirectionsBusIcon
              id="app_logo"
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            />
            {/* app name  */}
            <Typography
              id="app_name"
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              BusHub
            </Typography>
          </Link>
          {/* ---------------------------------------------------- MenuItems in desktop--------------------------------------------------- */}

          {/* __________Change menuItems position in desktop_______ */}
          {/* Note-
            In desktop, menuItems havng flexGrow property
            1.flexGrow:"1"   => logo,app name will  remain in btw
            2.flexGrow:"0"   => logo,app name will  remain in rightmost
            3.flexGrow:"100"   => logo,app name will  remain in ;eftmost 
          */}

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <div className="d-flex mx-2">
              {menuItems.map((menuElm, index) => {
                if (index === 1) {
                  if (!(currentUser && userType === "driver")) return null; // Do not render bus info menu if not logged in or user is not a driver
                }
                return (
                  <MenuItem
                    key={index}
                    className="px-2 py-1"
                    sx={{
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "black",
                        borderRadius: "5px",
                      },
                    }}
                  >
                    <NavLink to={menuItemUrl[index]} className="nav-item">
                      {menuElm}
                    </NavLink>
                  </MenuItem>
                );
              })}
            </div>
          </Box>
          {/* ----------------------------------------- Nav login , profile section in (all screen size)------------------------------------- */}
          <Box sx={{ flexGrow: 0 }}>
            {/* Nav login btn  */}
            {!currentUser ? (
              <Button variant="contained" style={{ backgroundColor: "white" }}>
                <Link to="/login" id="navLoginBtn">
                  Login
                </Link>
              </Button>
            ) : (
              <>
                {/* Profile avatar dropdown  */}
                <Tooltip title="myAccount">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    className="muiIcon"
                  >
                    <Avatar
                      src="/broken-image.jpg"
                      //   style={{
                      //     color: "rgb(18, 185, 182)",
                      //     backgroundColor: "white",
                      //   }}
                      id="navProfileAvatar"
                    />
                  </IconButton>
                </Tooltip>

                {/* Profile items/content  */}
                <Menu
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  keepMounted
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {myAccountItem.map((myAccountItemElm, index) => (
                    <MenuItem
                      className="myAccountItem"
                      key={index}
                      style={{ color: "rgb(18, 185, 182)", fontWeight: "bold" }}
                      onClick={() => {
                        //go to profile page
                        if (myAccountItemElm === "Profile") {
                          navigate("../profile");
                        }
                        //logout
                        else if (myAccountItemElm === "Logout") {
                          handleLogout();
                        }
                        handleCloseUserMenu();
                      }}
                    >
                      {myAccountItemIcon[index]} {myAccountItemElm}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
