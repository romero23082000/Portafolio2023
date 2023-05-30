import { Box, Button } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { dataProyects } from "../../data";

const HorizontalScroll = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "350px", sm: "700px", md: "900px" },
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#9032bb",
          "--swiper-navigation-color": "#9032bb",
        }}
      >
        {dataProyects.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Cards item={item} />
            </SwiperSlide>
          );
        })}
        <div className="swiper-button image-swiper-button-prev">
          <KeyboardArrowLeftIcon color="secondary" sx={{ fontSize: "40px" }} />
        </div>
        <div className="swiper-button image-swiper-button-next">
          <KeyboardArrowRightIcon color="secondary" sx={{ fontSize: "40px" }} />
        </div>
      </Swiper>
    </Box>
  );
};

export default HorizontalScroll;
