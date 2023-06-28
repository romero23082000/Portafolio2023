import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import pdf from "../../assets/pdf/Andres Romero HV.pdf";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <Fade>
      <Paper elevation={24} sx={{ width: "500px", margin: "16px" }}>
        <Box sx={{ padding: "16px" }}>
          <Typography variant="h6" color="primary" fontWeight={700}>
            ¡Bienvenidos!
          </Typography>
          <Typography variant="body1">
            Soy <b>Andres Romero</b> Desarrollador web profesional con
            experiencia trabajando con tecnologías como Javascript, Git, React,
            Angular, Nestjs, manejo de base de datos con PostgreSQL y uso de
            frameworks CSS como Material Ui, ionic y NGzorro. Tengo competencias
            en orientación a resultados, gestión de soluciones, trabajo en
            equipo dispuesto a continuar mi crecimiento en los ámbitos
            profesional y personal.
          </Typography>
          <Divider sx={{ marginY: "10px", bgcolor: "primary.light" }} />
          <Tooltip title="Mi LinkedIn">
            <IconButton
              sx={{
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#005082",
                },
              }}
              component="a"
              target="_blank"
              href="https://www.linkedin.com/in/andres-romero-ibague-1508891bb/"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Mi Github">
            <IconButton
              sx={{
                "&:hover": {
                  backgroundColor: "#6e5494",
                  color: "#fff",
                },
              }}
              component="a"
              href="https://github.com/romero23082000"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Descargar HV">
            <IconButton
              component="a"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Andres Romero HV.pdf"
              sx={{
                "&:hover": {
                  backgroundColor: "#c50606",
                  color: "#fff",
                },
              }}
            >
              <PictureAsPdfIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
    </Fade>
  );
};

export default Home;
