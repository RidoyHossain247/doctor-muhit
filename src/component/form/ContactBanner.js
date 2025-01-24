import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

function ContactBanner() {
  return (
    <TitleBox>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Contact <span style={{ color: "#000000", fontWeight: 600 }}>Us</span>
      </Typography>
      <Container>
        <MainBox>
          <ImageBox>
            <img src="./images/contact_image.png" alt="Doctors" />
          </ImageBox>
          <ContentBox>
            <Subtitle>Our Office</Subtitle>
            <Paragraph>
              54709 Willms Station
              <br /> Suite 350, Washington, USA
              <br />
              Tel: (415) 555‑0132
              <br />
              Email: greatstackdev@gmail.com
            </Paragraph>
            <Subtitle>Careers at Prescripto</Subtitle>
            <Paragraph>Learn more about our teams and job openings.</Paragraph>
            <ButtonBox>
              <Button variant="outlined">Explore Jobs</Button>
            </ButtonBox>
          </ContentBox>
        </MainBox>
      </Container>
    </TitleBox>
  );
}

export default ContactBanner;

const TitleBox = styled(Box)(({ theme }) => ({
  marginTop: "80px",
  marginBottom: "40px",
}));

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  marginTop: "40px",
  padding: "0",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  justifyContent: "flex-end",
  img: {
    width: "60%",
    height: "auto",
    borderRadius: "8px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: theme.spacing(4),
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: theme.spacing(4),
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "0 20px",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    padding: "0",
    textAlign: "center",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "600",
  color: "#000000",
  marginBottom: theme.spacing(2),
  textTransform: "uppercase",
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#4A5568",
  lineHeight: 1.8,
  marginBottom: theme.spacing(2),
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));
