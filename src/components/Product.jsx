import { Box, Grid, IconButton, Paper, Snackbar, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBasketProduct } from "../store/slices/basketSlice";

const Product = ({ product }) => {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    dispatch(setBasketProduct(product));
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }

  return (
    <Grid item xs={4}>
      <Paper elevation={9} sx={{ borderRadius: 8, p: 3, position: "relative" }}>
        <Box sx={{
          borderRadius: "inherit",
          overflow: "hidden"
        }}>
          <img style={{ width: "100%" }} src={require("../assets/img/no_img.jpg")} />
        </Box>
        <Typography>{product.title}</Typography>
        <Typography fontWeight={100}>Brand: {product.brand}</Typography>
        <Typography fontWeight={100}>${product.regular_price.value}</Typography>
        <IconButton
          onClick={handleClick}
          sx={{
            position: "absolute",
            bottom: "2%",
            right: "2%"
          }}
        >
          <AddIcon />
        </IconButton>
      </Paper>
      <Snackbar 
        open={open}
        message="The product had been added to the cart"
        anchorOrigin={{"horizontal": "center", "vertical": "top"}}
      />
    </Grid>
  )
};

export default Product;
