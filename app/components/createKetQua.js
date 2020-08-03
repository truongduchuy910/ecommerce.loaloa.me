import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

import Cung from "./cung";
import CungVi from "./cungVi";
import AllChinhTinhs from "./chinhTinhs";
import AllPhuTinhs from "./phuTinhs";
import { layCung } from "../lib/laSoAdapter";
import { getErrorMessage } from "../lib/form";

const createKetQuaMutation = gql`
  mutation(
    $cung: CungWhereUniqueInput
    $cungVi: CungViWhereUniqueInput
    $chinhTinhs: [TinhWhereUniqueInput]
    $phuTinhs: [PhuTinhWhereUniqueInput]
  ) {
    createKetQua(
      data: {
        cung: { connect: $cung }
        cungVi: { connect: $cungVi }
        chinhTinh: { connect: $chinhTinhs, disconnectAll: true }
        phuTinh: { connect: $phuTinhs, disconnectAll: true }
      }
    ) {
      id
      cung {
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
}));
const createKetQuas = ({ laSoTuVi, onCreate }) => {
  const [createKetQua] = useMutation(createKetQuaMutation);
  const router = useRouter();

  //
  const [loading, setLoading] = useState(false);
  // alert
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  // autocomplete
  const [autocomplete, setAuto] = useState(true);
  const [autoEnable, setAutoEnable] = useState(false);
  // autocomplete = true data from "laSoTuVi"
  const [DX, setDX] = useState();
  const [T1, setT1] = useState();
  const [T2, setT2] = useState();
  const [XC, setXC] = useState();
  // // autocomplete = false data from child state
  const [C, setC] = useState();
  const [CV, setCV] = useState();
  const [CT, setCT] = useState([]);
  const [PT, setPT] = useState([]);
  const [PTT1, setPTT1] = useState([]);
  const [PTT2, setPTT2] = useState([]);
  const [PTXC, setPTXC] = useState([]);

  useEffect(() => {
    setAutoEnable(Boolean(laSoTuVi));
  });
  function handleCungChange(cung) {
    setC(cung);

    if (cung && laSoTuVi && autocomplete) {
      let { DX, T1, T2, XC } = layCung({
        cung,
        thapNhiCung: laSoTuVi.thapNhiCung,
      });
      setDX(DX);
      setT1(T1);
      setT2(T2);
      setXC(XC);
    }
  }
  function handleChangeCheckBox(event) {
    setAuto(event.target.checked);
  }
  async function handleSubmit() {
    setLoading(true);
    const variables = {
      cung: { id: C?.id },
      cungVi: { id: CV?.id },
      chinhTinhs: WhereUniqueInput(CT),
      phuTinhs: WhereUniqueInput(
        PT.concat(PTT1)
          .concat(PTT2)
          .concat(PTXC)
      ),
    };
    try {
      const { data } = await createKetQua({
        variables,
      });
      onCreate(data?.createKetQua);
      setLoading(false);
    } catch (error) {
      setAlertMessage(getErrorMessage(error));
      setAlertOpen(true);
      setLoading(false);
      await router.push("/");
    }
  }
  const alertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Cung onChange={handleCungChange} />
        </Grid>
        <Grid item xs={12}>
          <CungVi
            cung={autocomplete ? DX : false}
            setCung={setDX}
            CV={CV}
            setCV={setCV}
          />
        </Grid>
        <Grid item xs={12}>
          <AllChinhTinhs
            cung={autocomplete ? DX : false}
            setCung={setDX}
            CT={CT}
            setCT={setCT}
          />
        </Grid>
        <Grid item xs={12}>
          <AllPhuTinhs cung={DX} setCung={setDX} PT={PT} setPT={setPT} />
        </Grid>
        <Grid item xs={12}>
          <AllPhuTinhs
            label={T1 ? "Tam hợp " + T1.cungChu : false}
            cung={autocomplete ? T1 : false}
            setCung={setT1}
            PT={PTT1}
            setPT={setPTT1}
          />
        </Grid>
        <Grid item xs={12}>
          <AllPhuTinhs
            label={T2 ? "Tam hợp " + T2.cungChu : false}
            cung={autocomplete ? T2 : false}
            setCung={setT2}
            PT={PTT2}
            setPT={setPTT2}
          />
        </Grid>
        <Grid item xs={12}>
          <AllPhuTinhs
            label={XC ? "Xung chiếu " + XC.cungChu : false}
            cung={autocomplete ? XC : false}
            setCung={setXC}
            PT={PTXC}
            setPT={setPTXC}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                disabled={!autoEnable}
                checked={autocomplete}
                onChange={handleChangeCheckBox}
                name="checkedB"
                color="primary"
              />
            }
            label="Tự động điền từ lá sô?"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            {loading ? (
              <React.Fragment>
                <CircularProgress
                  size={24.5}
                  color="secondary"
                  style={{ marginRight: 15 }}
                />{" "}
                Vui lòng đợi
              </React.Fragment>
            ) : (
              "Xem Kết Quả"
            )}
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={alertOpen}
        onClose={alertClose}
        autoHideDuration={3000}
        message={alertMessage}
      />
    </Paper>
  );
};
export default createKetQuas;
function WhereUniqueInput(array) {
  if (!array) return [];
  let result = [];
  array.map((item) => result.push({ id: item.id }));
  return result;
}
