import Timeline from "@mui/lab/Timeline";
import React from "react";
import TimelineCard from "./TimelineCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Fade cascade direction="down" duration={1200} triggerOnce="true">
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Education
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
          This is the start of my career...
        </Typography>
      </Fade>
      <Timeline
        sx={
          isMobile
            ? {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }
            : {}
        }
        position={isMobile ? "right" : "alternate"}
      >
        <TimelineCard
          fade="right"
          pLeft={1}
          pRight={8}
          title="Luong The Vinh high school for the Gifted"
          date="july, 2019 &rarr; july, 2021"
          role="Student"
          major="Bien Hoa city, Dong Nai"
        />
        <TimelineCard
          fade={isMobile ? "right" : "left"}
          position={isMobile ? "left" : "right"}
          pRight={isMobile ? 8 : 1}
          pLeft={isMobile ? 1 : 8}
          title="FPT University HCMC"
          date="sept, 2021 &rarr; now"
          role="Student"
          major="Major: Software Engineering"
          gpa="Current GPA: 7.8/10"
        />
      </Timeline>
    </Box>
  );
};

export default Education;
