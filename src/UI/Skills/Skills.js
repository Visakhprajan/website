import React, { Component, Fragment }  from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import  './Skill.css';


class Skills extends Component{
  render(){
    return(
      <Fragment>
        <section className="skills">
          <Container  className="container">
          <h2>MY Skill and Education</h2>
            <Grid container className="row">
              <Grid item xs={6} sm={4}>
                <div className="skill-block">
                  <div className="skill-thumb html" >
                    
                  </div>
                  <div className="skill-title">HTML</div>
                </div>
              </Grid>
              <Grid item xs={6} sm={4}>
                <div className="skill-block">
                  <div className="skill-thumb css"></div>
                  <div className="skill-title">CSS</div>
                </div>
              </Grid>
              <Grid item xs={6} sm={4}>
                <div className="skill-block">
                    <div className="skill-thumb js"></div>
                    <div className="skill-title">JS</div>
                  </div>
              </Grid>
              <Grid item xs={6} sm={4}>
                <div className="skill-block">
                  <div className="skill-thumb html" >
                    
                  </div>
                  <div className="skill-title">HTML</div>
                </div>
              </Grid>
              <Grid item xs={6} sm={4}>
                <div className="skill-block">
                  <div className="skill-thumb css"></div>
                  <div className="skill-title">CSS</div>
                </div>
              </Grid>
              <Grid item xs={6} sm={4}>
                <div className="skill-block">
                    <div className="skill-thumb js"></div>
                    <div className="skill-title">JS</div>
                  </div>
              </Grid>
              <Grid item xs={6} sm={4}>
                <div className="skill-block">
                  <div className="skill-thumb html" >
                    
                  </div>
                  <div className="skill-title">HTML</div>
                </div>
              </Grid>
              <Grid item xs={6} sm={4}>
                <div className="skill-block">
                  <div className="skill-thumb css"></div>
                  <div className="skill-title">CSS</div>
                </div>
              </Grid>
              <Grid item xs={6} sm={4}>
                <div className="skill-block">
                    <div className="skill-thumb js"></div>
                    <div className="skill-title">JS</div>
                  </div>
              </Grid>
          </Grid>
          </Container>
        </section>
      </Fragment>
    )
  }
}

export default Skills;