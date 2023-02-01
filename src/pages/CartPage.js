import { Container, IconButton, Paper, Typography } from "@mui/material";
import React from "react"
import ShoppingCart from "../components/ShoppingCart";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const CartPage = () => {

  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{position: "relative"}}>
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
      <IconButton sx={{position: "absolute", top: 0, left: -20}} onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </IconButton>
    </Container>
  )
};

export default CartPage;
