import React, {Component} from 'react';
import "./ProductCart.css";

class ProductCart extends Component {
	render(){
	const products = this.props.products;
	const onDelete = this.props.onDelete;
	var items =0;
	var total = 0;
	var cartinfo;
	if(products){
		products.forEach((product)=>{
			items+=product.count;
			total+=product.price;
		});
	cartinfo= products.map((product)=>{
			if(product.count){
					return (
						<tbody key={product.id}>
							<tr>
								<td>{product.productName}</td>
								<td>{product.count}</td>
								<td>{product.price}</td>
								<td onClick={()=>onDelete(product.id)}><button><i className="fas fa-trash-alt"></i></button></td>
							</tr>
						</tbody>
						)}
					return undefined;
					});
	}
	return(<div className="cart-info">
	        		<p> Your Cart Summary</p>
	        		<table className="summary-table">
	        			<thead>
		        			<tr>
		        				<th> Items In Cart </th>
		        				<th>Total</th>
		        			</tr>
	        			</thead>
	        			<tbody>
		        			<tr>
		        				<td>{items}</td>
		        				<td>{total}</td>
		        			</tr>
	        			</tbody>
	        		</table>
	        		<hr />
	        		<table className="summary-table-info">
	        			<thead>
		        			<tr>
		        				<th> Items  </th>
		        				<th> Quantity  </th>
		        				<th> Rs</th>
		        				<th>    </th>
		        			</tr>
	        			</thead>
	        				{cartinfo}
	        		</table>
	        	</div>
	        	)}
}


export default ProductCart;