import { Alert, Box, Button, ButtonGroup, Grid, IconButton, Paper, Snackbar, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBasketProduct } from "../store/slices/basketSlice";

const Product = ({ product }) => {

  const dispatch = useDispatch();

  const [selectedColor, setColor] = useState(null);
  const [selectedSize, setSize] = useState(null);

  const [successNotification, setSuccessNotification] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);
  
  const [error, setError] = useState(false);

  const handleClick = () => {
    setError(false);

    if (!selectedColor && product?.config?.colors?.length > 0 || !selectedSize && product?.config?.sizes?.length > 0) {
      setError(true);
      setErrorNotification(true);
      setTimeout(() => {
        setErrorNotification(false);
      }, 3000);
    } else {
      const selectedProduct = {
        ...product,
        color: selectedColor,
        size: selectedSize
      }

      dispatch(setBasketProduct(selectedProduct));
      setSuccessNotification(true);
      setTimeout(() => {
        setSuccessNotification(false);
      }, 3000);
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
          // colors
          <ButtonGroup sx={{ display: "block" }}>
            {
              product.config.colors.map(color => {
                return (
                  // separate color
                  <Button
                    key={color.color}
                    disabled={!color.isAvailable}
                    onClick={() => selectColor(color.id)}
                    sx={{
                      width: "40px",
                      height: "25px",
                      backgroundColor: color.color,
                      outline: color.id === selectedColor ? "3px solid #ffa500" : "none"
                    }}
                  ></Button>
                )
              })
            }
          </ButtonGroup>
        }
        {
          product?.config?.sizes?.length > 0 &&
          // sizes
          <ButtonGroup sx={{ display: "block" }}>
            {
              product.config.sizes.map(size => {
                return (
                  // separate size
                  <Button
                    key={size.size}
                    disabled={!size.isAvailable}
                    onClick={() => selectSize(size.id)}
                    sx={{
                      width: "40px",
                      height: "25px",
                      outline: size.id === selectedSize ? "3px solid #ffa500" : "none"
                    }}
                  >
                    {size.size}
                  </Button>
                )
              })
            }
          </ButtonGroup>
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
      <Snackbar
        open={successNotification}
        // message="The product had been added to the cart"
        anchorOrigin={{ "horizontal": "center", "vertical": "top" }}
      >
        <Alert severity="success">
          The product had been added to the cart
        </Alert>
      </Snackbar>
      {
        error &&
        <Snackbar
          open={errorNotification}
          // message="You must selected color and size"
          anchorOrigin={{ "horizontal": "center", "vertical": "top" }}
        >
          <Alert severity="error">
            You must selected color and size
          </Alert>
        </Snackbar>
      }
    </Grid>
  )
};

export default Product;
