// For a moment we will belive that this data is external data source
export const products= [{
  product_id: 100001,
  product_name: 'sofa',
  unit_price: 43000
},{
  product_id: 100002,
  product_name: 'table',
  unit_price: 12000
},{
  product_id: 100003,
  product_name: 'chair',
  unit_price: 1290
},
{
  product_id: 100004,
  product_name: 'lamp',
  unit_price: 110
},{
  product_id: 100005,
  product_name: 'decorators',
  unit_price: 50
}];

const e = new Date();
const dateString = `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`

const getData = {
  billing_address: {
    first_name: 'Aman',
    last_name: 'Jagga',
    line_1: 'sds',
    line_2: 'asas',
    city: 'bangalore',
    state: 'KA',
    zip_code: '32323',
    country: 'India'
  },
  shipping_address: {
    first_name: 'Aman',
    last_name: 'Jagga',
    line_1: 'sds',
    line_2: 'asas',
    city: 'bangalore',
    state: 'Punjab',
    zip_code: '3434',
    country: 'India'
  },
  order_date: dateString,
  expected_delivery: dateString,
}

export default getData;
