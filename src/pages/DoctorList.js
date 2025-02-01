import React from "react";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";
import CardsLayout from "../component/form/CardsLayout";
import { Box } from "@mui/material";

const DoctorList = () => {
  return (
    <Box bgcolor={"#F8F9FD"}>
      <NavbarLogIn />
      <DrawerLogin child={<CardsLayout />} />
    </Box>
  );
};

export default DoctorList;
