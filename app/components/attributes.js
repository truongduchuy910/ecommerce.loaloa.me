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
    allAttributes(first: $limit) {
      id
      name
    }
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
export default function AttributeItem() {
  const classes = useStyles();
  let { data, loading, error, fetchMore, refetch } = useQuery(query, {
    variables: { limit: 6 },
  });
  let allAttributes = data?.allAttributes;
  console.log(allAttributes);
  return (
    <React.Fragment>
      <Autocomplete
        multiple
        id="tags-standard"
        options={allAttributes}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
    </React.Fragment>
  );
}
