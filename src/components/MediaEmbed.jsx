import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { getSoundCloudEmbedUrl, getYouTubeEmbedUrl } from "../utils/mediaUtils";

const frameStyle = {
  width: "100%",
  border: 0,
  borderRadius: 12,
  background: "rgba(255,255,255,0.04)",
};

export default function MediaEmbed({ item, compact = false }) {
  const mediaType = item?.mediaType;
  const mediaUrl = item?.mediaUrl;

  if (!mediaType || !mediaUrl) return null;

  const youtubeEmbed = mediaType === "YouTube" ? getYouTubeEmbedUrl(mediaUrl) : null;
  const soundcloudEmbed =
    mediaType === "SoundCloud" ? getSoundCloudEmbedUrl(mediaUrl) : null;

  return (
    <Box>
      {(youtubeEmbed || soundcloudEmbed) && (
        <Box sx={{ overflow: "hidden" }}>
          {youtubeEmbed && (
            <iframe
              title={item?.title || "YouTube embed"}
              src={youtubeEmbed}
              style={frameStyle}
              height={compact ? 220 : 360}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
          {soundcloudEmbed && (
            <iframe
              title={item?.title || "SoundCloud embed"}
              src={soundcloudEmbed}
              style={frameStyle}
              height={compact ? 140 : 180}
              allow="autoplay"
            />
          )}
        </Box>
      )}

      {mediaType === "Image" && (
        <Box
          component="img"
          src={item?.thumbnailUrl || mediaUrl}
          alt={item?.title || "Portfolio image"}
          sx={{
            width: "100%",
            height: compact ? 220 : 360,
            objectFit: "cover",
            borderRadius: 2,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      )}

      {!youtubeEmbed && !soundcloudEmbed && mediaType !== "Image" && (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent="space-between"
          sx={{
            p: 2,
            borderRadius: 2,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="subtitle2" sx={{ color: "var(--brandSecondary)" }}>
              {mediaType}
            </Typography>
            <Typography variant="body2" sx={{ color: "var(--bodyText)", opacity: 0.85 }}>
              External media link
            </Typography>
          </Box>
          <Button
            variant="outlined"
            endIcon={<OpenInNewIcon />}
            component="a"
            href={mediaUrl}
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
        </Stack>
      )}
    </Box>
  );
}

