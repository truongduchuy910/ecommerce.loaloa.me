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
  CircularProgress,
} from "@material-ui/core";
import formatMoney from "../lib/formatMoney";
import Customers from "./customers";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
export default function CustomerItem() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField fullWidth variant="outlined" size="small" label="Tên" />
        </Grid>
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
            label="Địa chỉ"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" fullWidth>
            Ghi vào hóa đơn
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
