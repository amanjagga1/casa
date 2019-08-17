import React from 'react';
import { Button, Input } from 'semantic-ui-react';

const ProductRow = (props) => {
  const product = props.product;
  return (
    <div className='flex margin--tb'>
      <Input disabled className='product_name' value={product.product_name} />
      <Input disabled className='product_id' value={product.product_id} />
      <Input disabled className='product_price' value={product.unit_price} />
      <Input className='product_qty' value={product.qty}
        onChange={(e, {value}) => props.editProduct(product.product_id, value)}/>
      
      <Input disabled className='product_total' value={product.total} />
      <Button size='medium' className='delete' color='red'
        onClick={() => props.deleteProduct(product.product_id)}>Delete</Button>
    </div>
  );
};

export default ProductRow;