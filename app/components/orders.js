import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Link from "@material-ui/core/Link";
import formatMoney from "../lib/formatMoney";
import Customer from "./customer";
import OrderItem from "./orderItem";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import CreateOrder from "./createOrder";
const query = gql`
  query($limit: Int, $skip: Int) {
    allOrders(orderBy: "time_DESC", first: $limit, skip: $skip) {
      id
      customer {
        id
        name
        phone
        address
      }
      items {
        id
        price
        product {
          id
          name
          price
          sale
          image {
            publicUrl
          }
          images {
            file {
              publicUrl
            }
          }
        }
        quantity
        attributes {
          name
        }
      }
    }
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 350,
  },
}));
export default function orders({ newOrder, setNewOrder }) {
  const classes = useStyles();
  const [moreResult, setMore] = useState(true);
  const [newKQ, setNewKQ] = useState();
  let { data, loading, error, fetchMore, refetch } = useQuery(query, {
    variables: { limit: 1, skip: 0 },
  });
  let allOrders = data?.allOrders;

  if (newOrder && !newKQ) {
    setNewKQ(newOrder);
    setNewOrder(false);
    refetch();
  }

  function loadingMore() {
    let count = data?.allOrders.length;
    fetchMore({
      variables: {
        limit: 12,
        skip: count,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          setMore(false);
          return prev;
        }
        return Object.assign({}, prev, {
          allOrders: [...prev.allOrders, ...fetchMoreResult.allOrders],
        });
      },
    });
  }

  // step

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Đặt", "Xử lí", "Giao", "Thanh toán"];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return !loading ? (
    <Grid container spacing={1}>
      {allOrders?.length ? (
        allOrders?.map((order) => (
          <Grid item xs={12} key={order.id}>
            <Paper className={classes.root}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Typography variant="body1">Đơn:</Typography>
              <Typography variant="body2" color="textSecondary">
                Id: <Link color="primary">{order?.id}</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Tổng:{" "}
                <Link color="primary">{formatMoney(order?.total, 0)}</Link>
              </Typography>
              <Customer customer={order?.customer} />
              <OrderItem items={order?.items} />
            </Paper>
          </Grid>
        ))
      ) : (
        <Typography variant="body1">Danh sách kết quả trỗng.</Typography>
      )}

      <Grid item xs={6} md={3} lg={2}>
        {moreResult && allOrders?.length ? (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={loadingMore}
          >
            Xem thêm
          </Button>
        ) : null}
      </Grid>
    </Grid>
  ) : (
    <Skeleton animation="wave" variant="rect" height="60vh" />
  );
}
