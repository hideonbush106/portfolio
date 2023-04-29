import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Card, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";

const TimelineCard = (props) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ marginBottom: 10 }}>
        <Card
          component={Fade}
          direction={props.fade}
          duration={1200}
          triggerOnce="true"
          sx={{
            width: "fit-content",
            paddingLeft: props.pLeft,
            paddingRight: props.pRight,
            float: props.position,
          }}
        >
          <CardContent>
            <Typography sx={{ my: 1 }} variant="h6">
              {props.title}
            </Typography>
            <Typography sx={{ my: 1 }} variant="subtitle2">
              {props.date}
            </Typography>
            <Typography sx={{ my: 1 }} variant="body">
              {props.role}
            </Typography>
            <br></br>
            <Typography sx={{ my: 1 }} variant="body">
              {props.major}
            </Typography>
            <br></br>
            <Typography sx={{ my: 1 }} variant="body">
              {props.gpa}
            </Typography>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCard;
