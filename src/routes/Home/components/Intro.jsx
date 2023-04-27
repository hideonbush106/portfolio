import useTheme from "@mui/material/styles/useTheme";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
const Intro = () => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={theme.palette.mode === "dark" ? "#323f4a" : "#6e07f3"}
      sx={{ color: "#FFF", py: 10, px: 4 }}
    >
      <AttentionSeeker effect="headShake" duration={1100}>
        <Typography sx={{ textAlign: "center" }} variant="h4">
          I am Nguyen Hoai Phong. Nice to meet you.
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            my: 3,
            width: { xs: "80%", sm: "40%" },
            mx: "auto",
          }}
          variant="h6"
        >
          I am a wandering Front-end developer finding my way to Full Stack
          developer. I love self-learning and exproing things.
        </Typography>
      </AttentionSeeker>
    </Box>
  );
};

export default Intro;
