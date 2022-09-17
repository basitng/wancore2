import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { orange } from "@mui/material/colors";

export default function Gallery({
  img,
  caption,
  location,
  month,
  year,
  company,
}) {
  return (
    <Box
      sx={{
        background: `url(${img})`,
        width: "100%",
        height: "300px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      className="place--center gallery-place-holder"
    >
      <Box className="gallery-caption" sx={{ position: "relative" }}>
        <Typography fontWeight={900} variant="body2">
          {caption}
        </Typography>
        <Typography variant="body1">{company}</Typography>
        <Typography variant="body1">
          {month} of {year}
        </Typography>
        <Chip
          label={location}
          sx={{
            position: "absolute",
            top: "114px",
            right: "2%",
            backgroundColor: orange[800],
            color: "#fff",
          }}
        />
      </Box>
    </Box>
  );
}
