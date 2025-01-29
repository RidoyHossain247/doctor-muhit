import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { Box, Typography } from "@mui/material";

function FormDoctor() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <StyledAvatar src="/doctor-avatar.jpg" alt="Doctor Avatar" />
        <div style={{ fontSize: "20px", color: "#7B7B7B", fontWeight: 500 }}>
          Upload doctor
          <br /> picture
        </div>
      </Box>
      <FormContainer container spacing={2}>
        <Grid item xs={12} sm={6}>
          <StyledText>Doctor name</StyledText>
          <TextField fullWidth placeholder="Doctor name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledText>General physician</StyledText>
          <TextField
            fullWidth
            placeholder="Speciality"
            variant="outlined"
            select
          >
            <MenuItem value="General physician">General physician</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledText>Doctor Email</StyledText>
          <TextField fullWidth placeholder="Doctor Email" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledText>Education</StyledText>
          <TextField fullWidth placeholder="Education" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledText>Doctor Password</StyledText>
          <TextField
            fullWidth
            placeholder="Doctor Password"
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledText>Address 1</StyledText>
          <TextField fullWidth placeholder="Address 1" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledText>Experience</StyledText>
          <TextField
            fullWidth
            placeholder="Experience"
            variant="outlined"
            select
          >
            <MenuItem value="1 year">1 year</MenuItem>
            <MenuItem value="2 years">2 years</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledText>Address 2</StyledText>
          <TextField fullWidth placeholder="Address 2" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledText>Fees</StyledText>
          <TextField fullWidth placeholder="Fees" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <StyledText>About me</StyledText>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="About me"
            variant="outlined"
          />
        </Grid>

        <StyledButton variant="contained" color="primary">
          Add doctor
        </StyledButton>
      </FormContainer>
    </Box>
  );
}

export default FormDoctor;
const FormContainer = styled(Grid)({
  maxWidth: "800px",
  padding: "20px 0",
});
const StyledText = styled(Typography)({
  color: "#5D607D",
  fontSize: "16px",
  fontWeight: 400,
  marginBottom: "5px",
});

const StyledAvatar = styled(Avatar)({
  width: 90,
  height: 90,
});

const StyledButton = styled(Button)({
  display: "block",
  width: "40%",
  margin: "20px 0 0 16px",
});
