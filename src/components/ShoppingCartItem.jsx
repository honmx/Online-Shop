import React from "react"
import { Box, TableCell, TableRow, Typography, TextField, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeItemQuantity, deleteItem } from "../store/slices/basketSlice";
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCartItem = ({ item }) => {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value < 0) return;

    const itemToChange = {
      id: item.id,
      size: item.size,
      color: item.color,
      quantity: Number(e.target.value)
    }

    dispatch(changeItemQuantity(itemToChange));
  }

  const handleClick = () => {
    dispatch(deleteItem(item));
  }

  return (
    <TableRow sx={{ position: "relative" }}>
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
                ml: 0.5
              }}></Box>
            </Box>
          }
        </Box>
      </TableCell>
      <TableCell>${item.regular_price.value}</TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        <TextField type="number" value={item.quantity} onChange={handleChange} size="small" sx={{ minWidth: "70px" }} />
      </TableCell>
      <TableCell>${(item.quantity * item.regular_price.value).toFixed(2)}</TableCell>
      <TableCell>
        <IconButton
          onClick={handleClick}
          sx={{
            position: "absolute",
            right: "-30px",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
};

export default ShoppingCartItem;
