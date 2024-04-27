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
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import React from "react";
import { styles } from "./styles";
import ResponsiveHeader from "./responsiveHeader";
import TajImage from "../TajImage";
import { Link as ScrollLink } from "react-scroll";
import HeaderLogo from "@/public/Logo.png";

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const ChangeNavBarColor = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });
  return (
    <AppBar
      elevation={0}
      sx={{
        background: ChangeNavBarColor ? "black" : "transparent",
        color: ChangeNavBarColor ? "white" : "black",
        transition: "background-color 0.5s, color 0.5s, backdrop-filter 0.5s",
      }}
    >
      <Toolbar>
        <Container>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={2} sm={1} sx={styles.Logo}>
              <Box sx={{ height: 55, width: "100%", cursor: "pointer" }}>
                <TajImage
                  src={HeaderLogo}
                  alt="Header Logo"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Grid>
            {isMatch ? (
              <ResponsiveHeader
                drawarColor={ChangeNavBarColor ? "white" : "black"}
              />
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
