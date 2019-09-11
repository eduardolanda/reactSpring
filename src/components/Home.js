import React from "react";
import logo from "../logo.svg";
import TextAnimation from "./TextAnimation";
import GridList from "./GridList";
import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <>
      <Grid container spacing={3} className="firstContainer">
        <Grid item xs={12} sm={4}>
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextAnimation />
        </Grid>
      </Grid>
      <GridList />
    </>
  );
}

export default Home;
