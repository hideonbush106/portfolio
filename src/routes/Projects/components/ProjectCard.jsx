import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Code, Launch, Warning } from "@mui/icons-material";
import { BiGitBranch } from "react-icons/bi";

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
          href={props.sourceLink}
          variant="contained"
          endIcon={<Code />}
        >
          source
        </Button>

        {props.development ? (
          <Button
            disabled
            color="secondary"
            target="_blank"
            href={props.sourceLink}
            variant="contained"
            endIcon={<Warning />}
          >
            in development
          </Button>
        ) : (
          <Button
            color="secondary"
            target="_blank"
            href={props.webLink}
            variant="contained"
            endIcon={<Launch />}
          >
            Link
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
