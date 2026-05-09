import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import PageSection from "../components/ui/PageSection";
import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";

export default function About() {
  return (
    <Box sx={{ minHeight: "calc(100vh - 64px - 64px)" }}>
      <PageSection>
        <Stack spacing={3}>
          <SectionHeader
            eyebrow="About"
            title="About me"
            subtitle="I blend creative production with technical execution — from music and AV operations to modern web interfaces."
          />

          <GlassCard sx={{ p: { xs: 2.5, md: 3 } }}>
            <Stack spacing={1.25}>
              <Typography sx={{ color: "var(--bodyText)", lineHeight: 1.8 }}>
                I’m Osama Abu Safiyeh — a music producer and software engineer with hands-on experience
                in live events, AV production, and professional audio work. I bring that same
                precision into front-end development: clean UI, responsive layouts, and reliable
                delivery.
              </Typography>
              <Typography sx={{ color: "var(--mutedText)", lineHeight: 1.8 }}>
                This portfolio is intentionally split into two paths. Choose the side you want to
                explore, and you’ll see focused work, tools, and experience for that discipline.
              </Typography>
            </Stack>
          </GlassCard>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 2,
            }}
          >
            <GlassCard sx={{ p: { xs: 2.5, md: 3 } }}>
              <Typography sx={{ color: "var(--brandPrimary)", fontWeight: 900, mb: 1 }}>
                Software Engineering
              </Typography>
              <Typography sx={{ color: "var(--mutedText)", lineHeight: 1.8 }}>
                I build modern, responsive front-ends with React and a strong attention to UX. I
                care about clarity, maintainability, accessibility, and shipping polished UI.
              </Typography>
            </GlassCard>

            <GlassCard sx={{ p: { xs: 2.5, md: 3 } }}>
              <Typography sx={{ color: "var(--brandPrimary)", fontWeight: 900, mb: 1 }}>
                Music / Audio Production
              </Typography>
              <Typography sx={{ color: "var(--mutedText)", lineHeight: 1.8 }}>
                From composition and sound design to mixing/mastering and event execution — I create
                audio that supports stories, brands, and live moments.
              </Typography>
            </GlassCard>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button variant="outlined" component={Link} to="/">
              Back to Home
            </Button>
            <Button variant="contained" component={Link} to="/contact-me">
              Contact me
            </Button>
          </Stack>
        </Stack>
      </PageSection>
    </Box>
  );
}

