import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00E5FF" }, // neon cyan
    secondary: { main: "#8B5CF6" }, // vivid purple
    background: {
      default: "#070A12",
      paper: "#0B1220",
    },
    text: {
      primary: "#EEF3FF",
      secondary: "rgba(238, 243, 255, 0.75)",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: ["Poppins", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"].join(","),
    h1: { fontWeight: 900, letterSpacing: -0.8 },
    h2: { fontWeight: 850, letterSpacing: -0.6 },
    h3: { fontWeight: 800, letterSpacing: -0.4 },
    h4: { fontWeight: 800, letterSpacing: -0.2 },
    h5: { fontWeight: 750 },
    h6: { fontWeight: 750 },
    button: { fontWeight: 800, textTransform: "none" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          colorScheme: "dark",
        },
        "::selection": {
          background: "rgba(0, 229, 255, 0.22)",
        },
        "a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, [tabindex]:focus-visible": {
          outline: "2px solid rgba(0, 229, 255, 0.8)",
          outlineOffset: 2,
          borderRadius: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
  },
});

