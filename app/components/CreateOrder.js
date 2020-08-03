import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Snackbar from "@material-ui/core/Snackbar";
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
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import Customer from "./Customer";
import Customers from "./Customers";
import OrderItem from "./orderItem";
import Products from "./Products";

import formatMoney from "../lib/formatMoney";
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
    marginBottom: theme.spacing(2),
    height: "70vh",
  },
  icon: { marginRight: theme.spacing(1) },
}));

export default function createKetQuas({ onCreate }) {
  const [customer, setCustomer] = useState(false);
  const [products, setProducts] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [sale, setSale] = useState(0);

  const [drawerStatus, setDrawerStatus] = useState(false);
  const [order, setOrder] = useState();
  const [createKetQua] = useMutation(createKetQuaMutation);
  const router = useRouter();
  const [items, setItems] = useState([]);
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
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Customers
                      onClick={({ customer }) => {
                        console.log(customer);
                        setCustomer(customer);
                      }}
                    />
                  </TableCell>
                  <TableCell>Tên</TableCell>

                  <TableCell>Điện thoại</TableCell>
                  <TableCell>Địa chỉ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customer
                  ? [customer].map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          {product.id?.toString().slice(0, 4)}...
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.phone}</TableCell>
                        <TableCell>{product.address}</TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Products
                      onClick={({ product }) => {
                        setProducts([product]);
                      }}
                    />
                  </TableCell>
                  <TableCell>Tên</TableCell>
                  <TableCell align="right">Tồn</TableCell>
                  <TableCell align="right">Niêm yết</TableCell>
                  <TableCell align="right">Giảm</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.length
                  ? products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell component="th" scope="row">
                          <img
                            style={{ maxWidth: "100%", maxHeight: 40 }}
                            src={
                              product.image
                                ? product.image.publicUrl
                                : product.images[0].file.publicUrl
                            }
                          />
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell align="right">{product.quantity}</TableCell>
                        <TableCell align="right">
                          {formatMoney(product.price, 0)}
                        </TableCell>
                        <TableCell align="right" color="textSecondary">
                          - {formatMoney(product.sale, 0)}
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
}
