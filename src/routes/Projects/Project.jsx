import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./components/ProjectCard";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  return (
    <Box>
      <Fade cascade direction="down" duration={1200} triggerOnce="true">
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Projects
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            my: 3,
            width: { xs: "80%", sm: "60%" },
            mx: "auto",
          }}
          variant="h6"
        >
          Some of my praticing projects.
        </Typography>
      </Fade>
      <Fade cascade direction="down" duration={1200} triggerOnce="true">
        <Grid container spacing={5} sx={{ p: 5 }}>
          <Grid item sm={4} xs={12}>
            <ProjectCard
              projectImg="assets/project2.jpg"
              title="Lorem Picsum masonry"
              description="My very first Javascript project, using DOM and asynchronous"
              webLink="https://masonry-hideonbush106.vercel.app/"
              sourceLink="https://github.com/hideonbush106/masonry"
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <ProjectCard
              projectImg="assets/project1.jpg"
              title="F-Code IQ Challenge"
              description="IQ test web page for K18 students in FPT Universify HCMC"
              webLink="https://iqchallenge.vercel.app/"
              sourceLink="https://github.com/hideonbush106/iqchallenge"
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <ProjectCard
              projectImg="assets/project3.jpg"
              title="Document Management System"
              description="A web application for managing documents in a company using ReactJS and Firebase"
              webLink="https://www.fptuhcm-capstone.tech/"
              sourceLink="https://github.com/hideonbush106/DocManagementSystem"
            />
          </Grid>
        </Grid>
      </Fade>
    </Box>
  );
};

export default Project;
