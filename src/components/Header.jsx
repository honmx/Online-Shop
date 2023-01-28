import { AppBar, Box, Container, Toolbar, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const basketItems = useSelector(state => state.basket.basket.reduce((acc, cur) => {
    return acc += cur.quantity;
  }, 0));

  return (
    <Box sx={{height: "100%"}}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar sx={{p: "0 !important"}}>
            <Box>
              <img src={require("../assets/img/logo.png")} />
            </Box>
            <IconButton sx={{ marginLeft: "auto" }}>
              <Link to="/cart" style={{color: "#fff"}}>
                <Badge badgeContent={basketItems} color="info">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
};

export default Header;
