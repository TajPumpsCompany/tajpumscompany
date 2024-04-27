"use client";
import { ProductImage } from "@/app/static-data/data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TajImage from "../TajImage";
import { styles } from "./styles";

const ProductGallery = () => {
  return (
    <Box sx={styles.MainBox} id="gallery">
      <Container>
        <Grid container gap={2} sx={styles.MainGrid}>
          <Grid item xs={12}>
            <Typography
              fontSize={"28px"}
              fontWeight={600}
              sx={{ marginBottom: "10px", color: "red" }}
            >
              Our Product Gallery:
            </Typography>
          </Grid>
          {ProductImage.map((item: any, index: any) => (
            <Grid item xs={12} sm={5.8} md={3.8} key={`${item?.id}-${index}`}>
              <Box sx={{ width: "100%", height: 250 }}>
                <TajImage
                  src={item.img}
                  alt={item.title}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductGallery;
