import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import Layout from "./Layout";
import { danceCategories } from "./data/danceCategories";

export default function Categories() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box padding={2}>
          <Typography
            gutterBottom
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", color: "#be8f2d" }}
          >
            TGA CATEGORIES
            <Typography fontWeight="bold" gutterBottom>
              These are the categories for TGA
            </Typography>
          </Typography>
          {danceCategories.map((item, index) => (
            <Box key={index}>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <StarIcon sx={{ color: "#be8f2d" }} />
                <Typography fontWeight="bold">{item}</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
            </Box>
          ))}
          <Typography
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              mt: 3,
              color: "#be8f2d",
            }}
          >
            Award of Recognition:
          </Typography>
          <Typography>
            This award is given to companies, Individuals and corporate
            organizations that have contributed immensely to the growth of the
            dance industry. Companies, individuals and corporate organizations
            that have a positive impact on Nigerian dancers and Africa continent
            at large. This award of recognition is awarded to them in gratitude
            and appreciation of their excellent innovative ideas.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
