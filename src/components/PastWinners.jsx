import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomizedTables from "./helpers/table";
import Layout from "./Layout";

export default function PastWinners() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box sx={{ p: 3 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", color: "#be8f2d" }}
          >
            PAST WINNERS
          </Typography>
          <Box>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#be8f2d",
              }}
            >
              The Grand Awards WINNERS (Maiden Edition) held in 2018
            </Typography>
            <CustomizedTables />
          </Box>
          <Box>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#be8f2d",
                mt: 3,
              }}
            >
              The Grand Battle WINNERS held in 2019
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
