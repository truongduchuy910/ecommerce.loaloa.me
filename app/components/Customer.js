import { Link, Typography } from "@material-ui/core";

export default function Customer({ customer }) {
  return (
    <React.Fragment>
      <Typography variant="body1">Khách hàng:</Typography>
      <Typography variant="body2" color="textSecondary">
        Tên: <Link color="primary">{customer?.name}</Link>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Điện thoại: <Link color="primary">{customer?.phone}</Link>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Đia chỉ: <Link color="primary">{customer?.address}</Link>
      </Typography>
    </React.Fragment>
  );
}
