import * as React from "react";
import "../css/LeftDrawer.css";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
//Drawer menu items 
import { FcHome } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { GiPathDistance } from 'react-icons/gi';
import { MdDirectionsBusFilled } from 'react-icons/md';
import { FcContacts } from 'react-icons/fc';
import { NavLink } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const menuItems = ["Home", "Bus Info", "Track Bus", "About", "Contact"];
  const menuItemUrl = ["/", "/manageBus", "/bustrack", "/about", "/contact"];
  const navDrawerMenuItem = [
    <FcHome/>,
    <MdDirectionsBusFilled/>,
    <GiPathDistance/>,
    <FcAbout/>,
    <FcContacts/>
  ];


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <Typography variant="h6" className="p-3" style={{color:"white",backgroundColor:"rgb(18, 185, 182)",fontWeight:"bold"}}>Browse BusHub</Typography>

      <List>
        {menuItems.map((menuElm, index) => (
          <ListItem key={index} disablePadding style={{ fontWeight: "bold" }}>
            <ListItemButton>
              <ListItemIcon 
              className="drawerMenuIcon"
              >
                {navDrawerMenuItem[index]}
              </ListItemIcon >
              <NavLink to={menuItemUrl[index]}
               className="drawer_nav-item"
               >
                    {menuElm}
                  </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* ________Hamberger menuIcon in phone__________  */}
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="inherit"
        className="muiIcon"
      >
        <MenuIcon />
      </IconButton>
      {/* ________Left Drawer in phone that opens on clicking Hamberger menuIcon__________  */}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
