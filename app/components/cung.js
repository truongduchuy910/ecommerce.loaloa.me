import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Skeleton from "@material-ui/lab/Skeleton";
import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const query = gql`
  query {
    allCungs {
      id
      name
    }
  }
`;
export default function cung({ onChange }) {
  const { data, loading, error } = useQuery(query);
  const shouldRedirect = !(loading || data);
  const router = useRouter();
  useEffect(() => {
    if (shouldRedirect) {
      router.push("/signin");
    }
  }, [shouldRedirect]);

  return data?.allCungs && !loading ? (
    <Autocomplete
      onChange={(event, value) => onChange(value)}
      size="small"
      options={data.allCungs}
      getOptionLabel={(option) => {
        if (option) return option.name;
      }}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Cung" />
      )}
    />
  ) : (
    <Skeleton variant="rect" height={40} />
  );
}
