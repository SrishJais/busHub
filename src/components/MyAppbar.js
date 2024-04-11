import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import "../css/MyAppbar.css";
import profile from "../assets/photos/profile.png";
import { Button } from "@mui/material";
import { AiOutlineLogout } from "react-icons/ai";
//for authentication
import { useAuth } from "../myFirebase/myAuthFirebase";
import { Link, useNavigate } from "react-router-dom";
import { FcMenu } from 'react-icons/fc';

const drawerWidth = 210;

export default function MyAppbar({ mobileOpen, handleDrawerToggle }) {
  //for authentication
  const { currentUser, myLogout } = useAuth();
  const navigate = useNavigate();
  //for logout
  const handleLogout = async () => {
    try {
      await myLogout();
      sessionStorage.setItem("tempOppData", JSON.stringify([]));
      navigate("../home");
    } catch (err) {
      console.log(err);
    }
  };

  //________________________________________________________________JSX start______________________________________________________
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        id="appbar"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            onClick={() => handleDrawerToggle(!mobileOpen)}
            sx={{ mr: 2, display: { sm: "none" } }}
            className="muiIcon"
          >
            <FcMenu />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          {/*_____________login btn(accessible only to logout user) and logout btn(accessible only to current user)___________ */}

          {currentUser ? (
            <Box className="d-flex">
              {/*_________________________profile section____________________________________ */}

              <div className="text-right px-2 black d-flex align-items-center">
                <b>--</b>
              </div>
              <Avatar
                className="align-self-center "
                alt="Anima Agarwal"
                src={profile}
              />
              <IconButton
                className="muiIcon"
                id="logout"
                onClick={handleLogout}
                style={{ fontSize: "35px" }}
              >
                <AiOutlineLogout />
              </IconButton>
            </Box>
          ) : (
            <li className="align-self-center mt-2 mb-1">
              <Link to="/login" className="link_comp">
                <Button id="login_page_btn" variant="contained">
                  LOGIN
                </Button>
              </Link>
            </li>
          )}
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
