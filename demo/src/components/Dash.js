import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Header from "./Header";
import { Link, useLocation } from "react-router-dom";
export default function Dash() {
  return (
    <>
      <Grid container className="backs">
        <Grid className="mainbox" sm={12} md={12} xs={12}>
          <Header />

          <Box className="orderFood">
            <Typography  className="ord" >
            <Box component="div" sx={{ display: 'inline',fontSize:"60px",fontFamily:"sans-serif" }}>O</Box>rder Your Favourite Food & Easy Pickup
            </Typography>
            <Button
              sx={{ mt: "20px" }}
              variant="contained"
              className="ckeckOut "
            >
              <Link to="/menu" className="u" >Order Now</Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
