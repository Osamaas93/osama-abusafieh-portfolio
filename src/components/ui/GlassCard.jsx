import React from "react";
import { Box } from "@mui/material";

export default function GlassCard({ children, sx, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        borderRadius: 4,
        border: "1px solid var(--stroke)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
        boxShadow: "0 24px 90px rgba(0,0,0,0.45)",
        backdropFilter: "blur(10px)",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

