import { defaultPortfolioItems } from "../data/defaultPortfolio";

export const PORTFOLIO_STORAGE_KEY = "osama_portfolio_items_v1";
export const PORTFOLIO_UPDATED_EVENT = "portfolio:updated";

function safeJsonParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function notifyUpdated() {
  try {
    window.dispatchEvent(new Event(PORTFOLIO_UPDATED_EVENT));
  } catch {
    // ignore
  }
}

export function normalizePortfolioItem(item) {
  const now = new Date().toISOString();
  const id = String(item?.id || `p-${Math.random().toString(16).slice(2)}-${Date.now()}`);
  return {
    id,
    title: String(item?.title || "").trim(),
    category: String(item?.category || "Other").trim(),
    related: String(item?.related || "General").trim(),
    description: String(item?.description || "").trim(),
    mediaType: String(item?.mediaType || "Other").trim(),
    mediaUrl: String(item?.mediaUrl || "").trim(),
    thumbnailUrl: String(item?.thumbnailUrl || "").trim(),
    featured: Boolean(item?.featured),
    createdAt: item?.createdAt || now,
    updatedAt: now,
  };
}

export function validatePortfolioItem(item) {
  const errors = {};
  if (!item.title?.trim()) errors.title = "Title is required.";
  if (!item.category?.trim()) errors.category = "Category is required.";
  if (!item.related?.trim()) errors.related = "Related page/profession is required.";
  if (!item.mediaType?.trim()) errors.mediaType = "Media type is required.";
  if (!item.mediaUrl?.trim()) errors.mediaUrl = "Media URL is required.";
  return errors;
}

export function loadPortfolioItems() {
  const raw = localStorage.getItem(PORTFOLIO_STORAGE_KEY);
  if (!raw) return defaultPortfolioItems.map(normalizePortfolioItem);

  const parsed = safeJsonParse(raw, null);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    return defaultPortfolioItems.map(normalizePortfolioItem);
  }
  return parsed.map(normalizePortfolioItem);
}

export function savePortfolioItems(items) {
  localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(items));
  notifyUpdated();
}

export function upsertPortfolioItem(item) {
  const items = loadPortfolioItems();
  const normalized = normalizePortfolioItem(item);
  const idx = items.findIndex((x) => x.id === normalized.id);
  if (idx >= 0) {
    const createdAt = items[idx]?.createdAt || normalized.createdAt;
    items[idx] = { ...normalized, createdAt };
  } else {
    items.unshift(normalized);
  }
  savePortfolioItems(items);
  return items;
}

export function deletePortfolioItem(id) {
  const items = loadPortfolioItems().filter((x) => x.id !== id);
  savePortfolioItems(items);
  return items;
}

export function exportPortfolioJson() {
  return JSON.stringify(loadPortfolioItems(), null, 2);
}

export function importPortfolioJson(jsonString) {
  const parsed = safeJsonParse(jsonString, null);
  if (!Array.isArray(parsed)) {
    throw new Error("Invalid JSON: expected an array of portfolio items.");
  }
  const normalized = parsed.map(normalizePortfolioItem);
  savePortfolioItems(normalized);
  return normalized;
}

