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
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import formatMoney from "../lib/formatMoney";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

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
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxWidth: 500,
  },
}));
export default function Customer({ onClick }) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

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
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Điện thoại"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Tên"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Địa chỉ"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={handleClick}
              >
                Thêm
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Drawer>
    </React.Fragment>
  );
}
