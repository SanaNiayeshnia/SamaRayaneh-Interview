"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { prefixer } from "stylis";
import { createTheme, ThemeProvider } from "@mui/material";

const MUITheme = createTheme({
  typography: {
    fontFamily: "var(--font-vazirmatn)",
  },
  palette: {
    primary: {
      main: "#0a768d",
      light: "#99d7e0",
      dark: "#064855",
      contrastText: "#fff",
    },
    secondary: {
      main: "#67b536",
      light: "#95d165",
      dark: "#447926",
      contrastText: "#000",
    },
  },
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function MUIThemeProvider({ children }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={MUITheme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}

export default MUIThemeProvider;
