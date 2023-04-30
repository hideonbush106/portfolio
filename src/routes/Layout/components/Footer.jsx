import { Box } from "@mui/material";
import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import { blueGrey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { Email, FacebookRounded, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const iconStyle = { mx: 1, width: "2rem", height: "2rem" };
  return (
    <Box
      bgcolor={theme.palette.mode === "dark" ? "#272727" : blueGrey[50]}
      component="footer"
      sx={{
        padding: { sm: "2rem 2rem 2rem", xs: "1rem 0rem" },
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: { sm: "30%", xs: "100%" },
          display: "flex",
          my: 1,
          justifyContent: { sm: "start", xs: "center" },
        }}
      >
        <Typography
          variant="h5"
          component={Link}
          color="secondary"
          to="/"
          sx={{
            textAlign: { sm: "left", xs: "center" },
            textDecoration: "none",
            letterSpacing: 2,
            fontWeight: "700",
          }}
        >
          fong
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "40%" }, my: 1 }}>
        <Typography
          variant="h6"
          sx={{
            textDecoration: "none",
            textAlign: "center",
            color: "inherit",
            letterSpacing: 1.5,
            fontWeight: "500",
          }}
        >
          Made with ❤️ and Su
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          my: 1,
          width: { sm: "30%", xs: "100%" },
          justifyContent: { sm: "flex-end", xs: "center" },
        }}
      >
        <MuiLink color="secondary" target="_blank" href="https://www.linkedin.com/in/phonghoai/">
          <LinkedIn sx={iconStyle} />
        </MuiLink>
        <MuiLink color="secondary" target="_blank" href="https://github.com/hideonbush106">
          <GitHub sx={iconStyle} />
        </MuiLink>
        <MuiLink color="secondary" target="_blank" href="mailto:andyhoaiphong2003@gmail.com">
          <Email sx={iconStyle} />
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;
