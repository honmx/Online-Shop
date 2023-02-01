import { Alert, Box, Button, ButtonGroup, Grid, IconButton, Paper, Snackbar, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBasketProduct } from "../store/slices/basketSlice";
import ConfigButtonsContainer from "./ConfigButtonsContainer";
import Notification from "./Notification";

const Product = ({ product }) => {

  const dispatch = useDispatch();

  const [selectedColor, setColor] = useState(null);
  const [selectedSize, setSize] = useState(null);

  const [successNotification, setSuccessNotification] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);

  const [error, setError] = useState(false);
  
  const showNotification = (setNotification) => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  }

  const handleClick = () => {
    setError(false);

    if (!selectedColor && product?.config?.colors?.length > 0 || !selectedSize && product?.config?.sizes?.length > 0) {
      setError(true);
      showNotification(setErrorNotification)
    } else {
      const selectedProduct = {
        ...product,
        color: selectedColor,
        size: selectedSize
      }

      dispatch(setBasketProduct(selectedProduct));
      showNotification(setSuccessNotification);
    }
  }

  const selectColor = (id) => {
    setColor(prev => prev === id ? null : id);
  }

  const selectSize = (id) => {
    setSize(prev => prev === id ? null : id);
  }


  return (
    <Grid item xs={4} >
      <Paper elevation={9} sx={{ borderRadius: 8, p: 3, position: "relative", height: "100%" }}>
        <Box sx={{
          borderRadius: "inherit",
          overflow: "hidden"
        }}>
          <img style={{ width: "100%" }} src={require("../assets/img/no_img.jpg")} />
        </Box>
        <Typography>{product.title}</Typography>
        <Typography fontWeight={100}>Brand: {product.brand}</Typography>
        <Typography fontWeight={100}>${product.regular_price.value}</Typography>
        {
          product?.config?.colors?.length > 0 &&
          <ConfigButtonsContainer
            product={product}
            type="color"
            select={selectColor}
            selected={selectedColor}
          />
        }
        {
          product?.config?.sizes?.length > 0 &&
          <ConfigButtonsContainer
            product={product}
            type="size"
            select={selectSize}
            selected={selectedSize}
          />
        }
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
      {
        error ?
          <Notification open={errorNotification} severity="error" /> :
          <Notification open={successNotification} severity="success" />
      }
    </Grid>
  )
};

export default Product;
