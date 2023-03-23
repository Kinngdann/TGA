import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function DesktopView() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography fontWeight="bold" variant="h6"> We're sorry 💔 </Typography>
        <Typography>
          You can only view this website on a mobile device for now.
        </Typography>
      </Box>
    </Box>
  );
}
