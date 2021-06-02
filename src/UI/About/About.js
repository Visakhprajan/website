import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import  './About.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <Container className="container">
      <Grid container className="row">
        <Grid item md={6} xs={12} className={classes.item} >
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item md={6} xs={12} pt={0}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </Container>
    
  );
};