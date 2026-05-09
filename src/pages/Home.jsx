import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ChoiceCard({ title, description, to, accent, imageSrc, imageAlt }) {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: 4,
        border: "1px solid var(--stroke)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        boxShadow: "0 20px 70px rgba(0,0,0,0.45)",
      }}
    >
      {imageSrc && (
        <Box
          sx={{
            width: "100%",
            height: { xs: 140, md: 160 },
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={imageSrc}
            alt={imageAlt || title}
            sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Box>
      )}
      <Typography variant="h5" sx={{ color: "var(--brandPrimary)", fontWeight: 900 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "var(--mutedText)", mt: 1, mb: 2 }}>
        {description}
      </Typography>
      <Button
        component={Link}
        to={to}
        variant="contained"
        sx={{
          bgcolor: accent,
          color: "#05070b",
          fontWeight: 900,
          "&:hover": { bgcolor: accent, filter: "brightness(1.05)" },
        }}
      >
        Enter
      </Button>
    </Box>
  );
}

export default function Home() {
  return (
    <Box sx={{ py: { xs: 6, md: 9 }, minHeight: "calc(100vh - 64px - 64px)" }}>
      <Container>
        <Stack spacing={4}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                color: "var(--brandPrimary)",
                fontWeight: 950,
                letterSpacing: -1,
                lineHeight: 1.05,
              }}
            >
              Osama Abu Safiyeh
            </Typography>
            <Typography sx={{ color: "var(--mutedText)", maxWidth: 760, mt: 1.5 }}>
              One personal brand with two professional paths: Music Production and Software
              Engineering. Choose where you want to explore.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 2,
            }}
          >
            <ChoiceCard
              title="Music Production / Audio"
              description="Composition, mixing/mastering, sound design, and media production work."
              to="/music"
              accent="var(--accentPurple)"
              imageSrc={`${process.env.PUBLIC_URL}/assets/music-img.png`}
              imageAlt="Music Production"
            />
            <ChoiceCard
              title="Software Engineering"
              description="React, UI engineering, responsive systems, clean UX, and modern web tools."
              to="/frontend"
              accent="var(--brandSecondary)"
              imageSrc={`${process.env.PUBLIC_URL}/assets/frontend-img.png`}
              imageAlt="Software Engineering"
            />
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button component={Link} to="/portfolio" variant="outlined">
              View all portfolio
            </Button>
            <Button component={Link} to="/contact-me" variant="text">
              Contact
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

