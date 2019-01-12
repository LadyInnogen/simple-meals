import React, { Component } from 'react';
//import './Meals.css';

class Meals extends Component {
    render(){
	let meals = this.props.meals;
	let mealsList = Object.keys(meals).map(function(meal){
	    return(
		    <li>
		    <h3>{meal}</h3>
		    </li>
	    )
	});

	return(
		<div>{mealsList}</div>
	)
    }
}
    
export default Meals;
