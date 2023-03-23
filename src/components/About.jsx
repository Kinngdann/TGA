import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Layout from "./Layout";

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontWeight: "bold",
    // [theme.breakpoints.only('lg')]: {
    //   backgroundColor: green[500],
    // },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Box>
          <Typography
            gutterBottom
            variant="h4"
            component="h1"
            className={classes.headerText}
            sx={{ fontWeight: "bold", color: "#be8f2d" }}
          >
            ABOUT THE GRAND AWARDS
          </Typography>
          <Box>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              ABOUT US:
            </Typography>
            <Typography gutterBottom>
              We are 360 Grand TV, an Entertainment Company with the aim of
              Supporting, Educating and Promoting Nigerian Dancers. We are Aimed
              and Focused at bringing Nigerian Dancers to stardom and also
              inspiring youths and young people to use dance as a means of
              making income and engaging in positive activities rather than
              being a menace in the society. “Even common sense proves that
              Dancing makes you feel good because it makes you feel so alive.”
              For example, research has proven that “Dancing improves spatial
              awareness, as well as raising the heart rate and causing a release
              of feel-good endorphins into the bloodstream.”
            </Typography>
          </Box>
          <Box>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                mt: 3
              }}
            >
              OUR AIMS AND OBJECTIVES:
            </Typography>
            <Typography>
              The Therapeutic function of dance and its place in the
              entertainment industry cannot be over emphasized. If Dance can be
              explored as such Nigeria can leap into sustainable development.
              All these forms' the basis of our project, The Mission is to blend
              culture, lifestyle, entertainment, creativity with philosophical
              thought to fortify the public's perception of dance. We are
              determined to get to all class of people as a shining beacon of
              excellence in the world to inspire people to appreciate dance via
              the celebration of this unique lifestyle and culture.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
