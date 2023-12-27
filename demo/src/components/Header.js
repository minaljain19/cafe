import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import lg from "../lg.png";
import lgg from "./menuItem/lgg.png";
import bag from "./menuItem/bag.png";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { addData } from "./../action";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Drawer from "./Drawer";
import { useNavigate } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
function Header(props) {
  const navigate = useNavigate();
  const { list } = props;
  function goCart() {
    navigate("/cart");
  }
  function goOrder() {
    navigate("/orders");
  }
  function goHome() {
    navigate("/");
  }
  function goMenu() {
    navigate("/menu");
  }
  function goContact() {
    navigate("/contact");
  }
  const dispatch = useDispatch();
  return (
    <>
      <Box className="navFixed">
        <AppBar className="navb" position="static">
          <Toolbar>
            <Drawer />
            <Typography sx={{ display: "inline" }} className="newFont">
              Caffein
              {/* <img src={lgg} className="logo" /> */}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left", fontFamily: "Cabin" }}
            ></Typography>
            <Grid sx={{ display: { xs: "none", sm: "flex" } }}>
              <Button color="inherit" onClick={goHome}>
                <Link to="/" className="nabMenuu">
                  Home
                </Link>
              </Button>
              <Button color="inherit" onClick={goMenu}>
                <Link to="/menu" className="nabMenuu">
                  Menu
                </Link>
              </Button>

              <Button color="inherit" onClick={goOrder}>
                <Link to="/orders" className="nabMenuu">
                  {/* <ShoppingBagIcon /> */}
                  Orders
                </Link>
              </Button>
              <Button color="inherit" onClick={goContact}>
                <Link to="/contact" className="nabMenuu">
                  {/* <ShoppingBagIcon /> */}
                  Contact us
                </Link>
              </Button>
            </Grid>
            <Button color="inherit" onClick={goCart}>
              <Link to="/cart" className="nabMenuu">
                <Badge badgeContent={list.length} color="error">
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </Badge>
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    list: state?.menuReducers?.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {},

    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
