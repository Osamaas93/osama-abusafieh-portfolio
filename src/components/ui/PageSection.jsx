import React from "react";
import { Box, Container } from "@mui/material";

export default function PageSection({ children, maxWidth = "lg", sx }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 7 },
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
}

