import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container, styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FormEmail from "./FormEmail";
import FormMainText from "./FormMainText";
import NavBar from "./Navbar";
import Footer from "./Footer";

const SigninLayout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{3,}$/;
    return regex.test(email);
  };
  const navigate = useNavigate();
  const handleSingIn = () => {
    navigate("/sign-up");
  };

  const handleSubmit = () => {
    let valid = true;

    if (!email.trim()) {
      setEmailError("Write your email or username");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email or username");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Write your password");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Email/Username:", email);
      console.log("Password:", password);

      // ✅ Email & Password valid হলে navigate হবে
      navigate("/admin-panel");
    }
  };

  return (
    <Container>
      <MainBoxWrapper>
        <BoxWrapper>
          <Box sx={{ padding: "32px 24px" }}>
            <FormMainText
              title={"Create Account"}
              subTitle={"Please sign up to book appointment"}
            />

            <FormEmail
              Title={"Email"}
              plasename={"email"}
              marignTop="40px"
              value={email}
              error={emailError}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              type="email"
            />
            <FormEmail
              Title="Password"
              plasename="Enter password"
              marignTop="10px"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              error={passwordError}
              type={"password"}
            />
            <Button
              fullWidth
              sx={{ background: "#5F6FFF", marginTop: "10px", color: "white" }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Typography
              sx={{ textAlign: "start", marginTop: "10px", color: "#4B5563" }}
            >
              Already have an account?
              <span
                onClick={handleSingIn}
                style={{ color: "blue", fontSize: "bold", cursor: "pointer" }}
              >
                {" "}
                Sign Up
              </span>
            </Typography>
          </Box>
        </BoxWrapper>
      </MainBoxWrapper>
    </Container>
  );
};

export default SigninLayout;
const MainBoxWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  backgroundColor: "#FFFFFF",
  height: "100vh",
}));

const BoxWrapper = styled(Box)(({ theme, textAlign }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "498px",
  height: "auto",
  border: "1px solid #D4D4D4",
  borderRadius: "24px",
  textAlign: textAlign || "center",
  [theme.breakpoints.up("sm")]: {
    width: "498px",
  },
}));
