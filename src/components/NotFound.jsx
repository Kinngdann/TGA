import { Box, Button, Typography } from "@mui/material";
import Layout from "./Layout";
import img from "./images/404.jpeg";

export default function NotFound() {
  return (
    <Layout>
      <Box
        sx={{
          // height: "100vh",
          gap: 2,
          display: "flex",
          flexDirection: "column",
          // flexFlow: "1",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={img} alt="404 error illustration" width="200" />
          <Typography>uh-oh! Nothing here...</Typography>
        </Box>
        <Button sx={{ fontWeight: "bold" }} variant="contained" href="/">
          GO BACK HOME
        </Button>
      </Box>
    </Layout>
  );
}
