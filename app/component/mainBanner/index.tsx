"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import TajImage from "../TajImage";
import BannerImage from "@/public/Banner1.jpeg";

const MainBanner = () => {
  return (
    <Box sx={styles.Box} id="banner">
      <Container>
        <Grid container sx={styles.MainGrid}>
          <Grid container item xs={12} md={5.9}>
            <Grid item xs={12}>
              <Typography fontSize={"14px"} sx={{ color: "black" }}>
                Welcome to
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={styles.BannerHeading}>
                Taj Pumps Company
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={styles.BannerPara}>
                A one-stop shop offering a variety of pumps for industrial,
                domestic, and solar applications, as well as solar and electric
                panels, along with a comprehensive selection of spare parts.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.9} sx={styles.MainGridSec2}>
            <Box sx={styles.Image}>
              <TajImage src={BannerImage} alt="Banner Image" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainBanner;
