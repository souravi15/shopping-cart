import React from 'react';
import './App.css';
import data from './data.json';
import Products from './Products';

const ShoppingApp = ()=> {
	return(
		<div className="shopping-cart">
      	<h4> Groceries ( 64 Items ) </h4>
        <Products  data={data}/>
      </div>
	);
}

export default ShoppingApp;

