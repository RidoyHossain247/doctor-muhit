import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  MenuItem,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavbarLogIn() {
  const navigate = useNavigate();
  const handleClickSignUp = () => {
    navigate("/");
  };

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
        <NavContainer>
          <StyledToolbar>
            <DesktopLogo>
              <img
                style={{
                  height: "36px",
                  width: "170px",
                }}
                src="./images/logo-footer.png"
                alt="Logo"
              />
            </DesktopLogo>
            <RightButton onClick={handleClickSignUp}>Log Out</RightButton>
          </StyledToolbar>
        </NavContainer>
      </Container>
    </StyledAppBar>
  );
}

export default NavbarLogIn;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const NavContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  textAlign: "center",
  overflow: "hidden",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #ADADAD",
  padding: "10px 0px 10px 0px",
}));

const DesktopLogo = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    marginRight: theme.spacing(1),
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const DrawerLogo = styled(Box)(({ theme }) => ({}));

const DrawerMenuItem = styled(MenuItem)(({ theme }) => ({
  textAlign: "center",
  color: "black",
}));

const DesktopNav = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
  },
}));

const RightButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#5F6FFF",
  color: "#FFFFFF",
  fontWeight: 400,
  fontSize: "16px",
  padding: "10px 36px",
  textTransform: "none",
  borderRadius: "45px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    padding: "10px 25px",
  },
}));
