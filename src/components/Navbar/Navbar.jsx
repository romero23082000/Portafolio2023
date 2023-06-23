import {
  AppBar,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

const navLinks = [
  {
    title: "Inicio",
    path: "#Inicio",
  },
  {
    title: "Nivel",
    path: "#Nivel",
  },
  {
    title: "Experiencias",
    path: "#Experiencias",
  },
  {
    title: "Proyectos",
    path: "#Proyectos",
  },
  {
    title: "Contacto",
    path: "#Contacto",
  },
  ,
];

const Navbar = (props) => {
  const { mode, handleModeChange } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar component="nav" position="sticky" color="inherit">
        <Toolbar>
          <IconButton
            color="primary"
            size="Large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} color="primary">
            Andres Romero
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => {
              return (
                <Button
                  key={item.title}
                  component="a"
                  href={item.path}
                  color="primary"
                >
                  {item.title}
                </Button>
              );
            })}
          </Box>

          <Typography color="primary">
            | {mode === "light" ? "Light" : "Dark"} mode
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={handleModeChange}>
            {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default Navbar;
