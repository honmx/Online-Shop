import { Table, TableCell, TableHead, TableRow, TableBody, Typography } from "@mui/material";
import React from "react"
import { useSelector } from "react-redux";
import { hash } from "../helpers/hash";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = () => {

  const basketItems = useSelector(state => state.basket.basket);

  const totalPrice = basketItems.reduce((acc, cur) => acc += cur.regular_price.value * cur.quantity, 0).toFixed(2);

  return (
    <>
      {
        basketItems.length === 0 &&
        <h1>No products yet</h1>
      }
      {
        basketItems.length > 0 &&
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
                basketItems.map(item => {
                  const key = hash(item.id, item.color, item.size);
                  return <ShoppingCartItem key={key} item={item} />
                })
              }
            </TableBody>
          </Table>
          <Typography sx={{ mt: 3 }} variant="h5" align="right">Subtotal: {totalPrice}</Typography>
        </>
      }
    </>
  )
};

export default ShoppingCart;
