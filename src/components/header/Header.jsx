import React from "react";
import NavList from "../nav-list/NavList";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#04111E",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          margin: "50px 100px 0px 100px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
          paddingLeft: "0px !important",
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar
            sx={{
              bgcolor: "#4CA6FF",
              color: "#fff",
              fontWeight: "bold",
              width: 35,
              height: 35,
            }}
          >
            V
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4CA6FF" }}>
            Vishnuprabhu
          </Typography>
        </Toolbar>

        <NavList />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
