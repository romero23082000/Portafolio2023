import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TimeLines from "./TimeLines";
import SchoolIcon from "@mui/icons-material/School";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { dataExp } from "../../data";

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
        <TimeLines data={dataExp.educativa} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TimeLines data={dataExp.laboral} />
      </TabPanel>
    </Box>
  );
};

export default TabsXp;
