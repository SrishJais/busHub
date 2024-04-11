import React, { Component } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { Typography } from "@mui/material";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav>
        <Link to="/" className="navbar-brand">
        <DirectionsBusIcon style={{ height: 40, width: 38 }}/>
          <Typography style={{fontSize: 22, margin: 3}}>BusHub</Typography>
        </Link>

        <div>
          <ul
            id="navlinks"
            className={this.state.clicked ? "#navlinks active" : "#navlinks"}
          >
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>yes</li>
            <li>
              <Link to="/bustrack" className="nav-item">
                Track Bus
              </Link>
            </li>
            <li>
              <Link to="/manageBus" className="nav-item">
                Bus Info
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-item">
                Contact
              </Link>
            </li>
            <Button
              variant="contained"
              style={{ padding: 7, marginTop: 8, marginRight: 5,  backgroundColor: "white" }}
            >
              <Link to="/login" style={{ color: "black", textDecoration: "none"}}>
                Login
              </Link>
            </Button>
          </ul>
        </div>

        <div id="mobile" onClick={this.handleClick}>
          <i id="bar">
            {this.state.clicked ? (
              <CloseIcon sx={{ fontSize: 33 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 33 }} />
            )}
          </i>
        </div>
      </nav>
    );
  }
}

export default Header;
