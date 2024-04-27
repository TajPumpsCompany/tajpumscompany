"use client";
import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

const MainBanner = () => {
  return (
    <CardMedia image="/banner.jpg" sx={{ height: "100%", width: "100%" }}>
      <Box
        id="banner"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100vh",
        }}
      >
        <Typography fontSize={{ xs: "30px", sm: "48px" }}>
          Welcome to
          <br></br> <span style={{ color: "red" }}>Taj Pumps Company</span>
        </Typography>
      </Box>
    </CardMedia>
  );
};

export default MainBanner;
