"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import TajImage from "../TajImage";
import CEOImage from "@/public/CEO.png";

const AboutUs = () => {
  return (
    <Box sx={styles.MainBox} id="about-us">
      <Container>
        <Grid container sx={styles.MainGrid}>
          <Grid item xs={12} md={6}>
            <Typography
              fontSize={"28px"}
              fontWeight={600}
              sx={{ marginBottom: "10px", color: "red" }}
            >
              About Us:
            </Typography>
            <Typography>
              TAJ PUMPS COMPANY has established its mark for about 35 years and
              counting and has proven its success by manufacturing and suppling
              quality products Nationwide. The products include manufacturing
              all kinds of Centrifugal and Sludge Pumps which hold applications
              in Sugar Mills, Chemical Mills and any kind of domestic &
              commercial purposes. Our Products include Industrial,
              Agricultural, Commercial and Domestic Pumps along with Electric
              Panels and SOLAR based systems.
            </Typography>
            <Box sx={styles.Quote}>
              <Typography sx={{ marginLeft: "20px" }}>
                <span
                  style={{
                    fontSize: "20px",
                    textDecoration: "underline",
                    fontStyle: "italic",
                    fontWeight: 600,
                  }}
                >
                  Build trust through sincerity
                </span>
                <br></br>
                <span>{"“He’s not one of us, the one who deceives us”"}</span>
                <br></br>
                <span style={{ color: "red" }}>Prophet Muhammad (S.A.W.W)</span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={styles.ImageGrid}>
            <Box
              sx={{
                height: "300px",
                width: "100%",
              }}
            >
              <TajImage
                src={CEOImage}
                alt="CEO Image"
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Typography fontWeight={600} fontStyle={"italic"}>
              <span style={{ color: "red" }}>C.E.O:</span> MR. Azhar Ali
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
