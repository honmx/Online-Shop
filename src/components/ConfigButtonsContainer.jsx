import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const ConfigButtonsContainer = ({ product, type, select, selected }) => {
  return (
    <ButtonGroup sx={{ display: "block" }}>
      {
        product?.config[type + "s"]?.map(item => {
          return (
            <Button
              key={item[type]}
              disabled={!item.isAvailable}
              onClick={() => select(item.id)}
              sx={{
                width: "40px",
                height: "25px",
                backgroundColor: type === "color" ? item.color : "",
                outline: item.id === selected ? "3px solid #ffa500" : "none"
              }}
            >
              { item.size || "" }
            </Button>
          )
        })
      }
    </ButtonGroup>
  )
};

export default ConfigButtonsContainer;
