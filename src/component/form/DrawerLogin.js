import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { name: "Dashboard", icon: <DashboardIcon />, route: "/admin-panel" },
  { name: "Appointments", icon: <EventNoteIcon />, route: "/admin-apoint" },
  { name: "Add Doctor", icon: <PersonAddIcon />, route: "/add-doctor" },
  { name: "Doctors List", icon: <LocalHospitalIcon />, route: "/doctor-list" },
];

function DrawerLogin({ child }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleMenuClick = (route) => {
    navigate(route);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <List sx={{ marginTop: "70px" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={toggleDrawer}
              sx={{ justifyContent: open ? "flex-start" : "center" }}
            >
              <ListItemIcon
                sx={{ minWidth: 0, mr: open ? 3 : "auto !importent" }}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </ListItemIcon>
              <ListItemText
                primary={open ? "Close Menu" : ""}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          {menuItems.map(({ name, icon, route }) => (
            <ListItem
              key={name}
              onClick={() => handleMenuClick(route)}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  justifyContent: open ? "initial" : "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    mr: open ? 3 : "auto",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: open ? `${drawerWidth}px` : `64px`,
          transition: "margin 0.3s",
        }}
      >
        <DrawerHeader />
        {child}
      </Box>
    </Box>
  );
}

export default DrawerLogin;

// Styled Components
const openedMixin = (theme) => ({
  width: drawerWidth,
  position: "fixed",
  height: "100vh",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  position: "fixed",
  height: "100vh",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open
    ? {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
}));
