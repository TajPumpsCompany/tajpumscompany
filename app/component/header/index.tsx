"use client";
import { HeaderData } from "@/app/static-data/data";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { styles } from "./styles";
import ResponsiveHeader from "./responsiveHeader";
import TajImage from "../TajImage";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar elevation={0} sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Container>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={2} sm={1} sx={styles.Logo}>
              <Box sx={{ height: 50, width: "100%" }}>
                <TajImage
                  src={""}
                  alt="Header Logo"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Grid>
            {isMatch ? (
              <ResponsiveHeader />
            ) : (
              <Grid item xs={10} sm={11} sx={styles.HeaderList}>
                {HeaderData.map((item: any, index: any) => {
                  return (
                    <ScrollLink
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      key={`${item?.id}-${index}`}
                    >
                      <Typography
                        sx={{ marginRight: "10px", cursor: "pointer" }}
                      >
                        {item.name}
                      </Typography>
                    </ScrollLink>
                  );
                })}
              </Grid>
            )}
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
