import React from "react";

class SelectedProductList extends React.Component {
  render() {
    return (


this.props.products.length == 0 ?
<div className="alert alert-warning">No products selected</div> :

      <ol className="list-group list-group-numbered">
        {this.props.products.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="ms-2 me-auto">{item.product.name}</div>
            <span className="badge bg-primary rounded-pill me-2">{item.count}</span>
            <span className="badge bg-danger rounded-pill " onClick={() => this.props.deleteProduct(item.product)}>x</span>
          </li>

        ))}
      </ol>

    
    );
  }
}

export default SelectedProductList;
