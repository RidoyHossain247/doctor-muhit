import { Box } from "@mui/material";
import React from "react";
import NavBar from "../component/form/Navbar";
import Footer from "../component/form/Footer";
import Title from "../component/form/Title";
import CardsLayout from "../component/form/CardsLayout";
import AboutBannar from "../component/form/AppointmentBannar";

const AllDotctor = () => {
  return (
    <Box padding={{ xs: "0 16px ", sm: "0", md: "0" }}>
      <AboutBannar />
      <Title
        name={"Related Doctors"}
        subname={"Simply browse through our extensive list of trusted doctors."}
      />
      <CardsLayout />
    </Box>
  );
};

export default AllDotctor;
