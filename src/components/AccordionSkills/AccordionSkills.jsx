import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Icon from "@mui/material/Icon";
import { Box } from "@mui/system";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardContent from "@mui/material/CardContent";
import { Divider, Grid, IconButton } from "@mui/material";
import { styles } from "./styles";
import { data } from "../../data";

const AccordionSkills = () => {
  const [expanded, setExpanded] = useState();

  const handleChange = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "50px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data.map((skill, index) => {
        return (
          <Card sx={{ width: { md: "450px" } }} key={skill.id}>
            <CardContent sx={styles.cardContent}>
              <Box sx={styles.cardBox}>
                <Icon color="primary">{skill.icon}</Icon>
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography sx={{ fontWeight: 700 }}>
                    {skill.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    {skill.year}
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={() => handleChange(index)}>
                <ExpandMoreIcon />
              </IconButton>
            </CardContent>

            <Collapse in={expanded === index}>
              <CardContent>
                {skill.skills.map((item) => {
                  return (
                    <Box sx={{ mb: "15px" }} key={item.id}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{ fontWeight: 700, color: "text.primary" }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      <Divider sx={{ bgcolor: "primary.light" }} />
                    </Box>
                  );
                })}
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </Grid>
  );
};
export default AccordionSkills;
