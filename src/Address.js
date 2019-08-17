import React from 'react';
import { Input }from 'semantic-ui-react';


const Address = (props) => {
  return (
    <div className='address'>
      <div>{props.name}</div>
      <Input value={props.address.first_name} placeholder='First Name'
        onChange={(e,{ value }) => props.changeHandler(value, `${props.type}.first_name`)}
      />
      <Input value={props.address.last_name} placeholder='Last Name'
        onChange={(e,{ value }) => props.changeHandler(value, `${props.type}.last_name`)}
      />
      <Input value={props.address.line_1} placeholder='Address line 1'
        onChange={(e,{ value }) => props.changeHandler(value, `${props.type}.line_1`)}
      />
      <Input value={props.address.line_2} placeholder='Address line 2'
        onChange={(e,{ value }) => props.changeHandler(value, `${props.type}.line_2`)}
      />
      <Input value={props.address.city} placeholder='City'
        onChange={(e,{ value }) => props.changeHandler(value, `${props.type}.city`)}
      />
      <Input value={props.address.state} placeholder='State'
        onChange={(e,{ value }) => props.changeHandler(value, `${props.type}.state`)}
      />
      <Input value={props.address.zip_code} placeholder='Zipcode'
      onChange={(e,{ value }) => props.changeHandler(value, `${props.type}.zip_code`)}
      />
      <Input value={props.address.country} placeholder='Country'
      onChange={(e,{ value }) => props.changeHandler(value, `${props.type}.country`)}
      />
    </div>

  );
};

export default Address;