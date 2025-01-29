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
        <Typography>Doctor name</Typography>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Doctor name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Speciality" variant="outlined" select>
            <MenuItem value="General physician">General physician</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Doctor Email" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Education" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Doctor Password"
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Address 1" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Experience" variant="outlined" select>
            <MenuItem value="1 year">1 year</MenuItem>
            <MenuItem value="2 years">2 years</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Address 2" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Fees" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="About me"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <StyledButton variant="contained" color="primary">
            Add doctor
          </StyledButton>
        </Grid>
      </FormContainer>
    </Box>
  );
}

export default FormDoctor;
const FormContainer = styled(Grid)({
  maxWidth: "800px",
  padding: "20px 0",
});

const StyledAvatar = styled(Avatar)({
  width: 90,
  height: 90,
});

const StyledButton = styled(Button)({
  display: "block",
  width: "40%",
  margin: "20px auto 0",
});
