import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Code, Launch } from "@mui/icons-material";

export default function ProjectCard(props) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        sx={{ height: 225, objectFit: "cover" }}
        image={props.projectImg}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          target="_blank"
          href={props.webLink}
          variant="contained"
          endIcon={<Launch />}
        >
          Link
        </Button>
        <Button
          color="secondary"
          target="_blank"
          href={props.sourceLink}
          variant="contained"
          endIcon={<Code />}
        >
          source
        </Button>
      </CardActions>
    </Card>
  );
}
