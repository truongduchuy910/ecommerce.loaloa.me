import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Paper,
  Stepper,
  StepLabel,
  Typography,
  Link,
  Step,
  Button,
} from "@material-ui/core";
import Customer from "./Customer";
import OrderItem from "./orderItem";
import formatMoney from "../lib/formatMoney";
import { gql, useMutation } from "@apollo/client";
import { getErrorMessage } from "../lib/form";
import { useState } from "react";
const steps = ["Đặt", "Xử lí", "Giao", "Thanh toán"];
const updateStepQuery = gql`
  mutation($id: ID!, $step: Int) {
    updateOrder(id: $id, data: { step: $step }) {
      id
    }
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  btn: { marginTop: theme.spacing(2) },
}));
export default function Order({ order, nextStep }) {
  const classes = useStyles();
  const [updateStep] = useMutation(updateStepQuery);
  const [errorMsg, setErrorMsg] = useState();

  const [activeStep, setActiveStep] = React.useState(0);
  async function handleNext({ id, step }) {
    try {
      const { data } = await updateStep({ variables: { id, step } });
      nextStep();
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }
  return (
    <Paper className={classes.root}>
      <Stepper activeStep={order?.step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography variant="body1">Đơn:</Typography>
      <Typography variant="body2" color="textSecondary">
        Cập nhật lúc:{" "}
        <Link color="primary">
          {new Date(order?.time).toLocaleString("tr-TR")}
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Id: <Link color="primary">#{order?.id}</Link>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Tổng: <Link color="primary">{formatMoney(order?.total, 0)}</Link>
      </Typography>
      <Customer customer={order?.customer} />
      <OrderItem items={order?.items} />
      {order.step < 4 ? (
        <Button
          size="small"
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={() => handleNext({ id: order.id, step: order.step + 1 })}
        >
          Đã {steps[order.step]} xong
        </Button>
      ) : null}
    </Paper>
  );
}
