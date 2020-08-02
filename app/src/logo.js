import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Logo() {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <img src="/logo.png" style={{ width: "100%", maxWidth: "200px" }} />
    </Grid>
  );
}
