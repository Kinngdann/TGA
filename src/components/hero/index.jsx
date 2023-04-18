import HeroMobile from "./Mobile";
import HeroDesktop from "./Desktop";
import { Box } from "@mui/system";

export default function Index() {
  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <HeroMobile />
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <HeroDesktop />
      </Box>
    </>
  );
}
