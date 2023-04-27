import React from "react";
import Hero from "./components/Hero";
import { Box } from "@mui/material";
import Intro from "./components/Intro";
import Tech from "./components/Tech";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Intro />
      <Tech />
    </Box>
  );
};

export default Home;
