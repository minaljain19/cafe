import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import EachItem from "./EachItem";
import Button from "@mui/material/Button";

import Header from "./Header";

import contct from "./menuItem/contct.jpg";

export default function Contact() {
  return (
    <div className="back1 backs">
      <Header />
      {/* <EachItem /> */}
      <Grid
        className="contactGrid"
        sx={{ py: { xs: 1, sm: 16.3 } }}
        container
        sm={12}
        md={12}
        xs={12}
      >
        <Grid className="contactGrid1" sm={4} md={2.7} xs={10}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: "15px" }}>
            {" "}
            Opening Hours
          </Typography>
          <Typography className="time"> Monday 11:30 am - 10:00 pm</Typography>
          <Typography className="time"> Tuesday 11:30 am - 10:00 pm</Typography>
          <Typography className="time">
            {" "}
            Wednesday 11:30 am - 10:00 pm
          </Typography>
          <Typography className="time">
            {" "}
            Thrusday 11:30 am - 10:00 pm
          </Typography>
          <Typography className="time"> Friday 11:30 am - 10:00 pm</Typography>
          <Typography className="time">
            {" "}
            Saturday 11:30 am - 10:00 pm
          </Typography>
          <Typography className="time"> Sunday 11:30 am - 10:00 pm</Typography>
        </Grid>
        <Grid className="contactGrid1" sm={3} md={2.2} xs={10}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: "15px" }}>
            Address
          </Typography>
          <Typography className="time1"> Caffein cafe,</Typography>
          <Typography className="time1"> University Rd, </Typography>
          <Typography className="time1"> Ganapati Nagar, Udaipur,</Typography>
          <Typography className="time1"> Rajasthan 313001,</Typography>
          <Button className="ckeckOut14">Find On Map</Button>
        </Grid>
        <Grid className="contactGrid1" sm={4} md={2.2} xs={10}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: "15px" }}>
            Find Us
          </Typography>
          <Typography className="time1"> Mobile No -984984493</Typography>
          <Typography className="time1"> Instagram - caffein_17 </Typography>
          <Typography className="time1"> Email - Caffein@gmail.com</Typography>
          <Typography className="time1"> Website:Caffeincafe122.com</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
