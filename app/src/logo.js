import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Logo() {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <img src="/img/logo.png" style={{ maxWidth: "50%" }} />
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: 21, marginBottom: 21 }}
      >
        Loa Loa Team
      </Typography>
    </Grid>
  );
}
