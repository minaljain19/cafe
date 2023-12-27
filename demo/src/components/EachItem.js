import { Navigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import lg from "../lg.png";
import * as React from "react";

import SnackbarContent from "@mui/material/SnackbarContent";
import Snackbar from "@mui/material/Snackbar";
import ch from "./menuItem/chinese.jpg";
import sd from "./menuItem/snad.jpg";
import pizza from "./menuItem/pizza.jpg";
import c3 from "./menuItem/3c.jpeg";
import kitkat from "./menuItem/kitkat.jpg";
import sand1 from "./menuItem/sand1.jpg";
import otc from "./menuItem/otc.jpg";
import oreo from "./menuItem/oreo.jpg";
import panerburgar from "./menuItem/panerburgar.jpg";
import panermomo from "./menuItem/panermomo.jpg";
import peri from "./menuItem/peri.jpg";
import shak from "./menuItem/shak.jpg";
import burgar from "./menuItem/burgar.jpg";
import Header from "./Header";
import drink from "./menuItem/drink.jpg";
import spbugar from "./menuItem/spburgr.jpg";
import fries from "./menuItem/Fries.jpg";
import rice from "./menuItem/rice.jpg";
import momo from "./menuItem/momo.jpg";
import Paan from "./menuItem/paan.jpg";
import blue from "./menuItem/blue.jpg";
import mint from "./menuItem/mint.jpg";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { StepContext } from "@mui/material";

import { addData, getApi } from "./../action";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function EachItem(props) {
  const { addData, list, getApi, apidata } = props;
  const dispatch = useDispatch();
  console.log("form me  data", list);
  const { name } = useParams();
  console.log("day name", name);
  const [t, setT] = useState(0);
  const [items, setItems] = useState([]);

  // const eachItemDes = [
  //   {
  //     names: "pizza",
  //     catrgory: [
  //       {
  //         id: "101",
  //         name: "OTC PIZZA",
  //         price: "300",
  //         eachPrice: "300",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: otc,
  //         qunatity: 1,
  //       },
  //       {
  //         id: "102",
  //         name: "3C PIZZA",
  //         price: "400",
  //         eachPrice: "400",
  //         description: "Included capsicum,corn,tomato with extra cheese",
  //         photo: c3,
  //         qunatity: 1,
  //       },
  //       {
  //         id: "103",
  //         name: "Special PIZZA",
  //         price: "600",
  //         eachPrice: "600",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: pizza,
  //         qunatity: 1,
  //       },
  //     ],
  //   },
  //   {
  //     names: "Burger",
  //     catrgory: [
  //       {
  //         id: "104",
  //         eachPrice: "300",
  //         name: "Panner Tikka Burgar",
  //         price: "300",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: panerburgar,
  //         qunatity: 1,
  //       },
  //       {
  //         id: "105",
  //         name: "Aloo Tikki",
  //         price: "400",
  //         eachPrice: "400",
  //         description: "Included capsicum,corn,tomato with extra cheese",
  //         photo: burgar,
  //         qunatity: 1,
  //       },
  //       {
  //         id: "106",
  //         name: "Special Burgar",
  //         price: "600",
  //         eachPrice: "600",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: spbugar,
  //         qunatity: 1,
  //       },
  //     ],
  //   },
  //   {
  //     names: "Sandwitch",
  //     catrgory: [
  //       {
  //         id: "107",
  //         name: "Panner Tikka Sandwitch",
  //         price: "300",
  //         eachPrice: "300",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: sand1,
  //         qunatity: 1,
  //       },
  //       {
  //         id: "108",
  //         name: "Aloo Tikki Sandwitch",
  //         price: "400",
  //         eachPrice: "400",
  //         description: "Included capsicum,corn,tomato with extra cheese",
  //         photo: sd,
  //         qunatity: 1,
  //       },
  //       {
  //         id: "109",
  //         name: "Double cheese sandwitch",
  //         price: "600",
  //         eachPrice: "600",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: sand1,
  //         qunatity: 1,
  //       },
  //     ],
  //   },

  //   {
  //     names: "Fries",
  //     catrgory: [
  //       {
  //         id: "122",
  //         name: "Peri peri fries",
  //         price: "300",
  //         eachPrice: "300",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: peri,
  //         qunatity: 1,
  //       },
  //       {
  //         id: "123",
  //         name: "Special fries",
  //         price: "100",
  //         eachPrice: "100",
  //         description: "Included capsicum,corn,tomato with extra cheese",
  //         photo: fries,
  //         qunatity: 1,
  //       },
  //       {
  //         id: "124",
  //         name: "tandorri fries",
  //         price: "300",
  //         eachPrice: "300",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: peri,
  //         qunatity: 1,
  //       },
  //     ],
  //   },
  //   {
  //     names: "Momos",
  //     catrgory: [
  //       {
  //         id: "110",
  //         name: "Paneer tandoori momos",
  //         price: "300",
  //         eachPrice: "300",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: panermomo,
  //         qunatity: 1,
  //       },
  //       {
  //         id: "111",
  //         name: "Special Momos",
  //         price: "550",
  //         eachPrice: "550",
  //         description: "Included capsicum,corn,tomato with extra cheese",
  //         photo: momo,
  //         qunatity: 1,
  //       },
  //       {
  //         id: "112",
  //         name: "veg momos",
  //         price: "300",
  //         eachPrice: "300",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: momo,
  //         qunatity: 1,
  //       },
  //     ],
  //   },
  //   {
  //     names: "vegatable",
  //     catrgory: [
  //       {
  //         eachPrice: "120",
  //         id: "154",
  //         name: "Panner Angara",
  //         price: "300",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: rice,
  //         qunatity: 1,
  //       },
  //       {
  //         eachPrice: "600",
  //         id: "155",
  //         name: "Chole fry",
  //         price: "600",
  //         description: "Included capsicum,corn,tomato with extra cheese",
  //         photo: rice,
  //         qunatity: 1,
  //       },
  //       {
  //         eachPrice: "200",
  //         id: "156",
  //         name: "sev tamatar",
  //         price: "200",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: rice,
  //         qunatity: 1,
  //       },
  //     ],
  //   },

  //   {
  //     names: "Chapati",
  //     catrgory: [
  //       {
  //         eachPrice: "150",
  //         id: "150",
  //         name: "Tandoori Naan",
  //         price: "300",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: rice,
  //         qunatity: 1,
  //       },
  //       {
  //         eachPrice: "600",
  //         id: "151",
  //         name: "Lacha paratha",
  //         price: "80",
  //         description: "Included capsicum,corn,tomato with extra cheese",
  //         photo: rice,
  //         qunatity: 1,
  //       },
  //       {
  //         eachPrice: "200",
  //         id: "152",
  //         name: "Rommali roti",
  //         price: "200",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: rice,
  //         qunatity: 1,
  //       },
  //     ],
  //   },

  //   {
  //     names: "Rice",
  //     catrgory: [
  //       {
  //         eachPrice: "300",
  //         id: "113",
  //         name: "Fried Rice",
  //         price: "300",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: rice,
  //         qunatity: 1,
  //       },
  //       {
  //         eachPrice: "600",
  //         id: "114",
  //         name: "sejwan fried Rice",
  //         price: "600",
  //         description: "Included capsicum,corn,tomato with extra cheese",
  //         photo: rice,
  //         qunatity: 1,
  //       },
  //       {
  //         eachPrice: "200",
  //         id: "115",
  //         name: "Biryani",
  //         price: "200",
  //         description: "Included Onion,capsicum,corn with extra cheese",
  //         photo: rice,
  //         qunatity: 1,
  //       },
  //     ],
  //   },
  //   {
  //     names: "Shakes",
  //     catrgory: [
  //       {
  //         eachPrice: "300",
  //         qunatity: 1,
  //         id: "116",
  //         name: "Oreo Shake",
  //         price: "300",
  //         description: "Included chocolates",
  //         photo: oreo,
  //       },
  //       {
  //         eachPrice: "300",
  //         id: "117",
  //         name: "Kitkat Shake",
  //         qunatity: 1,
  //         price: "300",
  //         description: "Included capsicum,corn,tomato with extra cheese",
  //         photo: kitkat,
  //       },
  //       {
  //         name: "Hazelnut shake",
  //         eachPrice: "200",
  //         qunatity: 1,
  //         id: "118",
  //         price: "200",
  //         description: "Included extra choco",
  //         photo: shak,
  //       },
  //     ],
  //   },
  //   {
  //     names: "Mocktails",
  //     catrgory: [
  //       {
  //         eachPrice: "300",
  //         qunatity: 1,
  //         id: "119",
  //         name: "Paan Mojito",
  //         price: "300",
  //         description: "Included chocolates",
  //         photo: Paan,
  //       },
  //       {
  //         eachPrice: "120",
  //         id: "120",
  //         name: "Blue Lagon",
  //         qunatity: 1,
  //         price: "120",
  //         description: "Included capsicum,corn,tomato with extra cheese",
  //         photo: blue,
  //       },
  //       {
  //         eachPrice: "140",
  //         id: "121",
  //         name: "Mint mojito",
  //         qunatity: 1,
  //         price: "140",
  //         description: "Included extra choco",
  //         photo: mint,
  //       },
  //     ],
  //   },
  // ];
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(true);
  };
  if (apidata) {
    console.log("minal is", apidata);
  }
  const handleClose = (reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
  const newList = apidata.filter((item) => item.names === name);
  const type = newList[0].catrgory;
  console.log(newList, type);

  function incr(id) {
    const updateList = items.map((curElem) => {
      if (curElem.id == id) {
        curElem.qunatity = curElem.qunatity + 1;
      }
      return curElem;
    });
    console.log(updateList);
    setItems(updateList);
  }
  function backAction() {
    navigate(-1);
  }
  function decr(id) {
    const updateList = items.map((curElem) => {
      if (curElem.id == id) {
        if (curElem.qunatity > 1) {
          curElem.qunatity = curElem.qunatity - 1;
        }
      }
      return curElem;
    });
    console.log(updateList);
    setItems(updateList);
  }
  useEffect(() => {
    console.log("data");
  }, [items]);
  useEffect(() => {
    setT(1);
    setItems(type);
  }, []);
  useEffect(() => {
    getApi();
    console.log("minal data", apidata);
  }, []);
  return (
    <div className="back backs">
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        action={action}
      >
        <SnackbarContent
          style={{
            backgroundColor: "rgb(114, 39, 39)",
          }}
          message={<span id="client-snackbar">Item Added Successfully</span>}
        />
      </Snackbar>
      <Header />
      <Button
        className="backBut"
        sx={{
          mt: { xs: "20px !important", sm: "10px !important" },
          mb: { xs: "0px !important", sm: "-30px !important" },
        }}
        onClick={backAction}
        variant="outlined"
      >
        <ArrowBackIosIcon sx={{ fontSize: "18px" }} />
        Back
      </Button>
      <Grid container item>
        <Grid sm={10} md={10} xs={12} container className="box2 boxForEachitem">
          {t != 0 ? (
            <>
              {items.map((item) => {
                return (
                  <Grid
                    sm={10}
                    md={10}
                    xs={12}
                    container
                    className="eachItemDetail"
                  >
                    <Grid sm={3} md={2} xs={3} sx={{ textAlign: "center" }}>
                      <img src={item.photo} className="menuIcons" />
                    </Grid>
                    <Grid sm={7} md={7} xs={7} className="itemNames">
                      <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                        {item.name} <br />
                        Rs.{item.price}
                      </Typography>
                      <Typography sx={{ mt: "0px", mb: "2px" }}>
                        {item.description}
                      </Typography>
                    </Grid>
                    <Grid sm={6} md={2} xs={11.5}>
                      <Button
                        sx={{ mt: { xs: 0, sm: 5 } }}
                        variant="contained"
                        onClick={() => addData(item, setOpen(true))}
                        className="addbutton"
                      >
                        ADD
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
            </>
          ) : (
            <h2>DS</h2>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state?.menuReducers?.list,
    apidata: state?.menuReducers?.apidata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addData,
      getApi,
    },

    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EachItem);
