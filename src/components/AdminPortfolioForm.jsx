import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import { MEDIA_TYPES, PORTFOLIO_CATEGORIES, PORTFOLIO_RELATED } from "../data/defaultPortfolio";
import MediaEmbed from "./MediaEmbed";
import { guessMediaTypeFromUrl } from "../utils/mediaUtils";
import { normalizePortfolioItem, validatePortfolioItem } from "../utils/portfolioStorage";

const emptyDraft = {
  id: "",
  title: "",
  category: "Front-End Development",
  related: "Front-End Development",
  description: "",
  mediaType: "YouTube",
  mediaUrl: "",
  thumbnailUrl: "",
  featured: false,
};

export default function AdminPortfolioForm({ initialItem, onSave, onCancel }) {
  const [draft, setDraft] = useState(emptyDraft);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (initialItem) setDraft({ ...emptyDraft, ...initialItem });
    else setDraft(emptyDraft);
    setTouched({});
  }, [initialItem]);

  const normalized = useMemo(() => normalizePortfolioItem(draft), [draft]);
  const errors = useMemo(() => validatePortfolioItem(normalized), [normalized]);
  const hasErrors = Object.keys(errors).length > 0;

  const setField = (key, value) => {
    setDraft((d) => ({ ...d, [key]: value }));
  };

  const handleSave = () => {
    setTouched({
      title: true,
      category: true,
      related: true,
      mediaType: true,
      mediaUrl: true,
    });
    if (hasErrors) return;
    onSave?.(normalized);
  };

  const handleGuessType = () => {
    const guessed = guessMediaTypeFromUrl(draft.mediaUrl);
    setField("mediaType", guessed);
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <Stack spacing={2}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1} alignItems="center">
          <Typography variant="h6" sx={{ color: "var(--brandPrimary)", flex: 1 }}>
            {initialItem ? "Edit portfolio item" : "Add new portfolio item"}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={handleGuessType}
            sx={{
              borderColor: "rgba(34,146,164,0.5)",
              color: "var(--brandPrimary)",
              "&:hover": { borderColor: "var(--brandSecondary)" },
            }}
          >
            Guess type from URL
          </Button>
        </Stack>

        <TextField
          label="Title"
          value={draft.title}
          onChange={(e) => setField("title", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, title: true }))}
          error={Boolean(touched.title && errors.title)}
          helperText={touched.title && errors.title ? errors.title : " "}
          fullWidth
        />

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <FormControl fullWidth error={Boolean(touched.category && errors.category)}>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              value={draft.category}
              onChange={(e) => setField("category", e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, category: true }))}
            >
              {PORTFOLIO_CATEGORIES.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth error={Boolean(touched.related && errors.related)}>
            <InputLabel>Related</InputLabel>
            <Select
              label="Related"
              value={draft.related}
              onChange={(e) => setField("related", e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, related: true }))}
            >
              {PORTFOLIO_RELATED.map((r) => (
                <MenuItem key={r} value={r}>
                  {r}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        <TextField
          label="Description"
          value={draft.description}
          onChange={(e) => setField("description", e.target.value)}
          fullWidth
          multiline
          minRows={3}
        />

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <FormControl fullWidth error={Boolean(touched.mediaType && errors.mediaType)}>
            <InputLabel>Media type</InputLabel>
            <Select
              label="Media type"
              value={draft.mediaType}
              onChange={(e) => setField("mediaType", e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, mediaType: true }))}
            >
              {MEDIA_TYPES.map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Media URL"
            value={draft.mediaUrl}
            onChange={(e) => setField("mediaUrl", e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, mediaUrl: true }))}
            error={Boolean(touched.mediaUrl && errors.mediaUrl)}
            helperText={touched.mediaUrl && errors.mediaUrl ? errors.mediaUrl : " "}
            fullWidth
          />
        </Stack>

        <TextField
          label="Thumbnail URL (optional)"
          value={draft.thumbnailUrl}
          onChange={(e) => setField("thumbnailUrl", e.target.value)}
          fullWidth
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={draft.featured}
              onChange={(e) => setField("featured", e.target.checked)}
            />
          }
          label="Featured (show on Home page)"
        />

        <Box>
          <Typography variant="subtitle2" sx={{ color: "var(--bodyText)", opacity: 0.85, mb: 1 }}>
            Preview
          </Typography>
          <MediaEmbed item={normalized} />
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1} justifyContent="flex-end">
          <Button
            variant="text"
            startIcon={<ClearIcon />}
            onClick={() => onCancel?.()}
            sx={{ color: "var(--bodyText)", opacity: 0.9 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handleSave}
            disabled={hasErrors}
            sx={{
              bgcolor: "var(--brandSecondary)",
              color: "#0b0b0b",
              fontWeight: 700,
              "&:hover": { bgcolor: "#1a7f8d" },
            }}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

