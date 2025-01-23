import React from "react";
import NavBar from "../component/form/Navbar";
import HeroItem from "../component/form/HeroItem";
import CardsLayout from "../component/form/CardsLayout";
import CircleItem from "../component/form/CircleItem";
import Title from "../component/form/Title";
import Footer from "../component/form/Footer";
import { Box } from "@mui/material";
import SecHero from "../component/form/SecHero";

const HomePage = () => {
  return (
    <Box padding={{ xs: "0 16px ", sm: "0", md: "0" }}>
      <HeroItem />
      <Title
        name="Find by Speciality "
        subname={
          <>
            Simply browse through our extensive list of trusted doctors,
            schedule
            <br /> your appointment hassle-free.
          </>
        }
      />
      <CircleItem />
      <CardsLayout />
      <SecHero />
    </Box>
  );
};

export default HomePage;
