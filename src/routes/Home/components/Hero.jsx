import React from "react";
import Typewriter from "typewriter-effect";
import { Box, Button, Typography } from "@mui/material";
import "./Hero.css";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          marginTop: 3,
          marginLeft: { xs: 3, sm: 6 },
          width: { xs: "100%", sm: "40%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          cascade
          component={Fade}
          direction="down"
          triggerOnce="true"
          duration={1200}
          sx={{ width: "100%", justifyContent: "center" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "3rem" },
              textDecoration: "none",
              color: "inherit",
              letterSpacing: "0.1rem",
              fontWeight: "700",
            }}
          >
            Hi, I am
          </Typography>
          <Typography
            component={Typewriter}
            options={{
              strings: [
                "fong",
                "a front-end developer",
                "a passionate designer",
              ],
              autoStart: true,
              loop: true,
            }}
          ></Typography>
          <Typography
            variant="h5"
            sx={{
              textDecoration: "none",
              color: "inherit",
              letterSpacing: 1.25,
            }}
          >
            I code and design beautiful things.
          </Typography>
          <Button
            sx={{
              width: "fit-content",
              my: 3,
              fontWeight: 700,
              color: "white !important",
            }}
            size="large"
            href="./assets/cv.pdf"
            variant="contained"
            color="secondary"
          >
            Download CV
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <Box
          component={Fade}
          direction="up"
          duration={1200}
          triggerOnce="true"
          sx={{
            margin: { xs: "2rem 0", sm: 0 },
          }}
        >
          <img
            style={{ objectFit: "cover", width: "100%" }}
            src="assets/hero.svg"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
