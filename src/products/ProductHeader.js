import React from 'react';
import { Label } from 'semantic-ui-react';

const ProductHeader = () => {
  return (
    <div className='flex'>
      <Label className='product_name' size='small'>Product Name</Label>
      <Label className='product_id' size='small'>Product ID</Label>
      <Label className='product_price' size='small'>Unit Price</Label>
      <Label className='product_qty' size='small'>Product Qty</Label>
      <Label className='product_total' size='small'>Total Price</Label>
      <div className='delete'></div>
    </div>
  )
};

export default ProductHeader;