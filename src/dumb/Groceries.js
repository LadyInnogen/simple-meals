import React, {Component} from 'react';

class Groceries extends Component {
    render(){
	let season = this.props.season;
	let groceryList = season.groceries.map(function(grocery){
	    return(
	    <li>
	    <span>{grocery.amount}</span> <span>{grocery.name}</span>
		    </li>
	    )
	});

	return(
	    <div>{groceryList}</div>
	)
    }
}

export default Groceries;
