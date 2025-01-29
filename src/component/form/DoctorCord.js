import React from "react";
import { Card, CardContent, Typography, Box, styled } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";

function DoctorCard({ image, name, title, isAvailable, onClick }) {
  const navigate = useNavigate();
  const handleSingIn = () => {
    navigate("/Doctor-Apoint");
  };
  return (
    <CardWapper onClick={onClick}>
      <ImageWapper>
        <Image src={image} alt={name} />
      </ImageWapper>

      <CardContent>
        <Box>
          <Aviacle>
            <FiberManualRecordIcon
              fontSize="small"
              sx={{
                marginRight: "8px",
                fontSize: "12px",
              }}
            />
            {isAvailable ? "Available" : "Unavailable"}
          </Aviacle>
        </Box>

        <Typography variant="h6" fontWeight={700} mb={0.5}>
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </CardWapper>
  );
}

export default DoctorCard;
const Aviacle = styled(Typography)(({ theme }) => ({
  color: "#0FBF00",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  marginBottom: "8px",
}));
const CardWapper = styled(Card)(({ theme }) => ({
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  border: "1px solid #C9D8FF",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));
const ImageWapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#EAEFFF",
}));
const Image = styled("img")(({ theme }) => ({
  width: "auto",
  height: "250px",
  display: "block",
  margin: "auto",
}));
