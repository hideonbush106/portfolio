import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
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
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          toast.error("Error", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
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
              marginLeft: "4%",
              marginBottom: "4%",
              width: "92%",
            }}
          >
            {/** <TextField
          sx={{ marginLeft: "4%", marginBottom: "4%", width: "92%" }}
          color="secondary"
          label="Message"
          multiline
          rows={4}
          name="message"
          required
        />*/}
            <TextField
              sx={{
                marginTop: "5%",
                marginBottom: "2%",
                marginLeft: "4%",
                width: { sm: "44%", xs: "92%" },
              }}
              color="secondary"
              label="Full Name"
              name="from_name"
              required
            />

            <TextField
              sx={{
                marginBottom: "2%",
                marginTop: { xs: "2%", sm: "5%" },
                marginRight: "4%",
                marginLeft: { xs: "4%" },
                width: { sm: "44%", xs: "92%" },
              }}
              type="email"
              color="secondary"
              label="Email"
              name="from_email"
              required
            />

            <TextField
              sx={{
                my: "2%",
                marginBottom: "2%",
                marginLeft: "4%",
                width: { sm: "44%", xs: "92%" },
              }}
              type="tel"
              color="secondary"
              label="Phone No."
              name="from_phoneNo"
              required
            />

            <TextField
              sx={{
                my: "2%",
                marginBottom: "2%",
                marginLeft: { xs: "4%" },
                marginRight: "4%",
                width: { sm: "44%", xs: "92%" },
              }}
              color="secondary"
              label="Subject"
              name="subject"
              required
            />

            <TextField
              sx={{
                my: "2%",
                marginLeft: "4%",
                marginBottom: "4%",
                width: "92%",
              }}
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
                sx={{ mx: "auto", my: { xs: "5%", sm: "0" } }}
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
