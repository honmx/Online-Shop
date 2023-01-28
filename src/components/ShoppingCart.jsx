import { Table, TableCell, TableHead, TableRow, TableBody, Typography } from "@mui/material";
import React from "react"
import { useSelector } from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = () => {

  const basketItems = useSelector(state => state.basket.basket);

  const totalPrice = basketItems.reduce((acc, cur) => acc += cur.regular_price.value * cur.quantity, 0).toFixed(2);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ width: "100%" }}>Item</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Qty</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            basketItems.map(item => <ShoppingCartItem key={item.id} item={item} />)
          }
        </TableBody>
      </Table>
      <Typography sx={{mt: 3}} variant="h5" align="right">Subtotal: {totalPrice}</Typography>
    </>
  )
};

export default ShoppingCart;
