import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { getAdminPassword, setAdminAuthed, setAdminPassword } from "../utils/adminAuth";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const existingPassword = useMemo(() => getAdminPassword(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // First-time setup: if no password exists, store it.
    // This is NOT secure (frontend-only). It's only for personal/local use.
    if (!existingPassword) {
      if (password.trim().length < 6) {
        setError("Choose a password with at least 6 characters.");
        return;
      }
      setAdminPassword(password.trim());
      setAdminAuthed(true);
      navigate("/admin/panel", { replace: true });
      return;
    }

    if (password === existingPassword) {
      setAdminAuthed(true);
      const to = location?.state?.from || "/admin/panel";
      navigate(to, { replace: true });
    } else {
      setError("Wrong password.");
      setAdminAuthed(false);
    }
  };

  return (
    <Box sx={{ py: 8, minHeight: "calc(100vh - 64px - 64px)" }}>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <LockIcon sx={{ color: "var(--brandSecondary)" }} />
            <Typography variant="h4" sx={{ color: "var(--brandPrimary)", fontWeight: 900 }}>
              Admin Login
            </Typography>
          </Stack>

          <Alert severity="warning">
            This login is frontend-only (localStorage). It deters casual access but is not real
            security. We can add proper authentication later.
          </Alert>

          {error && <Alert severity="error">{error}</Alert>}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 3,
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <Stack spacing={2}>
              <Typography sx={{ color: "var(--bodyText)", opacity: 0.85 }}>
                {existingPassword
                  ? "Enter your admin password."
                  : "First-time setup: create an admin password."}
              </Typography>

              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "var(--brandSecondary)",
                  color: "#0b0b0b",
                  fontWeight: 900,
                  "&:hover": { bgcolor: "#1a7f8d" },
                }}
              >
                Continue
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

