import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react"
import Catalog from "../components/Catalog";
import FilterBar from "../components/FilterBar";

const CatalogPage = () => {

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
