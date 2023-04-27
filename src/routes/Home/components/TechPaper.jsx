import { Paper, Typography } from "@mui/material";
import React, { Children } from "react";

const TechPaper = ({ children, ...props }) => {
  const techPaper = {
    py: 5,
    px: 5,
    width: "100%",
  };
  const techTitle = { textAlign: "center", marginBottom: 2 };
  return (
    <Paper sx={techPaper} elevation={24}>
      <Typography sx={techTitle} variant="h6">
        {props.title}
      </Typography>
      <hr></hr>
      {children}
    </Paper>
  );
};

export default TechPaper;
