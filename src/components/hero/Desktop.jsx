// import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import vid from "../vidoes/dance-desktop.mp4";
import ReactPlayer from "react-player";
import { IconButton, Typography } from "@mui/material";
import { socialIconList } from "../data/socials";
import CelebrationIcon from '@mui/icons-material/Celebration';
import {
  StyledPrimaryBtn,
  StyledSecondaryBtn,
} from "../styles/styledComponents";

export default function HeroDesktop() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box width="100%">
        <ReactPlayer
          url={vid}
          muted={true}
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          pip={false}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          background: "linear-gradient(to left, transparent 0%, #000)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ pl: 10 }}>
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
              my: 1,
              fontWeight: "600",
            }}
          >
            We're focused on Supporting and Promoting <br/> Nigerian Dancers 🚀
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
