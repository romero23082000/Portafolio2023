import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TimeLines from "./TimeLines";
import SchoolIcon from "@mui/icons-material/School";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const TabsXp = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = {
    laboral: [
      {
        id: 1,
        title: "TitanQ Ingenieria",
        cargo: "Desarrollador junior FullStack",
        year: "07/03/2022 - 21/01/2023",
      },
    ],
    educativa: [
      {
        id: 1,
        title: "Universidad de Manizales",
        cargo: "Ingenieria de sistemas",
        year: "Actualmente",
      },
      {
        id: 2,
        title: "Universidad Sergio Arboleda",
        cargo: "Programa Misión TIC 2022 Ruta de aprendizaje 2",
        year: "8 Meses",
      },
      {
        id: 3,
        title: "Universidad de Manizales",
        cargo: "Tecnólogo en sistemas de información comercial para Internet",
        year: "02/2018 - 11/2018",
      },
      {
        id: 4,
        title: "Universidad de manizales",
        cargo:
          "Técnico profesional en configuración de servicios comerciales WEB",
        year: "02/2016 - 11/2017",
      },
    ],
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          textColor="secondary"
          indicatorColor="secondary"
          sx={{
            minHeight: "24px",
            "& .MuiTab-root": {
              padding: 1,
              minHeight: "25px",
            },
          }}
        >
          <Tab label="Educativa" icon={<SchoolIcon />} iconPosition="start" />
          <Tab
            label="Laboral"
            icon={<HomeRepairServiceIcon />}
            iconPosition="start"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TimeLines data={data.educativa} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TimeLines data={data.laboral} />
      </TabPanel>
    </Box>
  );
};

export default TabsXp;
