import * as React from "react";
import Table from "@mui/material/Table";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";

const initialRows = [
  {
    id: 1,
    patientName: "Richard James",
    patientImage: "/patient-avatar.jpg",
    department: "Richard James",
    age: 28,
    dateTime: "24th July, 2024, 10:AM",
    doctorName: "Dr. Richard James",
    doctorImage: "/doctor-avatar.jpg",
    fees: "$50",
  },
  {
    id: 2,
    patientName: "Richard James",
    patientImage: "/patient-avatar.jpg",
    department: "Richard James",
    age: 28,
    dateTime: "24th July, 2024, 10:AM",
    doctorName: "Dr. Richard James",
    doctorImage: "/doctor-avatar.jpg",
    fees: "$50",
  },
  {
    id: 3,
    patientName: "Richard James",
    patientImage: "/patient-avatar.jpg",
    department: "Richard James",
    age: 28,
    dateTime: "24th July, 2024, 10:AM",
    doctorName: "Dr. Richard James",
    doctorImage: "/doctor-avatar.jpg",
    fees: "$50",
  },
  {
    id: 4,
    patientName: "Richard James",
    patientImage: "/patient-avatar.jpg",
    department: "Richard James",
    age: 28,
    dateTime: "24th July, 2024, 10:AM",
    doctorName: "Dr. Richard James",
    doctorImage: "/doctor-avatar.jpg",
    fees: "$50",
  },
  {
    id: 5,
    patientName: "Richard James",
    patientImage: "/patient-avatar.jpg",
    department: "Richard James",
    age: 28,
    dateTime: "24th July, 2024, 10:AM",
    doctorName: "Dr. Richard James",
    doctorImage: "/doctor-avatar.jpg",
    fees: "$50",
  },
  {
    id: 6,
    patientName: "Richard James",
    patientImage: "/patient-avatar.jpg",
    age: 28,
    dateTime: "24th July, 2024, 10:AM",
    fees: "$50",
  },
];

function AllAponment() {
  const [rows, setRows] = React.useState(initialRows);

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <Container sx={{ marginTop: "30px", padding: "0" }}>
      <Typography
        sx={{
          marginBottom: "10px",
          fontSize: "22px",
          color: "#323232",
          fontWeight: 500,
        }}
      >
        All Appointments
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="patient appointments">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Patient</TableCell>

              <TableCell>Age</TableCell>
              <TableCell>Date & Time</TableCell>

              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    borderBottom: "none",
                  },
                  "&:hover": { backgroundColor: "#E2E5FF" },
                  padding: "40px",
                }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={row.patientImage}
                      alt={row.patientName}
                      sx={{ width: 40, height: 40, marginRight: 1 }}
                    />
                    {row.patientName}
                  </Box>
                </TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.dateTime}</TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => handleDelete(row.id)}
                    sx={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      bgcolor: "#FEF7F5",
                      border: "1px solid #FEE7E1",
                      marginY: "10px",
                    }}
                  >
                    <CloseIcon sx={{ color: "#E57373" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No Data Available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
export default AllAponment;
