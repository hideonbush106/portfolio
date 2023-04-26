import React from "react";
import Typewriter from "typewriter-effect";
import { Box, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import "./Home.css";
import Image from "mui-image";

const Home = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Box
        sx={{
          marginTop: 3,
          marginLeft: 3,
          width: { xs: "100%", sm: "45%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "100%", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "3rem" },
              textDecoration: "none",
              color: "inherit",
              letterSpacing: 1.25,
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
        </Box>
        <Typography
          variant="h5"
          sx={{
            textDecoration: "none",
            color: "inherit",
            letterSpacing: 1.25,
          }}
        >
          I code and design beautiful things
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "45%" } }}>
        <Image
          src={"assets/hero.svg"}
          width="100%"
          height="100%"
          fit="cover"
          duration={1000}
        />
      </Box>
    </Box>
  );
};

export default Home;
