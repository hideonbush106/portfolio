import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/material";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-around",
        alignItems: { sm: "start", xs: "center" },
      }}
    >
      <ContactInfo sx={{ marginBottom: 4, width: { sm: "45%", xs: "90%" } }} />
      <ContactForm sx={{ marginBottom: 4, width: { sm: "45%", xs: "90%" } }} />
    </Box>
  );
};

export default Contact;
