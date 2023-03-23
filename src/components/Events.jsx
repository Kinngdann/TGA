import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import QuiltedImageList from "./helpers/QuiltedImageList";
import Layout from "./Layout";

export default function Events() {
  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", color: "#be8f2d" }}
        >
          TGA EVENTS
        </Typography>
        <Box>
          <Typography fontWeight="bold">THE GRAND AWARD 2018 - MAIDEN EDITION</Typography>
          <QuiltedImageList />
          <Typography>
            The Maiden Edition of The Grand Awards was a huge success as the
            event recorded attendance from all works of life, ranging from
            dancers, dance lovers, dance enthusiasts, musicians and the
            corporate world. The organizers were able to partner with the
            following organizations NTEL Nigeria, kiss FM, AIT, TSTV, Jordan FM,
            play TV. The event was hosted by comedienne Realwarripikin and MC
            shortcut The event had over 500 persons in attendance and a total of
            24 awardees in the dance category and 5 award of recognition to
            reputable brands. These included Kaffy, Olu maintain, qudus onikeku,
            sarah Boulus and a lot others.
          </Typography>
        </Box>
        <Box sx={{marginTop: 3}}>
          <Typography fontWeight="bold">THE GRAND BATTLE 2019</Typography>
          <QuiltedImageList />
          <Typography>
            The Grand Battle was a huge success as the event recorded attendance
            from all works of life, ranging from dancers, dance lovers, dance
            enthusiasts, musicians and the corporate world. The organizers were
            able to partner with the following organizations NTEL Nigeria, kiss
            FM, AIT, TSTV, Jordan FM.
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}
