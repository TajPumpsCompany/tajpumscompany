"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { Product_data } from "@/app/static-data/data";

const Products = () => {
  return (
    <Container id="products">
      <Box sx={styles.MainBox}>
        <Grid container gap={2} sx={styles.MainGrid}>
          <Grid item xs={12}>
            <Typography
              fontSize={"28px"}
              fontWeight={600}
              sx={{ marginBottom: "10px", color: "red" }}
            >
              Products:
            </Typography>
          </Grid>
          {Product_data.map((item: any) => {
            return (
              <Grid item xs={12} sm={5.8} lg={3.8}>
                <Card sx={styles.Card}>
                  <CardMedia
                    component="img"
                    alt={item.name}
                    height="350"
                    width={"100%"}
                    image={item.img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.des}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
