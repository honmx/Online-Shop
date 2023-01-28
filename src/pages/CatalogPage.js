import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import Catalog from "../components/Catalog";
import FilterBar from "../components/FilterBar";
import { fetchBrands } from "../services/fetchBrands";
import { fetchProducts } from "../services/fetchProducts";


const CatalogPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchProducts());
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <FilterBar />
        <Catalog />
      </Grid>
    </Container>
  )
};

export default CatalogPage;
