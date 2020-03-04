import { Container, Box, Grid, TextField, Button } from "@material-ui/core";

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <form
              noValidate
              autoComplete="off"
              action="/admin/signin/"
              method="post"
            >
              <TextField label="Tài khoản" name="identity" variant="outlined" />
              <TextField
                label="Mật khẩu"
                name="secret"
                variant="outlined"
                type="password"
              />
              <Button variant="outline" color="primary" type="submit">
                Đăng nhập
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
