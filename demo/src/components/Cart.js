import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Header from "./Header";
import { TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { incr, removeItem, placeOrder, getOrderDetail } from "./../action";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import SnackbarContent from "@mui/material/SnackbarContent";
import Snackbar from "@mui/material/Snackbar";

function Cart(props) {
  const [open1, setOpen1] = useState(false);
  const handleClick = () => {
    setOpen1(true);
  };

  const handleClose1 = (reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };
  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      {/* <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton> */}
    </React.Fragment>
  );
  var today = new Date();
  const navigate = useNavigate();
  const { list, incr, removeItem, placeOrder, orderData, getOrderDetail } =
    props;
  const dispatch = useDispatch();
  console.log("cart me data", list);
  const [open, setOpen] = React.useState(false);
  const [orderDetail, setOrderDetail] = useState({
    id: Math.random(),
    name: "",
    des: "",
    phno: "",
    date:
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    price: "",
    items: list,
  });
  const handleClickOpen = () => {
    setOpen(true);
    setOrderDetail((prevState) => ({
      ...prevState,
      price: list.reduce((a, v) => (a = a + parseInt(v.price)), 0),
      items: list,
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleName(event) {
    console.log(event.target.value);
    setOrderDetail((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }
  function ordPlace() {
    placeOrder(orderDetail, setOpen(false));
    setTimeout(getDetail, 500);
  }
  function getDetail() {
    {
      getOrderDetail();
      navigate("/orders");
    }
  }
  const placeOrd = () => {
    if (orderDetail.name === "" || orderDetail.phno == "") {
      alert("Name and Mobile No cannot be blank.");
    } else if(orderDetail.phno.length !=10){
      alert("Enter valid Mobile No.");
    }else if(orderDetail.name.match(/\d/)){
      alert("Name cannot contain Numbers and special symbols.");

    }
    else {
      orderDetail.items.length == 0
        ? setOpen1(true, setOpen(false))
        : ordPlace();
    }
  };
  const remItem = (id) => {
    removeItem(id);
  };
  console.log("myorder", orderDetail);
  console.log("ioew", orderData);
  const [change, setChange] = useState(false);
  useEffect(
    () => {
      setChange(false);
    },
    [change],
    [orderDetail]
  );

  return (
    <div className="back backs">
      <Snackbar
        open={open1}
        autoHideDuration={1400}
        onClose={handleClose1}
        action={action}
      >
        <SnackbarContent
          style={{
            backgroundColor: "rgb(114, 39, 39)",
          }}
          message={
            <span id="client-snackbar">
              Please add Item in cart Than palce order
            </span>
          }
        />
      </Snackbar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              sx={{ mt: "20px", mb: "20px" }}
              name="name"
              onChange={handleName}
              fullWidth
              placeholder="Name"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              className="infoForOrder"
            />
            <TextField
              sx={{ mb: "20px" }}
              className="infoForOrder"
              fullWidth
              name="phno"
              onChange={handleName}
              placeholder="Mobile Nummber"
              variant="filled"
              InputProps={{ disableUnderline: true }}
            />
            <Button className="addOrder" onClick={placeOrd}>
              ADD
            </Button>
            <Button className="addOrder" onClick={handleClose}>
              Cancel
            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button className="edd" value={data.id} onClick={delData}>
                <DeleteIcon />
              </Button> */}

          {/* <Button onClick={handleClose}>No</Button> */}
          {/* <Button onClick={handleClose} autoFocus>
                Agree
              </Button> */}
        </DialogActions>
      </Dialog>
      <Header />

      <Grid sm={10} md={10} xs={11} container className="box2">
        <TableContainer component={Paper} className="tableBoxShadow">
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell className="heading">SNO</TableCell>
                <TableCell className="heading">Name</TableCell>
                <TableCell className="heading">Qualtity</TableCell>
                <TableCell className="heading">Price</TableCell>
                <TableCell className="heading">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item, index) => (
                <TableRow key="12">
                  <TableCell sx={{ fontWeight: "bold" }}>{index + 1}</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>{item.name}</TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      className="plus1"
                      variant="contained"
                      onClick={() =>
                        incr(
                          "I",
                          item.id,
                          item.qunatity,
                          item.price,
                          setChange(true)
                        )
                      }
                    >
                      +
                    </Button>
                    <Button className="minus" variant="contained">
                      {item.qunatity}
                    </Button>
                    <Button
                      className="plus"
                      variant="contained"
                      onClick={() =>
                        incr(
                          "D",
                          item.id,
                          item.qunatity,
                          item.price,
                          setChange(true)
                        )
                      }
                    >
                      -
                    </Button>
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className="removebut"
                      color="warning"
                      onClick={() => remItem(item.id)}
                    >
                      X
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {/* <TableRow key="12">
                  <TableCell>
                    <Button
                      variant="contained"
                      className="removebut"
                      color="warning"
                    >
                      X
                    </Button>
                  </TableCell>

                  <TableCell>Pizza</TableCell>
                  <TableCell>
                    <Button className="plus1" variant="contained">
                      +
                    </Button>
                    <Button className="minus" variant="contained">
                      1
                    </Button>
                    <Button className="plus" variant="contained">
                      -
                    </Button>
                  </TableCell>
                  <TableCell>400</TableCell>
                </TableRow> */}

              <TableRow key="12">
                <TableCell colSpan={5}>
                  <TextField
                    variant="filled"
                    className="textForExtra"
                    onChange={handleName}
                    name="des"
                    color="danger"
                    InputProps={{ disableUnderline: true }}
                    fullWidth
                    placeholder="Add any additional info about your order"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4} sx={{ fontSize: "25px" }}>
                  Subtotal
                </TableCell>
                <TableCell sx={{ fontSize: "25px" }}>
                  RS.{list.reduce((a, v) => (a = a + parseInt(v.price)), 0)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={4}></TableCell>
                <TableCell colSpan={1}>
                  <Button
                    variant="contained"
                    className="ckeckOut1"
                    onClick={handleClickOpen}
                  >
                    Checkout
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    list: state?.menuReducers?.list,
    orderData: state?.menuReducers?.orderData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      incr,
      removeItem,
      placeOrder,
      getOrderDetail,
    },

    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
