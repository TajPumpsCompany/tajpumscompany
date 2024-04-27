"use client";
import { FooterNumber, SocialIcons } from "@/app/static-data/data";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import TajImage from "../TajImage";
import { styles } from "./styles";
import HeaderLogo from "@/public/Logo.png";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <Box sx={styles.MainBox} id="contact-us">
      <Container>
        <Grid container rowGap={1} sx={styles.MainGrid}>
          <Grid item xs={12} sm={2} lg={1}>
            <Box sx={{ height: 75, width: 75 }}>
              <ScrollLink
                to={"banner"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <TajImage
                  src={HeaderLogo}
                  alt="footer Icons"
                  style={{ objectFit: "contain", cursor: "pointer" }}
                />
              </ScrollLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} sx={styles.FollowUs}>
            <Typography sx={{ color: "red" }}>Follow Us:</Typography>
            {SocialIcons.map((item: any, index: any) => {
              return (
                <Box sx={{ marginLeft: "10px" }} key={`${item?.id}-${index}`}>
                  <Link
                    href={item.link}
                    target="blank"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        height: 20,
                        width: 20,
                        marginRight: "8px",
                      }}
                    >
                      <TajImage src={item.logo} alt={item.name} />
                    </Box>
                    <Typography>{item.name}</Typography>
                  </Link>
                </Box>
              );
            })}
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ color: "red" }}>
              {"We're located here:"}
            </Typography>
            <Link
              href={"https://maps.app.goo.gl/YjwBtBdW4gZojfeA9"}
              target="blank"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Typography fontSize={"12px"} sx={{ marginBottom: "10px" }}>
                https://maps.app.goo.gl/YjwBtBdW4gZojfeA9
              </Typography>
            </Link>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d212.4481289248772!2d74.328044!3d31.574383999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b779a807a9d%3A0x2baacb944b2abe10!2sTAJ%20PUMP%20COMPANY!5e0!3m2!1sen!2sus!4v1714209333519!5m2!1sen!2sus"
              width="100%"
              height="220px"
              style={{ border: 0 }}
              loading="lazy"
              title="location"
            />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography sx={{ color: "red" }}>
                Get In Touch With Us:
              </Typography>
            </Grid>
            {FooterNumber.map((item: any, index: any) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={2}
                  sx={styles.Numbers}
                  key={`${item?.id}-${index}`}
                >
                  <Link
                    href={item.link}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <Typography>{item.number}</Typography>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} sx={styles.Rights}>
            <Typography fontSize={"12px"}>
              <span style={{ color: "red" }}>©</span> Copyright owned by Taj
              Pumps Company 2024
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
