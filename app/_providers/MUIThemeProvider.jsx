"use client";

import { createTheme, ThemeProvider } from "@mui/material";

const MUITheme = createTheme({
  typography: {
    fontFamily: "var(--font-vazirmatn)",
  },
  palette: {
    primary: {
      main: "#0a768d",
      light: " #99d7e0",
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

function MUIThemeProvider({ children }) {
  return <ThemeProvider theme={MUITheme}>{children}</ThemeProvider>;
}

export default MUIThemeProvider;
