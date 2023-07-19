import React from "react";
import Product from "./product";



class ProductList extends React.Component {
    render() {
      return this.props.products.map((product, index) => (
        <Product key={index} product={product}  selectProduct={this.props.selectProduct}/>
      ));
    }
  }


  export default ProductList;