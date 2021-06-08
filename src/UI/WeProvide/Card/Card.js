import React from 'react';
import { Fragment } from 'react';

import  './Card.css';

const ServiceCard = () =>{
  return(
    <Fragment>
      <div className="card">
        <div className="logo-holder">
          <div className="service"></div>
        </div>
        <div className="Card-body">
          <h4>UI UX Design</h4>
          <p>Lorem ipsum dolor met
            consectetur adipisicing 
            sed do eiusmodtempor incidid.</p>
        </div>
      </div>
    </Fragment>
  )
}

export default ServiceCard;