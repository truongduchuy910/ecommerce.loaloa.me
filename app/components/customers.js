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
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import formatMoney from "../lib/formatMoney";
import { gql, useQuery } from "@apollo/client";

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
  },
}));
export default function CustomerItem() {
  const classes = useStyles();
  let { data, loading, error, fetchMore, refetch } = useQuery(query, {
    variables: { limit: 6 },
  });
  let allCustomers = data?.allCustomers;
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Tên"
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Điện thoại"
              />
            </TableCell>
            <TableCell>Địa chỉ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCustomers?.length
            ? allCustomers.map((customer) => (
                <TableRow key={customer.id} hover onClick={() => {}}>
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
  );
}
