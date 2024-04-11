import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import taskIcon from "../assets/icons/taskIcon.svg";
import settingIcon from "../assets/icons/settingIcon.svg";
import msgIcon from "../assets/icons/msgIcon.svg";
import homeIcon from "../assets/icons/homeIcon.svg";
import membersIcon from "../assets/icons/membersIcon.svg";
import MyAppbar from "./MyAppbar";
import logo from "../assets/bus-40.png";
import "../css/SideDrawer.css";
import { NavLink, Outlet } from "react-router-dom";

import { FcHome } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { GiPathDistance } from 'react-icons/gi';
import { MdDirectionsBusFilled } from 'react-icons/md';
import RouteIcon from '@mui/icons-material/Route';
import { FcContacts } from 'react-icons/fc';

const drawerWidth = 210;

function SideDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (mobileOpenPassed) => {
    setMobileOpen(mobileOpenPassed);
  };
  const munuIconChoose = [
    <FcHome/>,
    <FcAbout/>,
    <GiPathDistance/>,
    <MdDirectionsBusFilled/>,
    <RouteIcon/>,
    <FcContacts/>
  ];
  const topMenuUrl = ["/home", "/about", "/bustrack", "/managebus", "/manageroutes","/contact"];
  const drawer = (
    <div id="drawer">
      {/* drawer header */}
      <Toolbar className="px-2 flexSpaceBtw">
        <div className="d-flex pl-2">
          <img src={logo} alt="logo" />
          <Typography
            className="pl-2 black"
            id="project_heading"
            disableTypography
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            BusHub
          </Typography>
        </div>
      </Toolbar>
      <Divider />
      {/* Drawer top list  */}

      <List>
        {["Home", "About", "BusTrack","ManageBus", "ManageRoutes", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                className="py-1"
                component={NavLink}
                to={topMenuUrl[index]}
              >
                <ListItemIcon 
                style={{ minWidth: "34px",fontSize: "x-large"}}>
                  {munuIconChoose[index]}
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={text}
                  className="lightGrey"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MyAppbar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={()=>setMobileOpen(!mobileOpen)}

          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

SideDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideDrawer;