"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import TajImage from "../TajImage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@/app/page.module.css";

import { Autoplay } from "swiper/modules";
import { Banner_Images } from "@/app/static-data/data";

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
              <Typography
                sx={styles.BannerHeading}
                fontFamily={"var(--fira_sans)"}
              >
                Taj Pumps Company
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                fontFamily={"var(--work-sans)"}
                sx={styles.BannerPara}
              >
                A one-stop shop offering a variety of pumps for industrial,
                domestic, and solar applications, as well as solar and electric
                panels, along with a comprehensive selection of spare parts.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.9} sx={styles.MainGridSec2}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {Banner_Images.map((item, index) => {
                return (
                  <SwiperSlide
                    key={`${item}-${index}`}
                    style={{ textAlign: "center" }}
                  >
                    <Box sx={{ height: "250px", width: "100%" }}>
                      <TajImage
                        src={item.img}
                        alt="Banner Image"
                        style={{ borderRadius: "30px" }}
                      />
                    </Box>
                    <Typography>Pump Name</Typography>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainBanner;
