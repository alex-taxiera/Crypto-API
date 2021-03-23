import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Card } from '@material-ui/core';

import Item from "./Item";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#e4f7f8",
    paddingLeft:"10px",
    paddingRight:"10px",
    paddingTop:"10px",
    paddingBottm:"10px",
  },
}));

export default function MarketplaceCatalog() {
  const classes = useStyles();

  return (
    <Card>
      {/*MarketplaceCatalog*/}
      <Grid container className={classes.root} spacing={2}>
          {/*Title*/}
          <Grid item xs={12}>
            <Typography variant="h3">
                Marketplace Catalog
            </Typography>
            </Grid>
            {/*Item 1*/}
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Item />
            </Grid>
            {/*Item 2*/}
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Item />
            </Grid>
            {/*Item 3*/}
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Item />
            </Grid>
            {/*Item 4*/}
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Item />
            </Grid>
            {/*Item 5*/}
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Item />
            </Grid>
            {/*Item 6*/}
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                <Item />
            </Grid>
            <Grid item xs={12}/>
        </Grid>
    </Card>
  );
}