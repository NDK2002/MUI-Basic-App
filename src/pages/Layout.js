import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SearchAppBar from "../components/NavBar";

function Layout() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <SearchAppBar />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default Layout;
