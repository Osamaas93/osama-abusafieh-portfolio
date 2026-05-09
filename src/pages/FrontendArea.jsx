import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { myExperience } from "../utls/myExperience";

export default function FrontendArea() {
  const githubUrl = "https://github.com/Osamaas93";
  const data = myExperience.frontend;

  return (
    <Box sx={{ py: 6, minHeight: "calc(100vh - 64px - 64px)" }}>
      <Container>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" sx={{ color: "var(--brandPrimary)", fontWeight: 900 }}>
              Front-End Development
            </Typography>
            <Typography sx={{ color: "var(--mutedText)", maxWidth: 760 }}>
              React.js, JavaScript, UI/UX, responsive design, and product-ready interfaces.
            </Typography>
          </Box>

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
              }}
            >
              GitHub (portfolio)
            </Button>
          </Stack>

          <Box>
            <Typography sx={{ color: "var(--brandPrimary)", fontWeight: 900, mb: 1.5 }}>
              Experience
            </Typography>
            <Stack spacing={1.5}>
              {data.experience.map((exp, idx) => (
                <Box
                  key={`${exp.companyName}-${idx}`}
                  sx={{
                    p: { xs: 2, md: 2.5 },
                    borderRadius: 3,
                    border: "1px solid var(--stroke)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  }}
                >
                  <Typography sx={{ color: "var(--brandSecondary)", fontWeight: 900 }}>
                    {exp.jobTitle}
                  </Typography>
                  <Typography sx={{ color: "var(--brandPrimary)", fontWeight: 700 }}>
                    {exp.companyName}
                  </Typography>
                  <Typography sx={{ color: "var(--mutedText)", mb: 1 }}>
                    {exp.duration}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2.2, m: 0, color: "var(--bodyText)" }}>
                    {exp.experiences.map((line, lineIdx) => (
                      <Box component="li" key={lineIdx} sx={{ mb: 0.5, opacity: 0.9 }}>
                        {line}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

