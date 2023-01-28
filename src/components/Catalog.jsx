import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const Catalog = () => {

  const products = useSelector(state => state.catalog.products);
  const selectedBrands = useSelector(state => state.catalog.brandFilter);
  
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    if (selectedBrands.length === 0) setFiltered(products);
    if (selectedBrands.length !== 0)
      setFiltered(products.filter(product => selectedBrands.includes(product.brand)))
  }, [selectedBrands, products]);

  return (
    <Grid item xs={10} sx={{ pl: 3 }}>
      <Typography variant="h6">Catalog</Typography>
      <Grid container spacing={5} sx={{ mt: 1 }}>
        {
          filtered.map(product => <Product key={product.id} product={product} />)
        }
      </Grid>
    </Grid>
  )
};

export default Catalog;
