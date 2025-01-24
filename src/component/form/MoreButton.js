import React from "react";
import { Box, Button, styled } from "@mui/material";

const MoreButton = ({ onClick }) => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
      <StyledButton variant="contained" onClick={onClick}>
        More
      </StyledButton>
    </Box>
  );
};

export default MoreButton;

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#5F6FFF",
  color: "#FFFFFF",
  textTransform: "none",
  borderRadius: "20px",
  padding: "10px 50px",
}));
