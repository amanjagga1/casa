import React, { Component } from 'react';
import Address from './Address';
import ProductsSection from './products/ProductsSection';
import './App.scss';
import './Utilities.scss';
import Date from './Date';
import { Button } from 'semantic-ui-react';
import AppHOC from './AppHOC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='flex'>
          <div>
            <Address type='billing_address'
              name='Billing Address' address={this.props.billing_address}
              changeHandler={this.props.changeValue}
            />
            <Date type={'order_date'} selected={this.props.order_date}
              changeHandler={this.props.changeValue} csDate={this.props.expected_delivery}
            />
          </div>
          <div>
            <Address type='shipping_address' address={this.props.shipping_address}
              name='Shipping Address' changeHandler={this.props.changeValue}
            />
            <Date type={'expected_delivery'} selected={this.props.expected_delivery}
              changeHandler={this.props.changeValue} csDate={this.props.order_date}/>
          </div>
        </div>
        <ProductsSection products={this.props.products} changeHandler={this.props.changeValue}
          productList={this.props.productList} productOptions={this.props.productOptions}
          editProduct={this.props.editProduct} deleteProduct={this.props.deleteProduct}
        />
        <Button floated='right' primary onClick={this.props.saveForm}>Save Form</Button>
      </div>
    );
  }
}


export default AppHOC(App);
