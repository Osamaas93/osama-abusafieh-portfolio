import { useEffect, useMemo, useState } from "react";
import {
  loadPortfolioItems,
  PORTFOLIO_STORAGE_KEY,
  PORTFOLIO_UPDATED_EVENT,
} from "../utils/portfolioStorage";

export default function usePortfolioItems() {
  const [items, setItems] = useState(() => loadPortfolioItems());

  useEffect(() => {
    const refresh = () => setItems(loadPortfolioItems());

    const onStorage = (e) => {
      if (e.key === PORTFOLIO_STORAGE_KEY) refresh();
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener(PORTFOLIO_UPDATED_EVENT, refresh);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(PORTFOLIO_UPDATED_EVENT, refresh);
    };
  }, []);

  const featured = useMemo(() => items.filter((x) => x.featured), [items]);

  return { items, setItems, featured, refresh: () => setItems(loadPortfolioItems()) };
}

