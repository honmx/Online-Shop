import React from "react";
import { Alert, Snackbar } from "@mui/material";

const Notification = ({ open, severity }) => {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ "horizontal": "center", "vertical": "top" }}
    >
      <Alert severity={severity}>
        {
          severity === "success" ?
            "The product has been added to the cart" :
            "You must selected all possible options"
        }
      </Alert>
    </Snackbar>
  )
};

export default Notification;
