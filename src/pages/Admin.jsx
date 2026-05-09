import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import AdminPortfolioForm from "../components/AdminPortfolioForm";
import PortfolioCard from "../components/PortfolioCard";
import usePortfolioItems from "../hooks/usePortfolioItems";
import {
  deletePortfolioItem,
  exportPortfolioJson,
  importPortfolioJson,
  upsertPortfolioItem,
} from "../utils/portfolioStorage";
import { setAdminAuthed } from "../utils/adminAuth";

/**
 * Admin panel (content editor).
 *
 * Current storage:
 * - localStorage via `portfolioStorage.js`
 *
 * Backend upgrade path:
 * - Replace portfolioStorage calls with API calls (and keep the same UI):
 *   - GET    /api/portfolio-items
 *   - POST   /api/portfolio-items
 *   - PUT    /api/portfolio-items/:id
 *   - DELETE /api/portfolio-items/:id
 * - Keep the same item shape (id/title/category/related/mediaType/mediaUrl/etc.) to minimize UI changes.
 *
 * Security note:
 * - The backend must enforce auth/authorization on these endpoints.
 * - The route guard (`AdminRoute`) is only UX; it is not security.
 */
export default function Admin() {
  const navigate = useNavigate();
  const { items, refresh } = usePortfolioItems();
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [importText, setImportText] = useState("");
  const [message, setMessage] = useState(null); // { type, text }

  const sorted = useMemo(() => {
    return [...items].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
  }, [items]);

  const onSave = (item) => {
    upsertPortfolioItem(item);
    refresh();
    setEditing(null);
    setShowForm(false);
    setMessage({ type: "success", text: "Saved." });
  };

  const onDelete = (item) => {
    if (!window.confirm(`Delete "${item.title}"?`)) return;
    deletePortfolioItem(item.id);
    refresh();
    setMessage({ type: "success", text: "Deleted." });
  };

  const handleExportDownload = () => {
    const json = exportPortfolioJson();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-items.json";
    a.click();
    URL.revokeObjectURL(url);
    setMessage({ type: "info", text: "Downloaded portfolio-items.json" });
  };

  const handleExportCopy = async () => {
    const json = exportPortfolioJson();
    await navigator.clipboard.writeText(json);
    setMessage({ type: "info", text: "Copied JSON to clipboard." });
  };

  const handleImport = () => {
    try {
      importPortfolioJson(importText);
      refresh();
      setImportText("");
      setMessage({ type: "success", text: "Imported successfully." });
    } catch (e) {
      setMessage({ type: "error", text: e?.message || "Import failed." });
    }
  };

  return (
    <Box sx={{ py: 6, minHeight: "calc(100vh - 64px - 64px)" }}>
      <Container>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h4" sx={{ color: "var(--brandPrimary)", fontWeight: 800 }}>
              Admin
            </Typography>
            <Typography sx={{ color: "var(--bodyText)", opacity: 0.8 }}>
              Manage portfolio content stored in localStorage (no backend).
            </Typography>
          </Box>

          {message && (
            <Alert severity={message.type} onClose={() => setMessage(null)}>
              {message.text}
            </Alert>
          )}

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              onClick={() => {
                setEditing(null);
                setShowForm(true);
              }}
              sx={{
                bgcolor: "var(--brandSecondary)",
                color: "#0b0b0b",
                fontWeight: 800,
                "&:hover": { bgcolor: "#1a7f8d" },
              }}
            >
              Add item
            </Button>

            <Button startIcon={<DownloadIcon />} variant="outlined" onClick={handleExportDownload}>
              Export JSON
            </Button>
            <Button startIcon={<ContentCopyIcon />} variant="outlined" onClick={handleExportCopy}>
              Copy JSON
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => {
                setAdminAuthed(false);
                navigate("/admin", { replace: true });
              }}
            >
              Logout
            </Button>
          </Stack>

          {(showForm || editing) && (
            <AdminPortfolioForm
              initialItem={editing}
              onSave={onSave}
              onCancel={() => {
                setEditing(null);
                setShowForm(false);
              }}
            />
          )}

          <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />

          <Box>
            <Typography variant="h6" sx={{ color: "var(--brandPrimary)", mb: 1 }}>
              Import JSON
            </Typography>
            <Stack spacing={1}>
              <TextField
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder="Paste exported JSON array here..."
                multiline
                minRows={5}
                fullWidth
              />
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                <Button
                  startIcon={<UploadFileIcon />}
                  variant="outlined"
                  onClick={handleImport}
                  disabled={!importText.trim()}
                >
                  Import (replace)
                </Button>
              </Stack>
            </Stack>
          </Box>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />

          <Box>
            <Typography variant="h6" sx={{ color: "var(--brandPrimary)", mb: 2 }}>
              Items ({sorted.length})
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                },
                gap: 2,
              }}
            >
              {sorted.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  showActions
                  onEdit={(it) => {
                    setEditing(it);
                    setShowForm(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  onDelete={onDelete}
                />
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

