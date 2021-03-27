import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Paper,CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Filter from "./Marketplace components/Filter";
import '../css/markplace.css';
import Item from './Marketplace components/Item';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    //paddingLeft:"10px",
  },
  paper: {
   
    textAlign: 'center',
  },
}));
function Marketplace(){
 

  const classes = useStyles();
  

  const posts=useSelector((state)=>state.product);
  console.log(posts);
  return (
    
    
    
    !posts.length? <CircularProgress className="loading" /> :( 

      <Grid container className={classes.root} spacing={5} direction="column">
      <Grid item xs={12}/>
      <Grid container spacing={1} direction="row" className="inside" justify="center">
        
      {/*Filter*/}
      <Grid item xs={2}>
        <Filter />
      </Grid>
      {/*Catalog*/}
      <Grid item xs={7}>
        <Grid container spacing={2}>

        
{posts.map((post,key)=>(
  <Grid key={post._id} item xs={12} sm={12} md={6} lg={4} xl={3}>
    <Item post={post}/>
  </Grid>
))}
</Grid>
      </Grid>
      
      </Grid>
      <Grid item xs={12}/>
       {/*Footer*/}
       <Grid item xs={12}>
        <Paper className={classes.paper}>Footer</Paper>
      </Grid>
    </Grid>
    )

   



     
      
      
    

  );
}

export default Marketplace;