import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
const ContactForm = (props) => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_79x7yzq",
        "template_l3nrbsl",
        form.current,
        "11Cdl8Sk0IXr3NvI6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="from_name" />
    //   <label>Email</label>
    //   <input type="email" name="from_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <Box sx={props.sx}>
      <Fade cascade direction="down" duration={1200} triggerOnce="true">
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Send your request
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
          I would love to respond to your queries.
        </Typography>
        <Paper elevation={3}>
          <Box
            ref={form}
            onSubmit={sendEmail}
            component="form"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <TextField
              sx={{ my: "4%", marginLeft: "4%", width: "44%" }}
              color="secondary"
              label="Full Name"
              name="from_name"
              required
            />

            <TextField
              sx={{ my: "4%", marginRight: "4%", width: "44%" }}
              type="email"
              color="secondary"
              label="Email"
              name="from_email"
              required
            />

            <TextField
              sx={{ marginBottom: "4%", marginLeft: "4%", width: "44%" }}
              type="tel"
              color="secondary"
              label="Phone No."
              name="from_phoneNo"
              required
            />

            <TextField
              sx={{ marginBottom: "4%", marginRight: "4%", width: "44%" }}
              color="secondary"
              label="Subject"
              name="subject"
              required
            />

            <TextField
              sx={{ marginLeft: "4%", marginBottom: "4%", width: "92%" }}
              color="secondary"
              label="Message"
              multiline
              rows={4}
              name="message"
              required
            />
            <Box sx={{ width: "100%", display: "flex", marginBottom: "4%" }}>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ mx: "auto" }}
                size="large"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Fade>
    </Box>
  );
};

export default ContactForm;
