// export { default } from "./Router";
import Router from "./Router";
import DesktopView from "./components/DesktopView";
import { Box } from "@mui/system";

export default function App() {
  const width = window.screen.availWidth;

  return (
    <Box>
      {width <= 400 && <Router />}
      {width >= 400 && <DesktopView />}
    </Box>
  );
}
