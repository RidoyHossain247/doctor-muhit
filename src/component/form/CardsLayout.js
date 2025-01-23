import React, { useState } from "react";
import { Container, Grid, Button, Box, styled } from "@mui/material";
import DoctorCard from "./DoctorCord";

const CardsLayout = () => {
  // State to control the number of items shown
  const [visibleItems, setVisibleItems] = useState(4);

  const doctorCards = [
    {
      image: "./images/image_388.png",
      name: "Dr. Shagor James",
      title: "General Physician",
      isAvailable: true,
    },
    {
      image: "./images/file (2) 1.png",
      name: "Dr. Toni Connor",
      title: "Dermatologist",
      isAvailable: true,
    },
    {
      image: "./images/image_388.png",
      name: "Dr. Emily Stone",
      title: "Pediatrician",
      isAvailable: false,
    },
    {
      image: "./images/file (2) 1.png",
      name: "Dr. John Doe",
      title: "Surgeon",
      isAvailable: true,
    },
    {
      image: "./images/image_388.png",
      name: "Dr. Michael Lee",
      title: "Cardiologist",
      isAvailable: true,
    },
    {
      image: "./images/image_388.png",
      name: "Dr. Anna Smith",
      title: "Neurologist",
      isAvailable: false,
    },
    {
      image: "./images/image_388.png",
      name: "Dr. Richard James",
      title: "General Physician",
      isAvailable: true,
    },
    {
      image: "./images/file (2) 1.png",
      name: "Dr. Sarah Connor",
      title: "Dermatologist",
      isAvailable: true,
    },
    {
      image: "./images/image_388.png",
      name: "Dr. Emily Stone",
      title: "Pediatrician",
      isAvailable: false,
    },
  ];

  const handleLoadMore = () => {
    setVisibleItems(doctorCards.length);
  };

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Grid container spacing={1}>
        {doctorCards.slice(0, visibleItems).map((doctor, index) => (
          <Grid key={index} item xs={6} sm={6} md={3} lg={3}>
            <Box>
              <DoctorCard
                image={doctor.image}
                name={doctor.name}
                title={doctor.title}
                isAvailable={doctor.isAvailable}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {visibleItems < doctorCards.length && (
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Btn variant="contained" onClick={handleLoadMore}>
            More
          </Btn>
        </Box>
      )}
    </Container>
  );
};

export default CardsLayout;
const Btn = styled(Button)(({ theme }) => ({
  backgroundColor: "#5F6FFF",
  color: "#FFFFFF",
  textTransform: "none",
  borderRadius: "20px",
  padding: "10px 50px",
}));
