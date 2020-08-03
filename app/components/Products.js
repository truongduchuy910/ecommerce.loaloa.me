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
  Fab,
  Drawer,
  IconButton,
  Box,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";

import formatMoney from "../lib/formatMoney";
import { gql, useQuery } from "@apollo/client";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
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
export default function ProductItem({ onClick }) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  let { data, loading, error, fetchMore, refetch } = useQuery(query, {
    variables: { limit: 6 },
  });
  let allProducts = data?.allProducts;
  function handleClick({ product }) {
    setDrawer(false);
    onClick({ product });
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box className={classes.search}>
                {/* <Divider className={classes.divider} orientation="vertical" /> */}
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
                      <TableCell>Ảnh</TableCell>
                      <TableCell>Tên</TableCell>
                      <TableCell align="right">Tồn</TableCell>
                      <TableCell align="right">Giá</TableCell>
                      <TableCell align="right">Giảm</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allProducts?.length
                      ? allProducts.map((product) => (
                          <TableRow
                            key={product.id}
                            hover
                            onClick={() => handleClick({ product })}
                          >
                            <TableCell component="th" scope="row">
                              <img
                                style={{
                                  maxWidth: "100%",
                                  maxHeight: 40,
                                  margin: 0,
                                }}
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
            </Grid>
          </Grid>
        </Paper>
      </Drawer>
    </React.Fragment>
  );
}
