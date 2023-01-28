import { Box } from "@mui/material";
import React from "react"
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <Header />
      <Box sx={{mt: 5, mb: 5, flex: "1 1 0"}}>
        <Outlet />
      </Box>
    </Box>
  )
};

export default Layout;
