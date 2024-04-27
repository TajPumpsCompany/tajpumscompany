"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import TajImage from "../TajImage";
import BannerImage from "@/public/banner.png";
const MainBanner = () => {
  return (
    <Box
      id="banner"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "#fbfbfb",
      }}
    >
      <Typography fontSize={{ xs: "30px", sm: "48px" }}>
        Welcome to
        <br></br> <span style={{ color: "red" }}>Taj Pumps Company</span>
      </Typography>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <TajImage src={BannerImage} alt="" />
      </Box>
    </Box>
  );
};

export default MainBanner;
