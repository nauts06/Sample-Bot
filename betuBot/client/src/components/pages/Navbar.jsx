import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const drawerWidth = 240;
const navItems = ["Home", "About", "Login"];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
 
   

    <div>
      {/* style={{backgroundColor:"#EF4E29"}} */}
      <div className="navbar bg-neutral">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-base-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-base-200">Home</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-base-200">
          e-commerce BOT
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-base-200">Home</a>
            </li>
            <li>
              <a className="text-base-200">About</a>
            </li>
            <li>
              <a className="text-base-200">Login</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}

          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-base-200" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li>
              <a className="text-base-200" onClick={() => navigate("/login")}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
