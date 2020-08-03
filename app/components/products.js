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
  console.log(allProducts);
  return (
    <React.Fragment>
      <TextField fullWidth variant="outlined" size="small" label="Tìm kiếm" />
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Tên</TableCell>
              <TableCell align="right">Tồn</TableCell>
              <TableCell align="right">Giá</TableCell>
              <TableCell align="right">Giảm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProducts?.length
              ? allProducts.map((product) => (
                  <TableRow key={product.id} hover onClick={() => {}}>
                    <TableCell component="th" scope="row">
                      <img
                        style={{ maxWidth: "100%", maxHeight: 80 }}
                        src={
                          product.image
                            ? product.image.publicUrl
                            : product.images[0].file.publicUrl
                        }
                      />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell align="right">
                      {formatMoney(product.price, 0)}
                    </TableCell>
                    <TableCell align="right" color="textSecondary">
                      <Typography variant="body2" color="textSecondary">
                        - {formatMoney(product.sale, 0)} đ
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
