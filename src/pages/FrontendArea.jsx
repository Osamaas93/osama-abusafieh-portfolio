import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { myExperience } from "../utls/myExperience";
import PageSection from "../components/ui/PageSection";
import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";

export default function FrontendArea() {
  const githubUrl = "https://github.com/Osamaas93";
  const data = myExperience.frontend;

  return (
    <Box sx={{ minHeight: "calc(100vh - 64px - 64px)" }}>
      <PageSection>
        <Stack spacing={3}>
          <SectionHeader
            eyebrow="Software Engineering"
            title="Front‑End Development"
            subtitle="React.js, JavaScript, UI/UX, responsive design, and product-ready interfaces."
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button
              component="a"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                bgcolor: "var(--brandSecondary)",
                color: "#05070b",
                fontWeight: 900,
                "&:hover": { bgcolor: "var(--brandSecondary)", filter: "brightness(1.05)" },
                alignSelf: { xs: "stretch", sm: "flex-start" },
              }}
            >
              View GitHub
            </Button>
          </Stack>

          <Box>
            <Typography sx={{ color: "var(--brandPrimary)", fontWeight: 900, mb: 1.5 }}>
              Experience
            </Typography>
            <Stack spacing={1.5}>
              {data.experience.map((exp, idx) => (
                <GlassCard key={`${exp.companyName}-${idx}`} sx={{ p: { xs: 2, md: 2.5 } }}>
                  <Typography sx={{ color: "var(--brandSecondary)", fontWeight: 900 }}>
                    {exp.jobTitle}
                  </Typography>
                  <Typography sx={{ color: "var(--brandPrimary)", fontWeight: 750 }}>
                    {exp.companyName}
                  </Typography>
                  <Typography sx={{ color: "var(--mutedText)", mb: 1 }}>
                    {exp.duration}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      pl: 2.2,
                      m: 0,
                      color: "var(--bodyText)",
                      lineHeight: 1.7,
                    }}
                  >
                    {exp.experiences.map((line, lineIdx) => (
                      <Box component="li" key={lineIdx} sx={{ mb: 0.75, opacity: 0.92 }}>
                        {line}
                      </Box>
                    ))}
                  </Box>
                </GlassCard>
              ))}
            </Stack>
          </Box>
        </Stack>
      </PageSection>
    </Box>
  );
}

