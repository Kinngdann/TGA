import { Box } from "@mui/system";
import Layout from "./Layout";
import { HeaderText } from "./styles/styledComponents";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const BoxContainer = styled(Box)(({ theme }) => ({
  mt: 2,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export default function Contact() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box padding={2}>
          <HeaderText variant="h4" component="h1" mb={2}>
            CONTACT US
          </HeaderText>
          <BoxContainer>
            <StyledDiv>
              <EmailIcon />
              <Typography fontWeight="bold">
                EMAIL <br /> thegrandawards78@gmail.com
              </Typography>
            </StyledDiv>
            <StyledDiv>
              <LocalPhoneIcon />
              <Typography fontWeight="bold">
                PHONE <br /> +234 813 635 9993
              </Typography>
            </StyledDiv>
            <StyledDiv>
              <PlaceIcon />
              <Typography fontWeight="bold">
                ADDRESS <br />
                Aminu Kano Crescent Wuse II, Abuja
              </Typography>
            </StyledDiv>
          </BoxContainer>
        </Box>
      </Container>
    </Layout>
  );
}
