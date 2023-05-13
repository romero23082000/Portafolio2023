import { Box, Button } from "@mui/material";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Cards from "./Cards";
import img from "../../assets/img/PrimeraImagen.jpg";

const HorizontalScroll = () => {
  const data = [
    {
      id: 1,
      title: "Web pelis",
      img: img,
      description:
        "Web realizada para mejorar conceptos y buenas practicas en React.js",
    },
    { id: 2, title: "Proyecto 2", img: img },
    { id: 3, title: "Proyecto 3", img: img },
    { id: 4, title: "Proyecto 4", img: img },
    { id: 5, title: "Proyecto 5", img: img },
  ];
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{
        "& .react-horizontal-scrolling-menu--scroll-container": {
          overflowX: "hidden",
        },
      }}
    >
      {data.map((item) => {
        return (
          <Box m="0 40px">
            <Cards item={item} key={item.id} />;
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <ArrowBackIosNewIcon />
    </Button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Button disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <ArrowForwardIosIcon />
    </Button>
  );
}

export default HorizontalScroll;
