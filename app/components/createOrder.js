import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Snackbar from "@material-ui/core/Snackbar";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

import { layCung } from "../lib/laSoAdapter";
import { getErrorMessage } from "../lib/form";
import {
  TextField,
  InputAdornment,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
  Fab,
  Drawer,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Customer from "./customer";
import OrderItem from "./orderItem";

const createKetQuaMutation = gql`
  mutation(
    $cung: CungWhereUniqueInput
    $cungVi: CungViWhereUniqueInput
    $chinhTinhs: [TinhWhereUniqueInput]
    $phuTinhs: [PhuTinhWhereUniqueInput]
  ) {
    createKetQua(
      data: {
        cung: { connect: $cung }
        cungVi: { connect: $cungVi }
        chinhTinh: { connect: $chinhTinhs, disconnectAll: true }
        phuTinh: { connect: $phuTinhs, disconnectAll: true }
      }
    ) {
      id
      cung {
        name
      }
      loiGiais: ketQua {
        id
        cung {
          name
        }
        chinhTinh {
          id
          name
        }
        phuTinh {
          id
          name
        }
        giai
      }
    }
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    minWidth: 200,
    maxWidth: 600,
  },
  icon: { marginRight: theme.spacing(1) },
}));
export default function createKetQuas({ onCreate }) {
  const [allProducts, setAllProducts] = useState([]);
  const [drawerStatus, setDrawerStatus] = useState(false);

  const [createKetQua] = useMutation(createKetQuaMutation);
  const router = useRouter();

  //
  const [loading, setLoading] = useState(false);
  // alert
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");

  useEffect(() => {});

  async function handleSubmit() {
    setLoading(true);
    const variables = {};
    try {
      const { data } = await createKetQua({
        variables,
      });
      onCreate(data?.createKetQua);
      setLoading(false);
    } catch (error) {
      setAlertMessage(getErrorMessage(error));
      setAlertOpen(true);
      setLoading(false);
      await router.push("/");
    }
  }
  function alertClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  }
  const classes = useStyles();
  function handleCreate() {
    setDrawerStatus(true);
  }
  function toggleDrawer(event) {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerStatus(!drawerStatus);
  }
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleCreate}
      >
        Create
      </Button>
      <Drawer open={drawerStatus} onClose={toggleDrawer}>
        <Paper className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Add Customer
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Customer />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Add Product
              </Button>
            </Grid>
            <Grid item xs={12}>
              <OrderItem items />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={alertOpen}
            onClose={alertClose}
            autoHideDuration={3000}
            message={alertMessage}
          />
        </Paper>
      </Drawer>
    </React.Fragment>
  );
}
