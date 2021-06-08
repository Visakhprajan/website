import React, { Fragment }  from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TabPanel from './tab/Tab';

const Portfolio = () =>{
  return(
    <Fragment>
      <section className="portfolio">
      <Container  className="container">
         <Grid container className="row">
           <h2>PORTFOLIO</h2>
         </Grid>
         <TabPanel />
      </Container>
      </section>
    </Fragment>
  )
}

export default Portfolio;