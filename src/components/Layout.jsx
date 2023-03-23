import Navigation from "./AppBar";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
// import { theme } from "./styles/theme";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";

export default function Layout({ children }) {
  const [mode, setMode] = useState(false);
  // console.log(window.screen.availWidth);

  function toggleMode() {
    setMode((state) => {
      return !state;
    });
  }

  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation toggleMode={toggleMode} mode={mode} />
        <Box component="main" sx={{ mt: 8 }}>
          {children}
        </Box>
        {window.location.pathname !== "/" && <Footer />}
      </ThemeProvider>
    </>
  );
}
