import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Card } from '@material-ui/core';

import User from "./User";

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

export default function ParticipantsCatalog() {
  const classes = useStyles();

  return (
    <Card>
      {/*ParticipantsCatalog*/}
      <Grid container className={classes.root} spacing={2}>
          {/*Title*/}
          <Grid item xs={12}>
            <Typography variant="h3">
                Participants Catalog
            </Typography>
            </Grid>
            {/*User 1*/}
            <Grid item xs={12}>
                <User />
            </Grid>
            {/*User 2*/}
            <Grid item xs={12}>
                <User />
            </Grid>
            {/*User 3*/}
            <Grid item xs={12}>
                <User />
            </Grid>
            <Grid item xs={12}/>
        </Grid>
    </Card>
  );
}