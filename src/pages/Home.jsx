import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PageSection from "../components/ui/PageSection";
import GlassCard from "../components/ui/GlassCard";

function ChoiceCard({ title, description, to, accent, imageSrc, imageAlt }) {
  return (
    <GlassCard
      sx={{
        p: { xs: 2.5, md: 3 },
        transition: "transform 140ms ease, border-color 140ms ease, background 140ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "rgba(255,255,255,0.20)",
        },
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
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.55))`,
              pointerEvents: "none",
            }}
          />
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
    </GlassCard>
  );
}

export default function Home() {
  return (
    <Box sx={{ minHeight: "calc(100vh - 64px - 64px)" }}>
      <PageSection
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 4, md: 7 },
        }}
      >
        <Stack spacing={4.5}>
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
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} sx={{ mt: 2.5 }}>
              <Button
                component={Link}
                to="/portfolio"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.16)",
                  "&:hover": { borderColor: "rgba(255,255,255,0.28)" },
                }}
              >
                Explore music portfolio
              </Button>
              <Button component={Link} to="/about" variant="text" sx={{ color: "var(--brandPrimary)" }}>
                About
              </Button>
              <Button component={Link} to="/contact-me" variant="text" sx={{ color: "var(--brandPrimary)" }}>
                Contact
              </Button>
            </Stack>
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
        </Stack>
      </PageSection>
    </Box>
  );
}

