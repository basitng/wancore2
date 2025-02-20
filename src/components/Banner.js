import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import NetworkImage from "../assets/images/network.jpg";
import BusinessSolutionImage from "../assets/images/business-technology.jpg";
import FiberImage from "../assets/images/smart-home.jpg";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
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
      title: "Fiber Access Network",
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
              <Typography
                sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    lineHeight: "2rem",
                  },
                })}
                variant="h2"
              >
                {title}
              </Typography>
              <Button
                sx={{ mt: 2, color: "#FFF !important" }}
                className="btn--extended"
                variant="contained"
                disableElevation
                size="large"
                component={Link}
                to="/about"
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
