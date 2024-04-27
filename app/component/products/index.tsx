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
    <Box sx={styles.MainBox}>
      <Container id="products">
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
          {Product_data.map((item: any, index: any) => {
            return (
              <Grid item xs={12} sm={5.8} lg={3.8} key={`${item?.id}-${index}`}>
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
      </Container>
    </Box>
  );
};

export default Products;
