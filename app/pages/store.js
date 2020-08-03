import WorkFrame from "../components/workFrame";
import Products from "../components/Products";
import Customers from "../components/Customers";
import CreateOrder from "../components/CreateOrder";
import { Grid, Drawer, Button } from "@material-ui/core";
import { useState } from "react";

export default function Index() {
  return (
    <WorkFrame>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={4}>
          <Customers />
        </Grid>
        <Grid item md={12} lg={4}>
          <Products />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CreateOrder />
        </Grid>
      </Grid>
    </WorkFrame>
  );
}
