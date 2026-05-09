import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import usePortfolioItems from "../hooks/usePortfolioItems";
import PortfolioCard from "../components/PortfolioCard";

const filterFromLegacyParam = (id) => {
  if (id === "frontend") return "Front-End Development";
  if (id === "music") return "Music Production";
  return "All";
};

const unique = (arr) => [...new Set(arr)].filter(Boolean);

const Portfolio = ({ initialCategory = "All", lockCategory = false }) => {
  const { id } = useParams();
  const { items } = usePortfolioItems();

  const [activeCategory, setActiveCategory] = useState(() => {
    if (id) return filterFromLegacyParam(id);
    return initialCategory || "All";
  });

  useEffect(() => {
    if (!id) return;
    setActiveCategory(filterFromLegacyParam(id));
  }, [id]);

  const categories = useMemo(() => {
    return ["All", ...unique(items.map((x) => x.category))];
  }, [items]);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return items;
    return items.filter((x) => x.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <Box sx={{ py: 6, minHeight: "calc(100vh - 64px - 64px)" }}>
      <Container>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h4" sx={{ color: "var(--brandPrimary)", fontWeight: 800 }}>
              Portfolio
            </Typography>
            <Typography sx={{ color: "var(--bodyText)", opacity: 0.8 }}>
              Filter by category, open embeds, and explore projects across both paths.
            </Typography>
          </Box>

          {!lockCategory && (
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {categories.map((c) => (
                <Chip
                  key={c}
                  clickable
                  label={c}
                  onClick={() => setActiveCategory(c)}
                  sx={{
                    color: "var(--brandPrimary)",
                    bgcolor:
                      activeCategory === c
                        ? "rgba(0,229,255,0.16)"
                        : "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    "&:hover": { bgcolor: "rgba(0,229,255,0.12)" },
                  }}
                />
              ))}
            </Stack>
          )}

          {filtered.length === 0 ? (
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <Typography sx={{ color: "var(--bodyText)", opacity: 0.85 }}>
                No items found for this category yet. Add content from the Admin page.
              </Typography>
              <Button component={Link} to="/admin" sx={{ mt: 1 }}>
                Go to Admin
              </Button>
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
        </Stack>
      </Container>
    </Box>
  );
};

export default Portfolio;
