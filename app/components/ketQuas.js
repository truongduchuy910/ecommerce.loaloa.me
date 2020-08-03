import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import LoiGiais from "./loiGiais";
const query = gql`
  query($limit: Int, $skip: Int) {
    allKetQuas(orderBy: "time_DESC", first: $limit, skip: $skip) {
      id
      cung {
        id
        name
      }
      loiGiais: ketQua {
        id
        cung {
          name
        }
        chinhTinh {
          id
          name
        }
        phuTinh {
          id
          name
        }
        giai
      }
    }
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
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
export default function ketQuas({ newKetQua, setNewKetQua }) {
  const classes = useStyles();
  const [moreResult, setMore] = useState(true);
  const [newKQ, setNewKQ] = useState();
  let { data, loading, error, fetchMore, refetch } = useQuery(query, {
    variables: { limit: 3, skip: 0 },
  });
  let allKetQuas = data?.allKetQuas;

  if (newKetQua && !newKQ) {
    setNewKQ(newKetQua);
    setNewKetQua(false);
    refetch();
  }

  function loadingMore() {
    let count = data?.allKetQuas.length;
    fetchMore({
      variables: {
        limit: 1 ,
        skip: count ,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          setMore(false);
          return prev;
        }
        return Object.assign({}, prev, {
          allKetQuas: [...prev.allKetQuas, ...fetchMoreResult.allKetQuas],
        });
      },
    });
  }
  return !loading ? (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        {allKetQuas?.length ? (
          allKetQuas?.map((ketQua) => (
            <LoiGiais ketQua={ketQua} newKetQua={newKQ} />
          ))
        ) : (
          <Typography variant="body1" gutterBottom>
            Danh sách kết quả trỗng.
          </Typography>
        )}
        {moreResult && allKetQuas?.length ? (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={loadingMore}
            className={classes.button}
          >
            Xem thêm
          </Button>
        ) : null}
      </Grid>
    </Paper>
  ) : (
    <Skeleton animation="wave" variant="rect" height="60vh" />
  );
}
