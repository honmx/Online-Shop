import { Container, Paper, Typography } from "@mui/material";
import React from "react"
import ShoppingCart from "../components/ShoppingCart";

const CartPage = () => {
  return (
    <Container maxWidth="md">
      <Paper
        elevation={12}
        sx={{
          padding: 5,
          borderRadius: 10
        }}
      >
        <Typography variant="h5">Shopping cart</Typography>
        <ShoppingCart />
      </Paper>
    </Container>
  )
};

export default CartPage;
