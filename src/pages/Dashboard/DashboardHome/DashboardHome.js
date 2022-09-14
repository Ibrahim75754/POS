import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo2.png";
import NestedRoutes from "../NestedRoutes/NestedRoutes";
import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";
import DashboardNavbar from "../UIHome/DashboardNavbar/DashboardNavbar";

const drawerWidth = 270;

const DashboardHome = (props) => {


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div style={{ background: "#fff" }}>
      <NavLink
        to="/dashboard"
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, my: 2, textAlign: "center" }}
        >
          <img
            style={{
              width: "80%",
              height: "40px",
            }}
            src={logo}
            alt=""
          />
        </Typography>
      </NavLink>
      {/* <Toolbar /> */}
      <SidebarNavigation />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#ffffff !important",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000 !important" }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ width: "100%" }}>
            <DashboardNavbar />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
              // overflowY: "unset",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: "#E5E5E5",
          height: "100%",
        }}
      >
        <Toolbar />
        {/* Nested Routes */}
        <NestedRoutes />
      </Box>
    </Box>
  );
};

DashboardHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardHome;
