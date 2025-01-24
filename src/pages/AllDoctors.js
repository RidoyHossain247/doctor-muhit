import React, { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardsLayout from "../component/form/CardsLayout";

const doctorCategories = [
  "All Doctors",
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

const AllDoctors = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Doctors");

  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <StyledMainBox>
        <CategoryBox>
          {doctorCategories.map((category, index) => (
            <StyledButton
              key={index}
              selected={selectedCategory === category}
              onClick={() => handleSelect(category)}
            >
              {category}
            </StyledButton>
          ))}
        </CategoryBox>

        <CardsLayout />
      </StyledMainBox>
    </Container>
  );
};

export default AllDoctors;

const StyledMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

const CategoryBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginTop: "100px",
}));

const StyledButton = styled(Button)(({ theme, selected }) => ({
  width: "220px",
  textTransform: "none",
  justifyContent: "start",
  fontWeight: 600,
  padding: "10px",
  backgroundColor: selected ? "#E2E5FF" : "",
  color: "#000",
  border: "1px solid #B4B4B4",
  ":hover": {
    backgroundColor: selected ? "#C7D2FE" : "",
  },
}));
