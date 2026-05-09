import React from "react";
import { Box, Typography } from "@mui/material";

export default function SectionHeader({ eyebrow, title, subtitle, align = "left", sx }) {
  return (
    <Box sx={{ textAlign: align, ...sx }}>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: "var(--mutedText)", letterSpacing: 2.2, opacity: 0.9 }}
        >
          {eyebrow}
        </Typography>
      )}
      {title && (
        <Typography
          variant="h3"
          sx={{
            color: "var(--brandPrimary)",
            fontWeight: 950,
            letterSpacing: -0.8,
            lineHeight: 1.1,
          }}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography sx={{ color: "var(--mutedText)", mt: 1, maxWidth: 820, mx: align === "center" ? "auto" : 0 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

