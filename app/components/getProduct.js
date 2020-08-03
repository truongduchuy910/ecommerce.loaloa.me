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
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
//import Autocomplete from "@material-ui/lab/Autocomplete";
import formatMoney from "../lib/formatMoney";
import { gql, useQuery } from "@apollo/client";
import Products from "./products";

const query = gql`
  query($limit: Int) {
    allProducts(first: $limit) {
      id
      image {
        publicUrl
      }
      images {
        file {
          publicUrl
        }
      }
      name
      price
      sale
    }
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
export default function ProductItem() {
  const classes = useStyles();
  let { data, loading, error, fetchMore, refetch } = useQuery(query, {
    variables: { limit: 6 },
  });
  let allProducts = data?.allProducts;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Giảm giá"
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Ghi vào hóa đơn
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Products />
        </Grid>
      </Grid>
    </Paper>
  );
}
