import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <>
      <Grid item sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700}>
          Andres Romero
        </Typography>
        <Typography>Frontend Developer</Typography>
        <Grid item>
          <Tooltip title="Mi Github">
            <IconButton
              sx={{
                color: "#fff",
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
          <Tooltip title="Mi LinkedIn">
            <IconButton
              sx={{
                color: "#fff",
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
        </Grid>
        <Typography variant="body2">
          © 2023 Andres Romero. Todos los derechos reservados.
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
