import React, { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import { Alert, Divider, Stack } from "@mui/material";
import PageSection from "../components/ui/PageSection";
import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";

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
  const uaePhoneWhatsapp = "+971501791162";
  const palestineWhatsapp = "+970598115747";
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: string }
  const [errors, setErrors] = useState({});

  const whatsappContacts = useMemo(
    () => [
      { label: "WhatsApp", number: uaePhoneWhatsapp },
      { label: "WhatsApp", number: palestineWhatsapp },
    ],
    []
  );

  const toWhatsAppLink = (phoneNumber) => {
    const digits = String(phoneNumber || "").replace(/[^\d]/g, "");
    return `https://wa.me/${digits}`;
  };

  const isValidEmail = (value) => {
    const v = String(value || "").trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  };

  const validate = () => {
    const name = document.getElementById("user_name")?.value?.trim() || "";
    const email = document.getElementById("user_email")?.value?.trim() || "";
    const message = document.getElementById("message")?.value?.trim() || "";

    const next = {};
    if (!name) next.user_name = "Name is required.";
    if (!email) next.user_email = "Email is required.";
    else if (!isValidEmail(email)) next.user_email = "Please enter a valid email.";
    if (!message) next.message = "Message is required.";

    setErrors(next);
    return { ok: Object.keys(next).length === 0, name, email, message };
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus(null);

    const result = validate();
    if (!result.ok) {
      setStatus({ type: "error", text: "Please fix the highlighted fields." });
      return;
    }

    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_dpp2gam",
        "template_bghml5q",
        document.querySelector("#contactForm"),
        {
          publicKey: "qeiF3BjlXdHk5WYZK",
        }
      );
      setStatus({ type: "success", text: "Message sent successfully. I’ll get back to you soon." });
      setErrors({});
      document.querySelector("#contactForm")?.reset();
    } catch (error) {
      setStatus({
        type: "error",
        text: `Failed to send. ${error?.text || "Please try again in a moment."}`,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box sx={{ minHeight: "calc(100vh - 64px - 64px)" }}>
      <PageSection maxWidth="sm">
        <Stack spacing={3}>
          <Box sx={{ textAlign: "center" }}>
            <Avatar sx={{ mx: "auto", mb: 1, bgcolor: "secondary.main" }}>
              <EmailIcon />
            </Avatar>
            <SectionHeader
              eyebrow="Contact"
              title="Let’s connect"
              subtitle="Send an email or message me on WhatsApp. I usually reply within 24 hours."
              align="center"
            />
          </Box>

          <GlassCard sx={{ p: { xs: 2.25, md: 3 } }}>
            <Stack spacing={1.5}>
              {status && <Alert severity={status.type}>{status.text}</Alert>}

              <Box component="form" noValidate id="contactForm" onSubmit={sendEmail}>
                <CustomTextField
                  margin="dense"
                  required
                  fullWidth
                  id="user_name"
                  label="Name"
                  name="user_name"
                  autoComplete="name"
                  error={Boolean(errors.user_name)}
                  helperText={errors.user_name || " "}
                  onBlur={validate}
                />
                <CustomTextField
                  margin="dense"
                  required
                  fullWidth
                  id="user_email"
                  label="Email Address"
                  name="user_email"
                  autoComplete="email"
                  error={Boolean(errors.user_email)}
                  helperText={errors.user_email || " "}
                  onBlur={validate}
                />
                <CustomTextField
                  margin="dense"
                  required
                  fullWidth
                  id="message"
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  error={Boolean(errors.message)}
                  helperText={errors.message || " "}
                  onBlur={validate}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSending}
                  sx={{ mt: 1.25, fontWeight: 900 }}
                >
                  {isSending ? "Sending..." : "Send message"}
                </Button>
              </Box>

              <Divider sx={{ my: 1.5, borderColor: "rgba(255,255,255,0.12)" }} />

              <Typography sx={{ color: "var(--brandPrimary)", fontWeight: 900 }}>
                WhatsApp
              </Typography>

              <Stack spacing={1}>
                {whatsappContacts.map((c) => (
                  <Button
                    key={c.number}
                    fullWidth
                    variant="outlined"
                    startIcon={<WhatsAppIcon />}
                    component="a"
                    href={toWhatsAppLink(c.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      justifyContent: "flex-start",
                      borderColor: "rgba(255,255,255,0.14)",
                      "&:hover": { borderColor: "rgba(255,255,255,0.25)" },
                    }}
                  >
                    {c.number}
                  </Button>
                ))}
                <Button
                  fullWidth
                  variant="text"
                  startIcon={<PhoneIcon />}
                  component="a"
                  href={`tel:${uaePhoneWhatsapp}`}
                  sx={{ justifyContent: "flex-start", color: "var(--mutedText)" }}
                >
                  Call: {uaePhoneWhatsapp}
                </Button>
              </Stack>
            </Stack>
          </GlassCard>
        </Stack>
      </PageSection>
    </Box>
  );
};
export default ContactMe;
