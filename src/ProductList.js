import React from 'react';
import "./ProductList.css";

const ProductList = ({data,onClick,onInc,onDec}) => {
	return data.map(function(prod){
			  return (
			    <div key={prod.id} className="product-card">
			       <img src={prod.productImg} alt={prod.productName} className="product-productImg"/>
			       <h4 className="product-brandName"> {prod.brandName} </h4>
			       <p className="product-productName">  {prod.productName}</p>
			       <p className="product-packageDetail"> {prod.packageDetail}</p>
			       <p className="product-price"><span>Rs </span>{prod.price}</p>
			       <div className="button-parent">
					      <span  className={prod.key} onClick={()=>onDec(prod.id)}><button>-</button></span>
					      <span id={prod.id} onClick={() =>onClick(prod.id)}><button>Add to Cart</button></span>
					      <span className={prod.key} onClick={()=>onInc(prod.id)}><button> + </button></span>
				     </div>
			    </div>
			   );
			});		
}

export default ProductList;