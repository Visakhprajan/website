import React, { Component, Fragment } from 'react';

import HeroImage from '../../uploads/images/about/gentle-man.jpg';

class ImageBlock extends Component{
  render(){
    return(
      <Fragment>
        <div className="img-block">
          <div className="overlay"></div>
          <div className="img-holder">
            <img src={HeroImage} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ImageBlock;