import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

import Cart from "../Cart/Cart.controller";
import image from "../../assets/shoes.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item spacing={10}>
            <CardMedia
              component="img"
              display="block"
              alt="shoe"
              height="50"
              image={image}
            ></CardMedia>
          </Grid>
          <Grid item spacing={2}>
            <Cart />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
