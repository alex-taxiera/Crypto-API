import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Paper} from '@material-ui/core';

import MarketplaceCatalog from "./Marketplace components/MarketplaceCatalog";
import Filter from "./Marketplace components/Filter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //paddingLeft:"10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Marketplace() {
  const classes = useStyles();
  return (
    <div>
      {/*Marketplace*/}
      <Grid container className={classes.root} spacing={5} direction="column">
        <Grid item xs={12}/>
        <Grid container spacing={5} direction="row">
        <Grid item xs={1}/>{/* */}
        {/*Filter*/}
        <Grid item xs={3}>
          <Filter />
        </Grid>
        {/*Catalog*/}
        <Grid item xs={7}>
          <MarketplaceCatalog />
        </Grid>
        <Grid item xs={1}/>{/* */}
        </Grid>
        <Grid item xs={12}/>

         {/*Footer*/}
         <Grid item xs={12}>
          <Paper className={classes.paper}>Footer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}