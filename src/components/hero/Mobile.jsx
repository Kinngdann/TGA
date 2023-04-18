// import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import vid from "../vidoes/dance-mobile.mp4";
import ReactPlayer from "react-player";
import { IconButton, Typography } from "@mui/material";
import { socialIconList } from "../data/socials";
import CelebrationIcon from "@mui/icons-material/Celebration";
import {
  StyledPrimaryBtn,
  StyledSecondaryBtn,
} from "../styles/styledComponents";

export default function HeroMobile() {
  return (
    <Box>
      <ReactPlayer
        url={vid}
        muted={true}
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        pip={false}
      />
      <Box
        sx={{
          height: "100%",
          top: "0",
          position: "absolute",
          background: "linear-gradient(to bottom, transparent 0%, #000)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#fff"
            sx={{
              lineHeight: 0,
            }}
          >
            THE GRAND
          </Typography>
          <Typography variant="h2" fontWeight="bold">
            AWARDS
          </Typography>
          <Typography
            color="#fff"
            lineHeight={1.2}
            sx={{
              mb: 1.5,
              fontWeight: "600",
            }}
          >
            We're focused on Supporting and Promoting Nigerian Dancers 🚀
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <StyledPrimaryBtn href="#" variant="contained">
              TGA Nomination
            </StyledPrimaryBtn>
            <StyledSecondaryBtn
              href="#"
              endIcon={<CelebrationIcon />}
            >
              PAST EVENTS
            </StyledSecondaryBtn>
          </Box>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              gap: 2,
            }}
          >
            {socialIconList.map((btn, index) => (
              <IconButton
                size="small"
                color="#be8f2d"
                key={index}
                target="_blank"
                href={btn.slug}
              >
                {btn.component}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
