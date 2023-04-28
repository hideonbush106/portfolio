import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import TechPaper from "./TechPaper";
import {
  FaHtml5,
  FaCss3,
  FaCoffee,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaGitAlt,
  FaTerminal,
  FaFigma,
  FaUbuntu,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiExpress,
  SiVercel,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";

const Tech = () => {
  const iconTitle = { textAlign: "center", marginBottom: "2.5rem" };
  const htmlStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#e54c21",
  };
  const cssStyle = {
    margin: "2rem auto 0",
    fontSize: "4.5rem",
    color: "#264de4",
  };
  const jsStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#f0dc4e",
  };
  const javaStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#ef1f26",
  };
  const sqlStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "black",
  };
  const bootstrapStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#6e2bf2",
  };
  const tailwindStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#38bdf8",
  };
  const reactStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#149eca",
  };
  const reduxStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#764abc",
  };
  const reactrouterStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#f44250",
  };
  const nodejsStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#57a746",
  };
  const sqlserverStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#eb1f24",
  };
  const mongodbStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#00ed64",
  };
  const expressStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "black",
  };
  const npmStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#c53635",
  };
  const gitStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#e84d31",
  };
  const terminalStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "black",
  };
  const figmaStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#9d56f7",
  };
  const ubuntuStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "#e95420",
  };
  const vercelStyle = {
    margin: "2rem auto 0",
    fontSize: "5rem",
    color: "black",
  };
  return (
    <Box>
      <Fade cascade direction="down" duration={1200} triggerOnce="true">
        <Typography
          variant="h4"
          sx={{ marginTop: 9, textAlign: "center", width: "100%" }}
        >
          Technologies stack
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            my: 3,
            width: { xs: "80%", sm: "60%" },
            mx: "auto",
          }}
        >
          This is what I've learned in my career. I'm focusing on Front-end
          development and praticing Back-end development.
        </Typography>
      </Fade>
      <Box
        sx={{
          py: 10,
          px: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          alignItems: "start",
        }}
      >
        <Box
          sx={{ width: { xs: "100%", sm: "20%" }, my: 2 }}
          component={Fade}
          cascade
          direction="up"
          duration={1200}
          triggerOnce="true"
        >
          <TechPaper title="Languages">
            <FaHtml5 style={htmlStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              HTML5
            </Typography>
            <FaCss3 style={cssStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              CSS3
            </Typography>
            <IoLogoJavascript style={jsStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              Javascript
            </Typography>
            <FaCoffee style={javaStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              Java
            </Typography>
            <TbSql style={sqlStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              SQL
            </Typography>
          </TechPaper>
        </Box>
        <Box
          component={Fade}
          cascade
          direction="down"
          duration={1200}
          triggerOnce="true"
          sx={{ width: { xs: "100%", sm: "20%" }, my: 2 }}
          effect="headShake"
        >
          <TechPaper title="Front-end">
            <FaBootstrap style={bootstrapStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              Bootstrap
            </Typography>
            <SiTailwindcss style={tailwindStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              TailwindCSS
            </Typography>
            <FaReact style={reactStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              ReactJS
            </Typography>
            <SiReactrouter style={reactrouterStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              React router
            </Typography>
            <SiRedux style={reduxStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              Redux
            </Typography>
          </TechPaper>
        </Box>
        <Box
          sx={{ width: { xs: "100%", sm: "20%" }, my: 2 }}
          component={Fade}
          cascade
          direction="up"
          duration={1200}
          triggerOnce="true"
        >
          <TechPaper title="Back-end">
            <FaNodeJs style={nodejsStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              NodeJS
            </Typography>
            <SiMongodb style={mongodbStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              MongoDB
            </Typography>
            <SiExpress style={expressStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              ExpressJS
            </Typography>
            <SiMicrosoftsqlserver style={sqlserverStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              Microsoft SQL Server
            </Typography>
            <FaCoffee style={javaStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              Java Servlet
            </Typography>
          </TechPaper>
        </Box>
        <Box
          sx={{ width: { xs: "100%", sm: "20%" }, my: 2 }}
          component={Fade}
          cascade
          direction="down"
          duration={1200}
          triggerOnce="true"
        >
          <TechPaper title="Tools and others">
            <FaNpm style={npmStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              npm
            </Typography>
            <FaGitAlt style={gitStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              git
            </Typography>
            <FaTerminal style={terminalStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              Terminal
            </Typography>
            <FaFigma style={figmaStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              Figma
            </Typography>
            <FaUbuntu style={ubuntuStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              Ubuntu
            </Typography>
            <SiVercel style={vercelStyle} />
            <Typography variant="subtitle1" sx={iconTitle}>
              Vercel
            </Typography>
          </TechPaper>
        </Box>
      </Box>
    </Box>
  );
};

export default Tech;
