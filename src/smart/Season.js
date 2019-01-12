import React, { Component } from 'react';
//import './Season.css';
import Meals from './Meals';

class Season extends Component {
    render(){
    return (
      <div>
          <p>
            It's winter, bitches.
          </p>
	    <Meals meals={this.props.season.meals}></Meals>
      </div>
    );
  }
}

export default Season;
