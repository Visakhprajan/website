import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ImageBlock from './ImageBlock';
import ContentBlock from './Content-block';

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
          <ImageBlock />
        </Grid>
        <Grid item md={6} xs={12} pt={0}>
         <ContentBlock />
        </Grid>
      </Grid>
    </Container>
    
  );
};