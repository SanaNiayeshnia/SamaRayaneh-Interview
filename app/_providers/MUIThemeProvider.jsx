"use client";

import { createTheme, ThemeProvider } from "@mui/material";

const MUITheme = createTheme({
  typography: {
    fontFamily: "var(--font-vazirmatn)",
  },
  direction: "rtl",
});

function MUIThemeProvider({ children }) {
  return <ThemeProvider theme={MUITheme}>{children}</ThemeProvider>;
}

export default MUIThemeProvider;
