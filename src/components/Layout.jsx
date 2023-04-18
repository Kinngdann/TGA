import Navigation from "./AppBar";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { theme } from "./styles/theme";

export default function Layout({ children }) {
  const home = window.location.pathname === "/";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Box
        component="main"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            mt: 8,
          },
          [theme.breakpoints.up("sm")]: {
            mt: home ? 0 : 8,
          },
        })}
      >
        {children}
      </Box>
      {!home && <Footer />}
    </ThemeProvider>
  );
}
