import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";

const CustomContainer = styled.div`
  padding-block: 50px;
  padding: 20px 20px 100px 20px;
`;

const CustomTextField = styled(TextField)`
  && {
    input,
    label {
      color: white;
    }
    textarea {
      color: white;
    }
    .MuiOutlinedInput-root {
      fieldset {
        border-color: white;
      }
      &:hover fieldset {
        border-color: var(--brandPrimary);
      }
      &.Mui-focused fieldset {
        border-color: var(--brandPrimary);
      }
    }
  }
`;

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = document.getElementById("user_name").value.trim();
    const email = document.getElementById("user_email").value.trim();

    if (!name || !email) {
      alert("Please fill in both name and email fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_dpp2gam",
        "template_bghml5q",
        document.querySelector("#contactForm"),
        {
          publicKey: "qeiF3BjlXdHk5WYZK",
        }
      )
      .then(
        () => {
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <CustomContainer>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <EmailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Email Me
          </Typography>
          <Box
            component="form"
            noValidate
            id="contactForm"
            onSubmit={sendEmail}
            sx={{ mt: 1 }}
          >
            <CustomTextField
              margin="normal"
              required
              fullWidth
              id="user_name"
              label="Name"
              name="user_name"
              autoComplete="name"
              autoFocus
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              id="user_email"
              label="Email Address"
              name="user_email"
              autoComplete="email"
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </CustomContainer>
  );
};
export default ContactMe;
