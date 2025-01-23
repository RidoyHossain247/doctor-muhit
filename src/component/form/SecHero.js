import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  styled,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SecHero = () => {
  const navigate = useNavigate();
  const handleClickSignUp = () => {
    navigate("/sign-up");
  };
  return (
    <Container>
      {/* <StyledContainer>
        <StyledGrid container alignItems="center">
          <LeftGrid item xs={12} md={6}>
            <StyledTypography>
              Book Appointment With 100+ Trusted Doctors
            </StyledTypography>
            <StyledButton onClick={handleClickSignUp}>
              Create account
            </StyledButton>
          </LeftGrid>

          <RightGrid item xs={12} sm={6} md={6}>
            <StyledImage
              src="./images/appointment-doc-img.png"
              alt="Doctor Header"
            />
          </RightGrid>
        </StyledGrid>
      </StyledContainer> */}
      {/* <Box
        p={4}
        bgcolor={"#5F6FFF"}
        borderRadius={2}
        position={"relative"}
        // height={"280px"}
      >
        <Box py={"80px"}>
          <Typography variant="h4">
            Book Appointment With 100+ Trusted Doctors
          </Typography>
          <Button variant="contained"> Create account</Button>
        </Box>
        <BannarImage
          src="./images/appointment-doc-img.png"
          alt="Doctor Header"
        />
      </Box> */}
      <Grid
        container
        bgcolor={"#5F6FFF"}
        borderRadius={2}
        alignItems={"center"}
      >
        <Grid item xs={12} md={7}>
          <Box p={4}>
            <Typography variant="h4">
              Book Appointment With 100+ Trusted Doctors
            </Typography>
            <Button variant="contained"> Create account</Button>
          </Box>
        </Grid>
        <Grid ite xs={12} md={5}>
          <img
            style={{ width: "auto", height: "300px", display: "block" }}
            src="./images/appointment-doc-img.png"
            alt="Doctor Header"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecHero;
const BannarImage = styled("img")(({ theme }) => ({
  position: "absolute",
  right: "50px",
  bottom: 0,
  maxHeight: "350px",
  [theme.breakpoints.down("md")]: {
    position: "unset",
    width: "100%",
  },
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#5F6FFF",
  marginTop: "100px",
  borderRadius: "12px",
  height: "auto",
  [theme.breakpoints.up("xs")]: {
    height: "200px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "300px",
  },
  [theme.breakpoints.up("md")]: {
    height: "400px",
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  height: "100%",
}));

const LeftGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 600,
  color: "#FFFFFF",
  [theme.breakpoints.up("sm")]: {
    fontSize: "28px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "42px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "#595959",
  padding: "15px 25px",
  borderRadius: "47px",
  marginTop: "15px",
  alignSelf: "center",
  [theme.breakpoints.up("md")]: {
    alignSelf: "flex-start",
  },
}));

const RightGrid = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxWidth: "100%",
  marginTop: "-111px",
}));
