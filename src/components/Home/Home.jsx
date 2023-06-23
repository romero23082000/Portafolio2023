import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <Paper elevation={24} sx={{ width: "500px", margin: "16px" }}>
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h6" color="primary" fontWeight={700}>
          Hola
        </Typography>
        <Typography variant="body1">
          Soy <b>Andres Romero</b> Desarrollador web profesional con experiencia
          trabajando con tecnologías como Javascript, Git, React, Angular,
          Nestjs, manejo de base de datos con PostgreSQL y uso de frameworks CSS
          como Material Ui, ionic y NGzorro. Tengo competencias en orientación a
          resultados, gestión de soluciones, trabajo en equipo dispuesto a
          continuar mi crecimiento en los ámbitos profesional y personal.
        </Typography>
        <Divider sx={{ marginY: "10px", backgroundColor: "#f988ff" }} />
        <IconButton
          sx={{
            "&:hover": {
              color: "#fff",
              backgroundColor: "#005082",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          sx={{
            "&:hover": {
              backgroundColor: "#6e5494",
              color: "#fff",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Home;
