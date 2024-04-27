"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./styles";
import { useRouter } from "next/navigation";
import { HeaderData } from "@/app/static-data/data";
import TajImage from "../TajImage";
import { Link as ScrollLink } from "react-scroll";

const ResponsiveHeader = () => {
  const route = useRouter();
  const [opendrawer, setOpenDrawar] = useState(false);
  const onClickDrawer = () => {
    setOpenDrawar(true);
  };
  const onCloseDrawer = () => {
    setOpenDrawar(false);
  };
  const HomePageRoute = () => {
    route.push("/");
  };
  return (
    <Box>
      <MenuIcon onClick={onClickDrawer} sx={{ color: "white" }} />
      <Drawer
        anchor="right"
        open={opendrawer}
        PaperProps={{
          sx: styles.DrawarPapar,
        }}
      >
        <Box sx={styles.DrawarBox}>
          <Box sx={{ height: 62, width: 150 }} onClick={HomePageRoute}>
            <TajImage
              src={""}
              alt="Header Logo"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <IconButton onClick={onCloseDrawer}>
            <CloseIcon
              sx={{
                height: "35px",
                width: "35px",
                color: "Black",
              }}
            />
          </IconButton>
        </Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {HeaderData.map((item: any) => {
            return (
              <Grid item xs={10} sx={styles.ResponsiveDataGrid}>
                <ScrollLink
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={onCloseDrawer}
                >
                  <Typography fontSize={"20px"} sx={styles.LinkTypo}>
                    {item.name}
                  </Typography>
                </ScrollLink>
              </Grid>
            );
          })}
        </Grid>
      </Drawer>
    </Box>
  );
};

export default ResponsiveHeader;
