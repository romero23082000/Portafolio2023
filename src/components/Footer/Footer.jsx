import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <Grid item>
        <Typography variant="h3" fontWeight={700}>
          Rome
        </Typography>
        <Typography>Frontend Developer</Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100%",
          alignItems: "center",
          height: "200px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Contactame</Typography>
          <Typography variant="h6">Experiencias</Typography>
          <Typography variant="h6">Nivel tecnologico</Typography>
        </Box>
        <Typography>Design: Andres Romero</Typography>
      </Grid>
      {/* <Grid item>
        <GitHubIcon />
        <LinkedInIcon />
      </Grid> */}
    </>
  );
};

export default Footer;
