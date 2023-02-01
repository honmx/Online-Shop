import React from "react";
import { Box, Typography } from "@mui/material";

const CartProductInfo = ({ item }) => {
  return (
    <Box>
      <Typography>Brand {item.brand} / {item.title}</Typography>
      {
        item.size &&
        <Typography fontWeight={100}>Size: {item.config.sizes[item.size - 1].size.toUpperCase()}</Typography>
      }
      {
        item.color &&
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontWeight={100}>Color:</Typography>
          <Box sx={{
            width: "15px",
            height: "15px",
            backgroundColor: item.config.colors[item.color - 1].color.toUpperCase(),
            ml: 0.5,
            border: 1
          }} />
        </Box>
      }
    </Box>
  )
};

export default CartProductInfo;
