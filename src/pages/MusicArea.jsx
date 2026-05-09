import React, { useMemo, useState } from "react";
import { Box, Button, Chip, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import usePortfolioItems from "../hooks/usePortfolioItems";
import PortfolioCard from "../components/PortfolioCard";
import PageSection from "../components/ui/PageSection";
import SectionHeader from "../components/ui/SectionHeader";

export default function MusicArea() {
  const { items } = usePortfolioItems();
  const [filter, setFilter] = useState("All"); // All | YouTube | SoundCloud
  const [sort, setSort] = useState("featured"); // featured | newest

  const musicItems = useMemo(() => {
    return items.filter(
      (x) =>
        x.related === "Music Production" ||
        x.category === "Music Production" ||
        x.category === "Audio Production"
    );
  }, [items]);

  const filtered = useMemo(() => {
    const byType = filter === "All" ? musicItems : musicItems.filter((x) => x.mediaType === filter);
    const sorted = [...byType].sort((a, b) => {
      if (sort === "featured") {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
      }
      return (b.updatedAt || "").localeCompare(a.updatedAt || "");
    });
    return sorted;
  }, [musicItems, filter, sort]);

  return (
    <Box sx={{ minHeight: "calc(100vh - 64px - 64px)" }}>
      <PageSection>
        <Stack spacing={3}>
          <SectionHeader
            eyebrow="Music Production"
            title="Music / Audio"
            subtitle="Composition, mixing/mastering, sound design, and production work."
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button component={Link} to="/music/experience" variant="contained">
              Experience & Skills
            </Button>
          </Stack>

          <Box sx={{ mt: 1 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              alignItems={{ xs: "stretch", sm: "center" }}
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ color: "var(--brandPrimary)", fontWeight: 900 }}>
                  Featured work
                </Typography>
                <Typography sx={{ color: "var(--mutedText)", fontSize: 13 }}>
                  {filtered.length} item{filtered.length === 1 ? "" : "s"}
                </Typography>
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1} alignItems="center">
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {["All", "YouTube", "SoundCloud"].map((t) => (
                    <Chip
                      key={t}
                      clickable
                      label={t}
                      onClick={() => setFilter(t)}
                      sx={{
                        color: "var(--brandPrimary)",
                        bgcolor:
                          filter === t ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        "&:hover": { bgcolor: "rgba(139,92,246,0.14)" },
                      }}
                    />
                  ))}
                </Stack>

                <TextField
                  select
                  size="small"
                  label="Sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  sx={{ minWidth: 150 }}
                >
                  <MenuItem value="featured">Featured first</MenuItem>
                  <MenuItem value="newest">Newest first</MenuItem>
                </TextField>
              </Stack>
            </Stack>

            {filtered.length === 0 ? (
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid var(--stroke)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <Typography sx={{ color: "var(--mutedText)" }}>
                  No items yet for this filter. Add them from the Admin page.
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 2,
                }}
              >
                {filtered.map((item) => (
                  <PortfolioCard key={item.id} item={item} />
                ))}
              </Box>
            )}
          </Box>
        </Stack>
      </PageSection>
    </Box>
  );
}

