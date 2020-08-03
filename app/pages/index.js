import WorkFrame from "../components/workFrame";
import Orders from "../components/orders";
import CreateOrder from "../components/CreateOrder";
import { Grid, Drawer, Button } from "@material-ui/core";
import { useState } from "react";
export default function Index() {
  return (
    <WorkFrame>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
          <CreateOrder />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Orders />
        </Grid>
      </Grid>
    </WorkFrame>
  );
}
