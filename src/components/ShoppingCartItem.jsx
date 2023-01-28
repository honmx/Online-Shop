import React from "react"
import { Box, TableCell, TableRow, Typography, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeItemQuantity } from "../store/slices/basketSlice";

const ShoppingCartItem = ({ item }) => {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value < 0) return;
    
    const itemToChange = {
      id: item.id,
      quantity: Number(e.target.value)
    }

    dispatch(changeItemQuantity(itemToChange));
  }

  return (
    <TableRow>
      <TableCell sx={{
        display: "flex",
        alignItems: "center"
      }}>
        <Box sx={{
          maxWidth: "75px",
          maxHeight: "75px",
          border: 1,
          borderRadius: 5,
          overflow: "hidden",
          mr: 2
        }}>
          <img style={{ width: "100%", height: "100%" }} src={require("../assets/img/no_img.jpg")} />
        </Box>
        <Typography>Brand {item.brand} / {item.title}</Typography>
      </TableCell>
      <TableCell>${item.regular_price.value}</TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        <TextField type="number" value={item.quantity} onChange={handleChange} size="small" sx={{minWidth: "70px"}} />
      </TableCell>
      <TableCell>${(item.quantity * item.regular_price.value).toFixed(2)}</TableCell>
    </TableRow>
  )
};

export default ShoppingCartItem;
