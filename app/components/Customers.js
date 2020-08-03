import {
  Grid,
  Typography,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  Table,
  makeStyles,
  Paper,
  TextField,
  InputAdornment,
  Button,
  Fab,
  Drawer,
  IconButton,
  InputBase,
  Divider,
  Box,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import formatMoney from "../lib/formatMoney";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import CreateCustomer from "./CreateCustomer";
const query = gql`
  query($limit: Int) {
    allCustomers(first: $limit) {
      id
      name
      phone
      address
    }
  }
`;
const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(2), width: 500, maxWidth: "90vh" },
  search: {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    border: "1px solid #c0c0c0",
  },
  table: { margin: theme.spacing(2), padding: theme.spacing(2) },
  divider: {
    height: 28,
    margin: 4,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));
export default function Customer({ onClick }) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  let { data, loading, error, fetchMore, refetch } = useQuery(query, {
    variables: { limit: 6 },
  });
  let allCustomers = data?.allCustomers;
  function handleClick() {
    onClick();
    setDrawer(false);
  }
  function chooseCustomer({ customer }) {
    onClick({ customer });
    setDrawer(false);
  }
  return (
    <React.Fragment>
      <IconButton
        color="primary"
        aria-label="add"
        size="small"
        onClick={() => setDrawer(true)}
      >
        <AddIcon />
      </IconButton>
      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        <Paper className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box className={classes.search}>
                <CreateCustomer className={classes.iconButton} />{" "}
                <Divider className={classes.divider} orientation="vertical" />
                <InputBase
                  className={classes.input}
                  placeholder="Tìm kiếm"
                  inputProps={{ "aria-label": "Tìm kiếm" }}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tên</TableCell>
                      <TableCell>Điện thoại</TableCell>
                      <TableCell>Địa chỉ</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allCustomers?.length
                      ? allCustomers.map((customer) => (
                          <TableRow
                            key={customer.id}
                            hover
                            onClick={() => {
                              chooseCustomer({ customer });
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {customer.name}
                            </TableCell>
                            <TableCell>{customer.phone}</TableCell>
                            <TableCell>{customer.address}</TableCell>
                          </TableRow>
                        ))
                      : null}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Paper>
      </Drawer>
    </React.Fragment>
  );
}
