import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { socialIconList } from "./data/socials";

const useStyles = makeStyles({
  link: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    textDecoration: "none",
    color: "#be8f2d",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <Box
      sx={{
        textAlign: "center",
        color: "#fff",
        width: "100%",
        backgroundColor: "#1e1e1e",
        pt: 2,
      }}
    >
      <Typography sx={{ color: "#be8f2d", fontWeight: "bold" }}>
        GET SOCIAL WITH US!
      </Typography>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {socialIconList.map((btn, index) => (
          <IconButton
            size="small"
            color="primary"
            key={index}
            target="_blank"
            href={btn.slug}
          >
            {btn.component}
          </IconButton>
        ))}
      </Box>
      <Box sx={{ backgroundColor: "#000", p: 2, mt: 2 }}>
        <Typography variant="p" fontSize=".8rem">
          © Copyright {new Date().getFullYear()} The Grand Awards. All rights
          reserved. <br />
          <Link className={classes.link} to="privacy">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link className={classes.link} to="/contact">
            Contact Us
          </Link>{" "}
          |{" "}
          <Link className={classes.link} to="/about">
            About Us
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
