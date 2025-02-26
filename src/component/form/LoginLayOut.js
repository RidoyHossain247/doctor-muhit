import { Box, Button, Typography } from "@mui/material";
import React, { useReducer, useEffect } from "react";
import { Container, styled } from "@mui/system";
import FormEmail from "./FormEmail";
import FormMainText from "./FormMainText";
import { useNavigate } from "react-router-dom";

const storedUser = JSON.parse(localStorage.getItem("user")) || {
  name: "",
  email: "",
  password: "",
};

const initialState = {
  name: storedUser.name,
  email: storedUser.email,
  password: storedUser.password,
  emailError: "",
  nameError: "",
  passwordError: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        [`${action.field}Error`]: "",
      };
    case "SET_ERROR":
      return { ...state, [`${action.field}Error`]: action.value };
    default:
      return state;
  }
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const LoginLayOut = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.email && state.password) {
      const userData = JSON.stringify({
        name: state.name,
        email: state.email,
        password: state.password,
      });

      localStorage.setItem("user", userData);
    }
  }, [state.name, state.email, state.password]);

  const handleSingIn = () => {
    navigate("/sign-in");
  };

  const handleSubmit = () => {
    let valid = true;

    if (!state.name.trim()) {
      dispatch({
        type: "SET_ERROR",
        field: "name",
        value: "Write your Full Name",
      });
      valid = false;
    }
    if (!state.email.trim()) {
      dispatch({
        type: "SET_ERROR",
        field: "email",
        value: "Write your email",
      });
      valid = false;
    } else if (!validateEmail(state.email)) {
      dispatch({
        type: "SET_ERROR",
        field: "email",
        value: "Invalid email address",
      });
      valid = false;
    }
    if (!state.password.trim()) {
      dispatch({
        type: "SET_ERROR",
        field: "password",
        value: "Write your password",
      });
      valid = false;
    } else if (state.password.length < 8) {
      dispatch({
        type: "SET_ERROR",
        field: "password",
        value: "Password must be 8 characters or more",
      });
      valid = false;
    }

    if (valid) {
      console.log("Account Created!");
      navigate("/sign-in");
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
              Title={"Full Name"}
              plasename={"Full Name"}
              marignTop="30px"
              value={state.name}
              error={state.nameError}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "name",
                  value: e.target.value,
                })
              }
            />
            <FormEmail
              Title={"Email"}
              plasename={"email"}
              marignTop="10px"
              value={state.email}
              error={state.emailError}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "email",
                  value: e.target.value,
                })
              }
            />
            <FormEmail
              Title="Password"
              plasename="Enter password"
              marignTop="10px"
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "password",
                  value: e.target.value,
                })
              }
              error={state.passwordError}
              type={"password"}
            />
            <Button
              fullWidth
              sx={{ background: "#5F6FFF", marginTop: "10px", color: "white" }}
              onClick={handleSubmit}
            >
              Create account
            </Button>
            <Typography
              sx={{ textAlign: "start", marginTop: "10px", color: "#4B5563" }}
            >
              Already have an account?
              <span
                onClick={handleSingIn}
                style={{ color: "blue", fontWeight: "bold", cursor: "pointer" }}
              >
                {" "}
                Login here
              </span>
            </Typography>
          </Box>
        </BoxWrapper>
      </MainBoxWrapper>
    </Container>
  );
};

export default LoginLayOut;

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
