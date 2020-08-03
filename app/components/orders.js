import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import Order from "./Order";
const query = gql`
  query($limit: Int, $skip: Int) {
    allOrders(orderBy: "step_ASC", first: $limit, skip: $skip) {
      id
      time
      customer {
        id
        name
        phone
        address
      }
      step
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
        limit: 1,
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

  return !loading ? (
    <Grid container spacing={1}>
      {allOrders?.length ? (
        allOrders?.map((order) => (
          <Grid item xs={12} key={order.id}>
            <Order order={order} nextStep={() => refetch()} />
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
