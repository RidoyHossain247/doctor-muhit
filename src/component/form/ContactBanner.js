import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

function ContactBanner() {
  return (
    <TitleBox>
      <Typography
        sx={{ textAlign: "center", fontSize: "30px", fontWeight: 500 }}
      >
        Contact <span style={{ color: "black", fontWeight: 600 }}>Us</span>{" "}
      </Typography>
      <Container>
        <MainBox>
          <ImageBox>
            <img src="./images/contact_image.png" alt="Doctors" />
          </ImageBox>
          <ContentBox>
            <Subtitle>Our OFFICE</Subtitle>
            <Paragraph>
              54709 Willms Station
              <br /> Suite 350, Washington, USA
              <br />
              Tel: (415) 555‑0132
              <br />
              Email: greatstackdev@gmail.com
            </Paragraph>
            <Subtitle>Careers at PRESCRIPTO</Subtitle>
            <Paragraph>Learn more about our teams and job openings.</Paragraph>
            <Button variant="outlined">Explore Jobs</Button>
          </ContentBox>
        </MainBox>
      </Container>
    </TitleBox>
  );
}

export default ContactBanner;
const TitleBox = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  marginBottom: "50px",
  zIndex: 1,
}));
const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  marginTop: "60px",
  borderRadius: "8px",
  overflow: "hidden",
  textAlign: "center",
  padding: "0 100px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "300px",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Center content vertically within the box
  textAlign: "left",
  color: "#1F2937",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#4A5568",
  lineHeight: 1.8,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: 1.2,
  },
}));
const Btn = styled(Button)(({ theme }) => ({
  padding: "15px 10px",
  color: "#1F2937",
  fontSize: "16px",
  width: "20%",
}));
