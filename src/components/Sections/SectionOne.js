import { Box, Typography } from "@mui/material";
import React from "react";

export default function SectionOne() {
  return (
    <Box className="place--center" sx={{ height: "40vh" }}>
      <Typography variant="h5" sx={{ p: "0px 150px" }}>
        Wancore System is a Networking deriven information and technology
        company, that focuses on deploying and buiding quality products for her
        customers.
      </Typography>
    </Box>
  );
}
