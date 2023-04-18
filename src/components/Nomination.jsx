import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Layout from "./Layout";

export default function Nomination() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box padding={2}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", color: "#be8f2d" }}
          >
            THE GRAND AWARDS
          </Typography>
          <Typography
            gutterBottom
            sx={{ fontWeight: "bold", color: "#be8f2d" }}
          >
            TGA's NOMINATION CRITERIA:
          </Typography>
          <Typography>
            The Grand Awards is a platform to Award, recognize and Empower
            hardworking, talented and consistent dancers in Nigeria. Nomination
            Criteria for The Grand Awards are:
          </Typography>
          <ol>
            <li>Nominees must reside in Nigeria</li>
            <li>Nominee must be creative and outstanding</li>
            <li>
              Nominee must have their videos or contents on social media
              (Youtube, Instagram, or any other social network)
            </li>
            <li>Nominee must have a drive or passion towards Dance.</li>
          </ol>
          <Typography
            gutterBottom
            sx={{ fontWeight: "bold", color: "#be8f2d" }}
          >
            Please Note:
          </Typography>
          <Typography>
            This Nomination is open to those who are worthy of honor &
            recognized in the various listed categories. Anyone can be nominated
            so long as he/she satisfies the criteria above. Take note of the
            following:
          </Typography>
          <ol>
            <li>TGA Nomination is very credible. NO PREFERENCE OR INJUSTICE</li>
            <li>We look out for Creativity and Versatility</li>
          </ol>
          <Typography fontWeight="bold" gutterBottom>
            NOMINATION OPENING SOON!!! <br /> Stay tuned**
          </Typography>
          <Typography>
            For More information about this nomination, clarification,
            sponsorship, kindly{" "}
            <a
              style={{ fontWeight: "bold", textDecoration: "none" }}
              href="/contact"
            >
              {" "}
              contact us
            </a>
            .
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
