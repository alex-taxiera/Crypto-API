import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Picture from "./cart-logo.svg.hi.png";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 180,
    maxWidth: 350,
    paddingLeft:"10px",
    paddingRight:"10px",
    paddingTop:"10px",
    paddingBottom:"10px",
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

export default function Item() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Product/Service Name"
      />
      <CardMedia
        className={classes.media}
        image={Picture}
        title="Product/Service Name"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
        <Button size="small" color="primary" variant="contained">
          Express Intrest
        </Button>
    </Card>
  );
}
