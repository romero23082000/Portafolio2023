import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";

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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        sx={{ backgroundColor: "#ffffff" }}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            size="Large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} color="secondary">
            Andres Romero
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => {
              return (
                <Button
                  key={item.title}
                  component="a"
                  href={item.path}
                  color="secondary"
                >
                  {item.title}
                </Button>
              );
            })}
          </Box>
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
