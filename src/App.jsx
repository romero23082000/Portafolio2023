import { Box, Grid, Typography } from "@mui/material";
import "./App.css";
import AccordionSkills from "./components/AccordionSkills/AccordionSkills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Headers from "./components/Headers/Headers";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import TabsXp from "./components/TabsExperience/TabsXp";

function App() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Headers
        text1="Nivel tecnologico"
        text2=" Herramientas y tecnologias que suelo usar en mis desarrollos"
      />
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <AccordionSkills />
      </Grid>
      <Headers text1="Experiencias" text2="Mi recorrido laboral y educativo" />
      <Grid item sx={{ width: "100%" }}>
        <TabsXp />
      </Grid>
      <Headers text1="Proyectos" text2="Proyectos realizados" />
      <Grid
        item
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <HorizontalScroll />
      </Grid>
      <Headers text1="Contactame" text2="Ponte en contacto conmigo" />
      <Grid
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0px 15px 30px 15px",
        }}
      >
        <Contact />
      </Grid>
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
        }}
      >
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
