import React from 'react';
import {Link} from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
  
    link: {
        textDecoration: 0,
        color: '#ffff',
        '&:hover':{
         color:'#ffff',
        },
    },
    btn:{
     height:60,
    }
   
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Agence de promotion de l'industrie et de l'innovation
                    </Typography>
                    <Link to='/SuitCase' className={classes.link}>
                        <Button color="inherit"className={classes.btn}>SuitCase</Button>
                    </Link>
                    <Link to='/Event' className={classes.link}>
                        <Button color="inherit"className={classes.btn}>Event</Button>
                    </Link>
                    <Link to='/Participants'className={classes.link}>
                        <Button color="inherit" className={classes.btn} >Participants</Button>
                    </Link>
                    <Link to='/Marketplace' className={classes.link}>
                        <Button color="inherit" className={classes.btn}>Marketplace</Button>
                    </Link>
                    <Link to='/Profile' className={classes.link}>
                        <Button color="inherit" className={classes.btn}>Profile</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}