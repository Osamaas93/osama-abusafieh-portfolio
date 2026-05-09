import React, { useMemo, useState } from "react";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import usePortfolioItems from "../hooks/usePortfolioItems";
import PortfolioCard from "../components/PortfolioCard";

export default function MusicArea() {
  const { items } = usePortfolioItems();
  const [filter, setFilter] = useState("All"); // All | YouTube | SoundCloud

  const musicItems = useMemo(() => {
    return items.filter(
      (x) =>
        x.related === "Music Production" ||
        x.category === "Music Production" ||
        x.category === "Audio Production"
    );
  }, [items]);

  const filtered = useMemo(() => {
    if (filter === "All") return musicItems;
    return musicItems.filter((x) => x.mediaType === filter);
  }, [musicItems, filter]);

  return (
    <Box sx={{ py: 6, minHeight: "calc(100vh - 64px - 64px)" }}>
      <Container>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h4" sx={{ color: "var(--brandPrimary)", fontWeight: 900 }}>
              Music Production / Audio
            </Typography>
            <Typography sx={{ color: "var(--mutedText)", maxWidth: 760 }}>
              Composition, mixing/mastering, sound design, live events, and AV production work.
            </Typography>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button component={Link} to="/music/experience" variant="contained">
              Experience & Skills
            </Button>
          </Stack>

          <Box sx={{ mt: 2 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              alignItems={{ xs: "stretch", sm: "center" }}
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Typography sx={{ color: "var(--brandPrimary)", fontWeight: 800, mb: 1 }}>
                Featured work
              </Typography>
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
      </Container>
    </Box>
  );
}

