import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ProductHeader from './ProductHeader';
import ProductRow from './ProductRow';
import NewProduct from './NewProduct';

class ProductsSection extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedProduct: null
    }
    this.selectProductHandler = this.selectProductHandler.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }
  selectProductHandler(random, { value }) {
    const selectedProduct = this.props.productList.find((product) => product.product_id === value);
    if (selectedProduct)
      this.setState({selectedProduct})
  }
  addProduct() {
    const selectedProduct = this.state.selectedProduct;
    if (selectedProduct) {
      this.props.changeHandler(selectedProduct, 'products');
      this.setState({selectedProduct: null});
    }
    else {
      alert('Please select a product to add');
    }
  }
  changeQuantity(e, { value } ) {
    const product = {...this.state.selectedProduct};
    product.qty = value;
    product.total = value * product.unit_price;
    this.setState({selectedProduct: product});
  }
  render() {
    return (
      <div className='Products'>
        <ProductHeader />
        {this.props.products.map((product) => {
          return (
            <ProductRow product={product} editProduct={this.props.editProduct}
              deleteProduct={this.props.deleteProduct}
            />
          )
        })}
        <NewProduct options={this.props.productOptions} selectProductHandler ={this.selectProductHandler}
         selectedProduct={this.state.selectedProduct} changeQuantity={this.changeQuantity}
         
        />
        <Button primary onClick={ this.addProduct }>Add Product</Button>
      </div>
    )
  }
};

export default ProductsSection