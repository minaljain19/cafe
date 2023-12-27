import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import EachItem from "./EachItem";
import Button from "@mui/material/Button";
import lg from "../lg.png";
import ch from "./menuItem/chinese.jpg";
import sd from "./menuItem/snad.jpg";
import pizza from "./menuItem/pizza.jpg";
import shak from "./menuItem/shak.jpg";
import burgar from "./menuItem/burgar.jpg";
import sabji from "./menuItem/sabji.jpg";
import roti from "./menuItem/rotii.jpg";
import Header from "./Header";
import drink from "./menuItem/drink.jpg";
import fries from "./menuItem/Fries.jpg";
import rice from "./menuItem/rice.jpg";
import momo from "./menuItem/momo.jpg";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { getApi, getOrderDetail } from "./../action";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
function Menu(props) {
  const { getApi, apidata ,getOrderDetail} = props;
  const dispatch = useDispatch();
  const [foodData, setData] = useState([]);
  const [searchName, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function searchItem(event) {
    setSearchData(event.target.value);
    console.log(event.target.value);
    let name = event.target.value;
    let query = name.toLowerCase();
    const newList = apidata.filter((item) => item.names.toLowerCase().includes(query));
    console.log("new List", newList);
    setFilteredData(newList);
  }

  // const apidata = [
  //   {
  //     type: "item1",
  //     name: "pizza",
  //     photo: pizza,
  //   },
  //   {
  //     type: "item1",
  //     name: "burgar",
  //     photo: burgar,
  //   },
  //   {
  //     type: "item1",
  //     name: "fries",
  //     photo: fries,
  //   },
  //   {
  //     type: "item1",
  //     name: "sandwitch",
  //     photo: sd,
  //   },

  //   {
  //     type: "item1",
  //     name: "momos",
  //     photo: momo,
  //   },
  //   {
  //     type: "item2",
  //     name: "mocktails",
  //     photo: drink,
  //   },
  //   {
  //     type: "item2",
  //     name: "shakes",
  //     photo: shak,
  //   },
  //   {
  //     type: "item3",
  //     name: "rice",
  //     photo: rice,
  //   },

  //   {
  //     type: "item3",
  //     name: "vegatable",
  //     photo: sabji,
  //   },
  //   {
  //     type: "item3",
  //     name: "chapati",
  //     photo: roti,
  //   },
  // ];
  // const apidata1 = [
  //   {
  //     name: "Mocktails",
  //     photo: drink,
  //   },
  //   {
  //     name: "Shakes",
  //     photo: shak,
  //   },
  // ];
  // const apidata2 = [
  //   {
  //     name: "Rice",
  //     photo: rice,
  //   },

  //   {
  //     name: "Vegatable",
  //     photo: sabji,
  //   },
  //   {
  //     name: "Chapati",
  //     photo: roti,
  //   },
  // ];
  useEffect(() => {
    if (searchName === "") {
      setData(apidata);
    } else {
      setData(filteredData); // Step 2: Set the data to be displayed as the filteredData
    }
  }, [filteredData, searchName]);
  useEffect(() => {
    getApi();
    getOrderDetail();
    console.log("minal data", apidata);
  }, []);
  useEffect(() => {
    if (apidata?.length > 0) {
      setData(apidata);
    }
  });

  return (
    <div className="backs back">
      <Header />
      {/* <EachItem /> */}
      <Grid sm={12} ms={12} xs={12} container className="searchGrid">
        <TextField
          className="searchBar"
          name="name"
          fullWidth
          onKeyUp={searchItem}
          placeholder="Search Here "
          variant="filled"
          InputProps={{ disableUnderline: true }}
        />
      </Grid>

      <Grid className="mainCourse">
        <Grid className="upperlayer">
          <h2>Starters</h2>
        </Grid>
      </Grid>
      {searchName.length > 0 ? (
        <Grid sm={10} md={10} xs={12} container className="box1">
          {filteredData?.map((item) => {
            if (item.type == "item1") {
              let ul = "/item/" + item.names;
              return (
                <Grid sm={2.5} md={2.5} xs={4.7} className="newBx">
                  <Link to={ul} className="linkAll">
                    <img src={item.photo} className="menuIcons" />
                    <Typography>{item.names}</Typography>
                  </Link>
                </Grid>
              );
            }
          })}
        </Grid>
      ) : (
        <Grid sm={10} md={10} xs={12} container className="box1">
          <Grid container>
            {foodData?.map((item) => {
              if (item.type == "item1") {
                let ul = "/item/" + item.names;
                return (
                  <Grid sm={2.5} md={2.5} xs={4.7} className="menuItem">
                    <Link to={ul} className="linkAll">
                      <img src={item.photo} className="menuIcons" />
                      <Typography>{item.names}</Typography>
                    </Link>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
      )}

      <Grid className="mainCourse1">
        <Grid className="upperlayer">
          <h2>Drinks</h2>
        </Grid>
      </Grid>
      {searchName.length > 0 ? (
        <Grid sm={10} md={10} xs={12} container className="box1">
          {filteredData?.map((item) => {
            if (item.type == "item2") {
              let ul = "/item/" + item.names;
              return (
                <Grid sm={2.5} md={2.5} xs={4.7} className="newBx">
                  <Link to={ul} className="linkAll">
                    <img src={item.photo} className="menuIcons" />
                    <Typography>{item.names}</Typography>
                  </Link>
                </Grid>
              );
            }
          })}
        </Grid>
      ) : (
        <Grid sm={10} md={10} xs={12} container className="box1">
          <Grid container>
            {foodData?.map((item) => {
              if (item.type == "item2") {
                let ul = "/item/" + item.names;
                return (
                  <Grid sm={2.5} md={2.5} xs={4.5} className="menuItem">
                    <Link to={ul} className="linkAll">
                      <img src={item.photo} className="menuIcons" />
                      <Typography>{item.names}</Typography>
                    </Link>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
      )}

      <Grid className="mainCourse">
        <Grid className="upperlayer">
          <h2>Main Course</h2>
        </Grid>
      </Grid>

      {searchName.length > 0 ? (
        <Grid sm={10} md={10} xs={12} container className="box1">
          {filteredData?.map((item) => {
            if (item.type == "item3") {
              let ul = "/item/" + item.names;
              return (
                <Grid sm={2.5} md={2.5} xs={4.5} className="newBx">
                  <Link to={ul} className="linkAll">
                    <img src={item.photo} className="menuIcons" />
                    <Typography>{item.names}</Typography>
                  </Link>
                </Grid>
              );
            }
          })}
        </Grid>
      ) : (
        <Grid sm={10} md={10} xs={12} container className="box1">
          <Grid container>
            {foodData?.map((item) => {
              if (item.type == "item3") {
                let ul = "/item/" + item.names;
                return (
                  <Grid sm={2.5} md={2.5} xs={4.5} className="menuItem">
                    <Link to={ul} className="linkAll">
                      <img src={item.photo} className="menuIcons" />
                      <Typography>{item.names}</Typography>
                    </Link>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    apidata: state?.menuReducers?.apidata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getApi,
      getOrderDetail
    },

    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
