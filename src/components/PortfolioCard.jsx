import React from "react";
import { Box, Button, Card, CardActions, CardContent, Chip, Stack, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MediaEmbed from "./MediaEmbed";

export default function PortfolioCard({ item, onEdit, onDelete, showActions = false }) {
  if (!item) return null;

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
        backdropFilter: "blur(10px)",
        transition: "transform 140ms ease, border-color 140ms ease",
        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: "rgba(255,255,255,0.16)",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <MediaEmbed item={item} compact />
      </Box>

      <CardContent sx={{ pt: 0, flex: 1 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 1 }}>
          <Chip
            size="small"
            label={item.category}
            sx={{
              bgcolor: "rgba(34,146,164,0.18)",
              color: "var(--brandPrimary)",
              border: "1px solid rgba(34,146,164,0.35)",
            }}
          />
          {item.related && (
            <Chip
              size="small"
              variant="outlined"
              label={item.related}
              sx={{
                borderColor: "rgba(255,255,255,0.18)",
                color: "var(--bodyText)",
                opacity: 0.9,
              }}
            />
          )}
          {item.featured && (
            <Chip
              size="small"
              label="Featured"
              sx={{
                bgcolor: "rgba(217,108,6,0.22)",
                color: "var(--brandPrimary)",
                border: "1px solid rgba(217,108,6,0.35)",
              }}
            />
          )}
        </Stack>

        <Typography variant="h6" sx={{ color: "var(--brandPrimary)", mb: 0.5 }}>
          {item.title}
        </Typography>
        {item.description && (
          <Typography variant="body2" sx={{ color: "var(--bodyText)", opacity: 0.85 }}>
            {item.description}
          </Typography>
        )}
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
        <Button
          size="small"
          variant="outlined"
          endIcon={<OpenInNewIcon />}
          component="a"
          href={item.mediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderColor: "rgba(34,146,164,0.5)",
            color: "var(--brandPrimary)",
            "&:hover": { borderColor: "var(--brandSecondary)" },
          }}
        >
          Open
        </Button>

        <Box sx={{ flex: 1 }} />

        {showActions && (
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="text" onClick={() => onEdit?.(item)}>
              Edit
            </Button>
            <Button
              size="small"
              color="error"
              variant="text"
              onClick={() => onDelete?.(item)}
            >
              Delete
            </Button>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
}

