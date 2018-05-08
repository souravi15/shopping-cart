import React,{Component} from 'react';
import ProductList from './ProductList';
import ProductCart from './ProductCart';
import './Products.css';

class Products extends Component{
	constructor(props){
		super(props);
		this.state={
			products:[	
						{id:1 , count:0 , price: 0,productName:""},
						{id:2 , count:0 , price: 0,productName:""},
						{id:3 , count:0 , price: 0,productName:""},
						{id:4 , count:0 , price: 0,productName:""},
						{id:5 , count:0 , price: 0,productName:""},
						{id:6 , count:0 , price: 0,productName:""}
			]
		}
		this.handleClick=this.handleClick.bind(this);
		this.handleInc=this.handleInc.bind(this);
		this.handleDec=this.handleDec.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
	}
	componentWillMount(){
		if(sessionStorage.getItem('cachedData')){
			this.setState({ 
				products: JSON.parse(sessionStorage.getItem('cachedData'))
			});
	}
}
	componentDidMount(){
			var productData = this.props.data;
			const cachedData = this.state.products;
			cachedData.forEach(function(product){
			if(product.count !== 0 ){
				var id = product.id;
				var selector = '.'+productData[id-1].key;
				var s =document.querySelectorAll(selector);
				var addbutton = document.getElementById(id);
				addbutton.textContent= product.count;
				s.forEach(function(button){
					button.style.visibility ='visible';	
					})
				document.querySelector('.summary-table-info').style.visibility ='visible';
			}
				
		})
		}

	handleClick(id){
		var selector = '.'+this.props.data[id-1].key;
		var s =document.querySelectorAll(selector);
		var addbutton = document.getElementById(id);
		addbutton.textContent=1;
		s.forEach(function(button){
			button.style.visibility ='visible';	
		})
		const products = this.state.products;
		products[id-1].count = 1;
		products[id-1].price = this.props.data[id-1].price;
		products[id-1].productName = this.props.data[id-1].productName;
		this.setState({products: products}); 
		sessionStorage.setItem('cachedData', JSON.stringify(this.state.products));
		document.querySelector('.summary-table-info').style.visibility ='visible';
	}
	handleInc(id){
		const products = this.state.products;
		products[id-1].count++;
		var count = products[id-1].count;
		products[id-1].price = this.props.data[id-1].price * count;
		this.setState({products: products});
		sessionStorage.setItem('cachedData', JSON.stringify(this.state.products));
		document.getElementById(id).textContent= count;
	}
	handleDec(id){
		const products = this.state.products;
		if(products[id-1].count === 1){
				this.handleDelete(id);
		}
		else{
			products[id-1].count--;
			var count= products[id-1].count;
			products[id-1].price = this.props.data[id-1].price * count ;
			this.setState({products: products});
			sessionStorage.setItem('cachedData', JSON.stringify(this.state.products));
			document.getElementById(id).textContent= count;
		}
	}
	handleDelete(id){
		const products = this.state.products;
		var selector = '.'+this.props.data[id-1].key;
		var s =document.querySelectorAll(selector);
		products[id-1].count=0;
		products[id-1].price= 0;
		this.setState({products: products});
		sessionStorage.setItem('cachedData', JSON.stringify(this.state.products));
		document.getElementById(id).innerHTML = '<button>Add to Cart<button>';
		s.forEach(function(button){
			button.style.visibility ='hidden';	
		})
		var items=0;
		products.forEach(function(product){
			items+=product.count;
		});
		if(items === 0){
			document.querySelector('.summary-table-info').style.visibility ='hidden';
		}
	}
	render(){
		return(
				<div className="products">
					<div className="product-list">
						<ProductList 
							data={this.props.data}  
							onClick={this.handleClick}  
							onInc={this.handleInc} 
							onDec={this.handleDec} />
					</div>
		        	<ProductCart 
		        		products={this.state.products} 
		        		onDelete={this.handleDelete} />
	        	</div>
        	)}
}


export default Products;