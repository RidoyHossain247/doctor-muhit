import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  styled,
} from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

const HeroItem = () => {
  const navigate = useNavigate();
  const handleClickDoc = () => {
    navigate("/all-docters");
  };
  return (
    <Container>
      <MainBox>
        <Grid container sx={{ padding: { xs: 1, md: 3 } }}>
          <Grid item xs={12} md={5} marginY={"auto"}>
            <TitleText>Book Appointment With Trusted Doctors</TitleText>
            <Box display="flex" alignItems="center" sx={{ marginBottom: 2 }}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {/* imgta bosbe na mui theke avatar use korte hobe */}
                <TextImg
                  src="./images/group_profiles.png"
                  alt="Group Profiles"
                />
              </Box>
              <SubTitleText>
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.sagar
              </SubTitleText>
            </Box>
            {/* Button Ekta hobe component e */}
            <HeroButton onClick={handleClickDoc}>
              Book appointment
              {/* mui theke button use korte hobe */}
              <ArrowRightAltIcon />
            </HeroButton>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: { xs: "none", md: "block" },
              marginBottom: "-28px",
            }}
          >
            <img
              src="./images/doc-header-img.png"
              alt="Doctor Header"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
      </MainBox>
    </Container>
  );
};

export default HeroItem;
const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#5F6FFF",
  overflow: "hidden",
  marginTop: "140px",
  borderRadius: "12px",
}));
const TextImg = styled("img")(({ theme }) => ({
  height: "50px",
  width: "130px",
  marginRight: "16px",
}));
const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "44px",
  fontWeight: 600,
  color: "#FFFFFF",
}));
const SubTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: "#FFFFFF",
  marginTop: "15px",
}));
const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "#595959",
  padding: " 15px 25px",
  borderRadius: "47px",
  marginTop: "15px",
}));
