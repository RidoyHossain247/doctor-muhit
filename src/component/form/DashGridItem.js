import { Box, styled, Typography } from "@mui/material";
import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const DashGridItem = () => {
  return (
    <Box boxShadow={"5px 5px 20px rgba(0, 0, 0, 0.1)"} marginBottom={"40px"}>
      <Box display={"flex"} p={"30px 0 30px 20px"} alignItems={"center"}>
        <Box
          sx={{
            height: "80px",
            width: "80px",
            background: "#F6F8FF",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AccountBoxIcon sx={{ fontSize: "50px", color: "blue" }} />
        </Box>
        <Box sx={{ marginLeft: "20px" }}>
          <Title>18</Title>
          <subTitle>Doctors</subTitle>
        </Box>
      </Box>
    </Box>
  );
};

export default DashGridItem;
const Title = styled(Typography)({
  fontSize: "22px",
  color: "#323232",
  fontWeight: 500,
});
const subTitle = styled(Typography)({
  fontSize: "16px",
  color: "#8893B0",
  fontWeight: 400,
});
