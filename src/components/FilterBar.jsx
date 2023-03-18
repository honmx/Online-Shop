import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setBrandFilter } from "../store/slices/catalogSlice";
import { useGetBrandsQuery } from "../store/slices/apiSlice";

const FilterBar = () => {

  const dispatch = useDispatch();

  // const brands = useSelector(state => state.catalog.brands)
  const { data: brands, isLoading } = useGetBrandsQuery();
  const filters = useSelector(state => state.catalog.brandFilter);

  if (isLoading) return <h1>Loading...</h1>

  return (
    <Grid item xs={2} sx={{ borderRight: 1 }}>
      <Typography variant="h6">All brands</Typography>
      { brands &&
        brands.map(brand => {
          return (
            <Button
              key={brand.id}
              variant={filters.includes(brand.id) ? "contained" : "text"}
              onClick={() => dispatch(setBrandFilter(brand.id))}
              sx={{
                display: "block",
                minWidth: "auto",
                p: "2px 7px",
                m: 0.5,
                textTransform: "none",
              }}
            >
              {brand.title}
            </Button>
          )
        })
      }
    </Grid>
  )
};

export default FilterBar;
