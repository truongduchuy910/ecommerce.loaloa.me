import {
  Grid,
  Typography,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  Table,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import formatMoney from "../lib/formatMoney";
export default function OrderItem({ items }) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Tên</TableCell>
            <TableCell align="right">SL</TableCell>
            <TableCell align="right">Bán</TableCell>
            <TableCell align="right">Niêm yết</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.length
            ? items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    <img
                      style={{ maxWidth: "100%", maxHeight: 40 }}
                      src={
                        item.product.image
                          ? item.product.image.publicUrl
                          : item.product.images[0].file.publicUrl
                      }
                    />
                  </TableCell>
                  <TableCell>{item.product.name}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">
                    {formatMoney(item.price, 0)}
                  </TableCell>
                  <TableCell align="right" color="textSecondary">
                    <Typography variant="body2" color="textSecondary">
                      {formatMoney(item.product.price, 0)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
