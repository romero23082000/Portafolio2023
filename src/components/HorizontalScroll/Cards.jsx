import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import { Button, CardMedia, Grid, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { item } = props;
  return (
    <Card
      sx={{
        width: { xs: "250px", sm: "600px", md: "800px" },
      }}
    >
      <CardMedia
        component="img"
        image={item.img}
        title="proyecto"
        sx={{ width: "100%", height: { xs: "75px", sm: "100px", md: "150px" } }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "16px" }}>
        <Link to={item.url} target="_blank">
          <Button
            size="small"
            color="primary"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{ textTransform: "initial" }}
          >
            Visitar sitio
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Cards;
