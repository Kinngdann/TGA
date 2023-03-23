// import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import vid from "../vidoes/video.mp4";
import ReactPlayer from "react-player";
import { Button, IconButton, Typography } from "@mui/material";
import { socialIconList } from "../data/socials";
export default function Hero() {
  // console.log(window.screen.width)

  return (
    <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
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
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          background: "linear-gradient(to bottom, transparent 0%, #000)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="#fff"
            sx={{
              lineHeight: 1,
            }}
          >
            THE GRAND AWARDS
          </Typography>
          <Typography color="#fff" variant="h6" lineHeight={1.2}  sx={{my: 1}}>
            An Entertainment Company with the aim of Supporting and Promoting
            Nigerian Dancers.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              href="/contact"
              variant="contained"
              sx={{
                fontWeight: "bold",
                backgroundColor: "#be8f2d",
                color: "#fff",
              }}
            >
              LET'S TALK
            </Button>
            <Button
              href="/about"
              variant="contained"
              sx={{
                fontWeight: "bold",
                backgroundColor: "#fff",
                color: "#000",
              }}
            >
              ABOUT US
            </Button>
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
