import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import NetworkImage from "../assets/images/network.jpg";
import BusinessSolutionImage from "../assets/images/business-technology.jpg";
import FiberImage from "../assets/images/smart-home.jpg";

export default function Banner() {
  const bannerContents = [
    {
      title: "Enterprise Network Infrastructure",
      id: nanoid(),
      btnText: "Get started",
      image: NetworkImage,
    },
    {
      title: "Enterprise Business Solutions",
      id: nanoid(),
      btnText: "Get started",
      image: BusinessSolutionImage,
    },
    {
      title: "Fiber To The Home ",
      id: nanoid(),
      btnText: "Get started",
      image: FiberImage,
    },
  ];
  return (
    <Box>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
        slidesPerView={1}
        spaceBetween={0}
      >
        {bannerContents.map(({ title, id, btnText, image }) => (
          <SwiperSlide
            key={id}
            className="banner--slider"
            style={{ backgroundImage: `url(${image})` }}
          >
            <Box className="banner--caption">
              <Typography variant="h2">{title}</Typography>
              <Button
                sx={{ mt: 2 }}
                className="btn--extended"
                variant="contained"
                disableElevation
                size="large"
              >
                {btnText}
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
