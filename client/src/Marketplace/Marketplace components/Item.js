import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {getProd} from '../../actions/post';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 180,
    maxWidth: 300,
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
function Item ({post}) {

  
  const classes = useStyles();


console.log(post.title);
  return (
    <Card className={classes.root}>
       <CardMedia
        className={classes.media}
        image={post.image}
        title={post.title}
      />
      
      <CardHeader
        title={post.title}
      />
     
      <CardContent>

      {/* <Typography variant="h6" color="primary" component="p">
          {post.creator}
        </Typography>*/} 


        <Typography variant="body2" color="textSecondary" component="p">
          {post.desc}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.date_creation}
        </Typography>
        {/*
        <div>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.desc}
        </Typography>

          </div>
       */}
      </CardContent>
        <Button size="small" color="primary" variant="contained">
          Express Intrest
        </Button>
    </Card>
  );
}
export default Item;