import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = (props) => {
  let selected = props.selected;
  return (
    <div>
      <div>{props.type}</div>
      <DatePicker
        selected={selected}
        onChange={(e) =>handleDateChange(e, props.csDate, props.type, props.changeHandler)}
      />
    </div>
  )
};

const handleDateChange = (e, csDate, type, cb) => {
  if (e < new window.Date())
    alert(`Date cannot be less than today's date`)
  if (type === 'expected_delivery' && e < csDate)
    alert('Expected Delivery cannot be less than Order Date');
  else if ((type === 'order_date' && e > csDate))
    alert('Order Date cannot be greater than Expected delivery date');
  else
    cb(e, type);
}

export default Date;