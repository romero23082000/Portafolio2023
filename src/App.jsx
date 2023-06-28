import { Box, Grid, Typography } from "@mui/material";
import "./App.css";
import AccordionSkills from "./components/AccordionSkills/AccordionSkills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Headers from "./components/Headers/Headers";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import Navbar from "./components/Navbar/Navbar";
import TabsXp from "./components/TabsExperience/TabsXp";
import Home from "./components/Home/Home";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCustomTheme from "./theme";
import { Zoom, Roll, Bounce, Slide, Fade } from "react-awesome-reveal";

function App() {
  const [mode, setMode] = useState("light");

  const myTheme = createCustomTheme(mode);

  const handleModeChange = () => {
    console.log(mode);
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Navbar handleModeChange={handleModeChange} mode={mode} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            background:
              "conic-gradient(from -60deg at 50% calc(100%/3),#d9d9d9 0 120deg,#0000 0), conic-gradient(from 120deg at 50% calc(200%/3),#d9d9d9 0 120deg,#0000 0), conic-gradient(from  60deg at calc(200%/3), #d9d9d9 60deg,#ffffff 0 120deg,#0000 0), conic-gradient(from 180deg at calc(100%/3),#b2b2b2 60deg,#d9d9d9 0 120deg,#0000 0), linear-gradient(90deg,#b2b2b2   calc(100%/6),#ffffff 0 50%,#b2b2b2 0 calc(500%/6),#ffffff 0)",
            backgroundSize: "calc(1.732 * 82px) 82px",
          }}
          height="94vh"
        >
          <Home />
        </Grid>
        <Zoom>
          <Grid item id="Nivel">
            <Headers
              text1="Nivel tecnologico"
              text2=" Herramientas y tecnologias que suelo usar en mis desarrollos"
            />
            <AccordionSkills />
          </Grid>
        </Zoom>
        <Slide direction="right">
          <Grid
            item
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            id="Experiencias"
          >
            <Headers
              text1="Experiencias"
              text2="Mi recorrido laboral y educativo"
            />
            <TabsXp />
          </Grid>
        </Slide>
        <Bounce>
          <Grid
            item
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            id="Proyectos"
          >
            <Headers text1="Proyectos" text2="Proyectos realizados" />
            <HorizontalScroll mode={mode} />
          </Grid>
        </Bounce>
        <Fade>
          <Grid
            sx={{
              margin: "0px 15px 30px 15px",
            }}
            id="Contacto"
          >
            <Headers text1="Contactame" text2="Ponte en contacto conmigo" />
            <Contact />
          </Grid>
        </Fade>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            color: "#fff",
            gap: "50px",
            background:
              "linear-gradient(130deg, #ad90c1 0%, rgb(3, 0, 84) 100%), linear-gradient(130deg, #09007b 0%, rgba(15, 0, 66, 0) 30%), linear-gradient(129.96deg, rgb(255, 47, 47) 10.43%, rgb(0, 4, 96) 92.78%), radial-gradient(100% 246.94% at 100% 0%, rgb(255, 255, 255) 0%, rgba(37, 0, 66, 0.8) 100%), linear-gradient(121.18deg, rgb(20, 0, 255) 0.45%, rgb(27, 0, 62) 100%), linear-gradient(154.03deg, rgb(206, 0, 0) 0%, rgb(255, 0, 61) 74.04%), linear-gradient(341.1deg, rgb(178, 91, 186) 7.52%, rgb(16, 0, 119) 77.98%), linear-gradient(222.34deg, rgb(169, 0, 0) 12.99%, rgb(0, 255, 224) 87.21%), linear-gradient(150.76deg, rgb(183, 213, 0) 15.35%, rgb(34, 0, 170) 89.57%)",
            backgroundBlendMode:
              "overlay, normal, overlay, color-burn, screen, overlay, difference, difference, normal",
            width: "100%",
            padding: "16px",
          }}
        >
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
