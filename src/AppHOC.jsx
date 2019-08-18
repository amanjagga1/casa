import React, { Component } from 'react';
import order_details, { products } from './DataSource.js';

const AppHOC = (WrappedComponent) => {
  class AppState extends Component {
    constructor() {
      super();
      this.state = {
        billing_address : {},
        shipping_address : {},
        order_date: '',
        expected_delivery: '',
        products: []
      }
      this.productList = [];
      this.productOptions = []
      this.saveForm = this.saveForm.bind(this);
      this.changeValue = this.changeValue.bind(this)
      this.editProduct = this.editProduct.bind(this);
      this.deleteProduct = this.deleteProduct.bind(this);
      this.isValidForm = this.isValidForm.bind(this);
    }
    saveForm() {
      if(this.isValidForm()) {
        const newState = {...this.state};
        const e = newState.order_date;
        const e1 = newState.expected_delivery;
        const orderPost = {
          billing_address: newState.billing_address,
          shipping_address: newState.shipping_address,
          products: newState.products,
          order_date: `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`,
          expected_delivery: `${e1.getFullYear()}-${e1.getMonth() + 1}-${e1.getDate()}`
        }
        console.log(orderPost)
      }
    }
    isValidForm() {
      const newState = {...this.state};
      let err = false;
      Object.keys(newState.billing_address).forEach(field =>{
        if(!newState.billing_address[field]) {
          err = true;
        }
      })
      if (err) {
        alert('Please add all the fields in billing address to proceed');
        return;
      }
      Object.keys(newState.shipping_address).forEach(field =>{
        if(!newState.shipping_address[field]) {
          err= true;
        }
      })
      if (err) {
        alert('Please add all the fields in shipping address to proceed');
        return;
      }
      if (!this.state.order_date || !this.state.expected_delivery) {
        alert('Please add the order date and expected delivery to proceed')
        return;
      }
        
      if (!newState.products.length) {
        alert('Please add the products to order');
        return;
      }
      newState.products.forEach(product => {
        if (!product.qty) {
          alert('You forgot to add Qty for your products');
          return;
        }
      });
      return true;
    }
    changeValue(value, path) {
      let state = { ...this.state }
      try {
        const split = path.split('.')
        let subState = state;
        for (let i=0; i< split.length; i++) {
          let element = subState[split[i]];
          if (i === split.length - 1) {
            // if it's a array
            if (typeof element === 'object' && 
              (element.length === 0 || element.length > 0)) {
                element.push(value)
            }
            else {
              subState[split[i]] = value;
            } 
          }
          else
            subState = element
        }
        this.setState({...state})
      } catch(e) {
        console.log('error', e);
      }
    }
    editProduct(product_id, qty) {
      const products = [...this.state.products ];
      const productIndex = products.findIndex((product) => product.product_id === product_id);
      products[productIndex].qty = qty;
      products[productIndex].total = qty * products[productIndex].unit_price;
      this.setState({ products });
    }
    deleteProduct(product_id) {
      const products = [...this.state.products ];
      const filteredProducts = products.filter((product) => product.product_id !== product_id);
      this.setState({products: filteredProducts});
    }
    componentDidMount() {
      // Ideally it should be the api call
      // but for demo sake this will  behave as a
      //external source
      this.setState({
        billing_address : order_details.billing_address,
        shipping_address: order_details.shipping_address,
        order_date: new Date(order_details.order_date),
        expected_delivery: new Date(order_details.expected_delivery)
      });
      this.productList = products;
      this.productOptions = products.map((product) => {
        return ({
          value: product.product_id,
          text: product.product_name
        });
      });
      this.saveForm = this.saveForm.bind(this);
    }
    render() {
      return (
        <WrappedComponent {...this.state} productList={this.productList}
          productOptions={this.productOptions} saveForm={this.saveForm}
          changeValue={this.changeValue} editProduct={this.editProduct}
          deleteProduct={this.deleteProduct}
        />
      )
    }
  }
  return AppState;
};
export default AppHOC;