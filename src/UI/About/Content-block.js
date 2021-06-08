import React, {Component, Fragment} from 'react';

import Button from '@material-ui/core/Button';

class ContentBlock extends Component{
  render(){
    return(
      <Fragment>
        <div className="about-content">
          <h2>About US</h2>
          <div className="body-copy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Quis ipsum suspendisse ultrices gravida. 
            Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          </div>
          <Button variant="outlined">Download CV</Button>
        </div>
      </Fragment>
    )
  }
}

export default ContentBlock;