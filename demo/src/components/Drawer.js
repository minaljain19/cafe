import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HomeIcon from "@mui/icons-material/Home";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const drawerHeadingList = [
    {
      id: 1,
      title: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      id: 2,
      title: "Menu",
      icon: <MenuBookIcon />,
      path: "/menu",
    },
    {
      id: 3,
      title: "Orders",
      icon: <LocalDiningIcon />,
      path: "/orders",
    },
    {
      id: 4,
      title: "Contact Us",
      icon: <ContactPageIcon />,
      path: "/contact",
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {drawerHeadingList.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton to={text.path}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText sx={{ color: "black" }} primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <Grid sx={{ display: { xs: "flex", sm: "none" } }}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="menuIconButton"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuOpenIcon className="menuIcon" />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Grid>
  );
}
