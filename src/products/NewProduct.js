import React from 'react';
import { Input, Dropdown } from 'semantic-ui-react';

const NewProduct = ( props ) => {
  const selectedProduct = props.selectedProduct || {
    product_id: '',
    product_name: '',
    unit_price: '',
    qty: '',
    total: ''
  };
  return (
    <div className='flex margin--tb'>
      <Dropdown className='product_name' selection options={ props.options }
        placeholder='Select Product'
        value={selectedProduct.product_id}
        onChange = {props.selectProductHandler}
      />
      <Input disabled className='product_id' value={selectedProduct.product_id} />
      <Input disabled className='product_price' value={selectedProduct.unit_price} />
      <Input className='product_qty' value={selectedProduct.qty} onChange={props.changeQuantity} />
      <Input className='product_total' value={selectedProduct.total} />
      <div className='delete'></div>
    </div>
  );
};

export default NewProduct;