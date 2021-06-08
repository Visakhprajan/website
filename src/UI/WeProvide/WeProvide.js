import React,{ Fragment }  from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ServiceCard from './Card/Card';

const WeProvide = () => {
  return(
    <Fragment>
      <section>
        <Container className="container">
          <h2>we provide</h2>
          <Grid container className="row">
            <Grid item xs={4}>
              <ServiceCard />
            </Grid>
            <Grid item xs={4}>
              <ServiceCard />
            </Grid>
            <Grid item xs={4}>
              <ServiceCard />
            </Grid>
            <Grid item xs={4}>
              <ServiceCard />
            </Grid>
            <Grid item xs={4}>
              <ServiceCard />
            </Grid>
          </Grid>
      </Container>
      </section>
    </Fragment>
  )
}

export default WeProvide;