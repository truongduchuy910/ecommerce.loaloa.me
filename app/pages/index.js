import WorkFrame from "../components/workFrame";
import Orders from "../components/orders";
import CreateOrder from "../components/createOrder";
import GetProduct from "../components/getProduct";
import GetCustomer from "../components/getCustomer";
import { Grid, Drawer, Button } from "@material-ui/core";
import { useState } from "react";

export default function Index() {
  return (
    <WorkFrame>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Orders />
        </Grid>
      </Grid>
    </WorkFrame>
  );
}
