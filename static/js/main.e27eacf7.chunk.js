(window.webpackJsonpcasa=window.webpackJsonpcasa||[]).push([[0],{231:function(e,t,a){e.exports=a(365)},236:function(e,t,a){},360:function(e,t,a){},361:function(e,t,a){},365:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(32),d=a.n(c),o=(a(236),a(57)),s=a(58),i=a(65),l=a(59),u=a(64),p=a(376),h=function(e){return n.a.createElement("div",{className:"address"},n.a.createElement("div",null,e.name),n.a.createElement(p.a,{value:e.address.first_name,placeholder:"First Name",onChange:function(t,a){var r=a.value;return e.changeHandler(r,"".concat(e.type,".first_name"))}}),n.a.createElement(p.a,{value:e.address.last_name,placeholder:"Last Name",onChange:function(t,a){var r=a.value;return e.changeHandler(r,"".concat(e.type,".last_name"))}}),n.a.createElement(p.a,{value:e.address.line_1,placeholder:"Address line 1",onChange:function(t,a){var r=a.value;return e.changeHandler(r,"".concat(e.type,".line_1"))}}),n.a.createElement(p.a,{value:e.address.line_2,placeholder:"Address line 2",onChange:function(t,a){var r=a.value;return e.changeHandler(r,"".concat(e.type,".line_2"))}}),n.a.createElement(p.a,{value:e.address.city,placeholder:"City",onChange:function(t,a){var r=a.value;return e.changeHandler(r,"".concat(e.type,".city"))}}),n.a.createElement(p.a,{value:e.address.state,placeholder:"State",onChange:function(t,a){var r=a.value;return e.changeHandler(r,"".concat(e.type,".state"))}}),n.a.createElement(p.a,{value:e.address.zip_code,placeholder:"Zipcode",onChange:function(t,a){var r=a.value;return e.changeHandler(r,"".concat(e.type,".zip_code"))}}),n.a.createElement(p.a,{value:e.address.country,placeholder:"Country",onChange:function(t,a){var r=a.value;return e.changeHandler(r,"".concat(e.type,".country"))}}))},m=a(106),v=a(26),g=a(366),_=a(76),f=function(){return n.a.createElement("div",{className:"flex"},n.a.createElement(_.a,{className:"product_name",size:"small"},"Product Name"),n.a.createElement(_.a,{className:"product_id",size:"small"},"Product ID"),n.a.createElement(_.a,{className:"product_price",size:"small"},"Unit Price"),n.a.createElement(_.a,{className:"product_qty",size:"small"},"Product Qty"),n.a.createElement(_.a,{className:"product_total",size:"small"},"Total Price"),n.a.createElement("div",{className:"delete"}))},y=function(e){var t=e.product;return n.a.createElement("div",{className:"flex margin--tb"},n.a.createElement(p.a,{disabled:!0,className:"product_name",value:t.product_name}),n.a.createElement(p.a,{disabled:!0,className:"product_id",value:t.product_id}),n.a.createElement(p.a,{disabled:!0,className:"product_price",value:t.unit_price}),n.a.createElement(p.a,{className:"product_qty",value:t.qty,onChange:function(a,r){var n=r.value;return e.editProduct(t.product_id,n)}}),n.a.createElement(p.a,{disabled:!0,className:"product_total",value:t.total}),n.a.createElement(g.a,{size:"medium",className:"delete",color:"red",onClick:function(){return e.deleteProduct(t.product_id)}},"Delete"))},b=a(377),O=function(e){var t=e.selectedProduct||{product_id:"",product_name:"",unit_price:"",qty:"",total:""};return n.a.createElement("div",{className:"flex margin--tb"},n.a.createElement(b.a,{className:"product_name",selection:!0,options:e.options,placeholder:"Select Product",value:t.product_id,onChange:e.selectProductHandler}),n.a.createElement(p.a,{disabled:!0,className:"product_id",value:t.product_id}),n.a.createElement(p.a,{disabled:!0,className:"product_price",value:t.unit_price}),n.a.createElement(p.a,{className:"product_qty",value:t.qty,onChange:e.changeQuantity}),n.a.createElement(p.a,{className:"product_total",value:t.total}),n.a.createElement("div",{className:"delete"}))};function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this))).state={selectedProduct:null},a.selectProductHandler=a.selectProductHandler.bind(Object(v.a)(a)),a.addProduct=a.addProduct.bind(Object(v.a)(a)),a.changeQuantity=a.changeQuantity.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"selectProductHandler",value:function(e,t){var a=t.value,r=this.props.productList.find(function(e){return e.product_id===a});r&&this.setState({selectedProduct:r})}},{key:"addProduct",value:function(){var e=this.state.selectedProduct;e?(this.props.changeHandler(e,"products"),this.setState({selectedProduct:null})):alert("Please select a product to add")}},{key:"changeQuantity",value:function(e,t){var a=t.value,r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},this.state.selectedProduct);r.qty=a,r.total=a*r.unit_price,this.setState({selectedProduct:r})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Products"},n.a.createElement(f,null),this.props.products.map(function(t){return n.a.createElement(y,{product:t,editProduct:e.props.editProduct,deleteProduct:e.props.deleteProduct})}),n.a.createElement(O,{options:this.props.productOptions,selectProductHandler:this.selectProductHandler,selectedProduct:this.state.selectedProduct,changeQuantity:this.changeQuantity}),n.a.createElement(g.a,{primary:!0,onClick:this.addProduct},"Add Product"))}}]),t}(r.Component),j=(a(360),a(361),a(204)),w=(a(364),function(e,t,a,r){"expected_delivery"===a&&e<t?alert("Expected Delivery cannot be less than Order Date"):"order_date"===a&&e>t?alert("Order Date cannot be greater than Expected delivery date"):r(e,a)}),N=function(e){var t=e.selected||new window.Date;return n.a.createElement("div",null,n.a.createElement("div",null,e.type),n.a.createElement(j.a,{selected:t,onChange:function(t){return w(t,e.csDate,e.type,e.changeHandler)}}))},k=a(152),D=[{product_id:100001,product_name:"sofa",unit_price:43e3},{product_id:100002,product_name:"table",unit_price:12e3},{product_id:100003,product_name:"chair",unit_price:1290},{product_id:100004,product_name:"lamp",unit_price:110},{product_id:100005,product_name:"decorators",unit_price:50}],x={billing_address:{first_name:"Aman",last_name:"Jagga",line_1:"sds",line_2:"asas",city:"bangalore",state:"KA",zip_code:"32323",country:"India"},shipping_address:{first_name:"Aman",last_name:"Jagga",line_1:"sds",line_2:"asas",city:"bangalore",state:"Punjab",zip_code:"3434",country:"India"},order_date:"2019-01-03",expected_delivery:"2019-01-03"};function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var F=function(e){return function(t){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(l.a)(a).call(this))).state={billing_address:{},shipping_address:{},order_date:"",expected_delivery:"",products:[]},e.productList=[],e.productOptions=[],e.saveForm=e.saveForm.bind(Object(v.a)(e)),e.changeValue=e.changeValue.bind(Object(v.a)(e)),e.editProduct=e.editProduct.bind(Object(v.a)(e)),e.deleteProduct=e.deleteProduct.bind(Object(v.a)(e)),e.isValidForm=e.isValidForm.bind(Object(v.a)(e)),e}return Object(u.a)(a,t),Object(s.a)(a,[{key:"saveForm",value:function(){if(this.isValidForm()){var e=C({},this.state),t=e.order_date,a=e.expected_delivery,r=C({},e,{order_date:"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()),expected_delivery:"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate())});console.log(r)}}},{key:"isValidForm",value:function(){var e=C({},this.state),t=!1;if(Object.keys(e.billing_address).forEach(function(a){e.billing_address[a]||(t=!0)}),t)alert("Please add all the fields in billing address to proceed");else if(Object.keys(e.shipping_address).forEach(function(a){e.shipping_address[a]||(t=!0)}),t)alert("Please add all the fields in shipping address to proceed");else if(this.state.order_date&&this.state.expected_delivery){if(e.products.length)return e.products.forEach(function(e){e.qty||alert("You forgot to add Qty for your products")}),!0;alert("Please add the products to order")}else alert("Please add the order date and expected delivery to proceed")}},{key:"changeValue",value:function(e,t){var a=C({},this.state);try{for(var r=t.split("."),n=a,c=0;c<r.length;c++){var d=n[r[c]];c===r.length-1?"object"===typeof d&&(0===d.length||d.length>0)?d.push(e):n[r[c]]=e:n=d}this.setState(C({},a))}catch(o){console.log("error",o)}}},{key:"editProduct",value:function(e,t){var a=Object(k.a)(this.state.products),r=a.findIndex(function(t){return t.product_id===e});a[r].qty=t,a[r].total=t*a[r].unit_price,this.setState({products:a})}},{key:"deleteProduct",value:function(e){var t=Object(k.a)(this.state.products).filter(function(t){return t.product_id!==e});this.setState({products:t})}},{key:"componentDidMount",value:function(){this.setState({billing_address:x.billing_address,shipping_address:x.shipping_address,order_date:new Date(x.order_date),expected_delivery:new Date(x.expected_delivery)}),this.productList=D,this.productOptions=D.map(function(e){return{value:e.product_id,text:e.product_name}}),this.saveForm=this.saveForm.bind(this)}},{key:"render",value:function(){return n.a.createElement(e,Object.assign({},this.state,{productList:this.productList,productOptions:this.productOptions,saveForm:this.saveForm,changeValue:this.changeValue,editProduct:this.editProduct,deleteProduct:this.deleteProduct}))}}]),a}(r.Component)}(function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"flex"},n.a.createElement("div",null,n.a.createElement(h,{type:"billing_address",name:"Billing Address",address:this.props.billing_address,changeHandler:this.props.changeValue}),n.a.createElement(N,{type:"order_date",selected:this.props.order_date,changeHandler:this.props.changeValue,csDate:this.props.expected_delivery})),n.a.createElement("div",null,n.a.createElement(h,{type:"shipping_address",address:this.props.shipping_address,name:"Shipping Address",changeHandler:this.props.changeValue}),n.a.createElement(N,{type:"expected_delivery",selected:this.props.expected_delivery,changeHandler:this.props.changeValue,csDate:this.props.order_date}))),n.a.createElement(E,{products:this.props.products,changeHandler:this.props.changeValue,productList:this.props.productList,productOptions:this.props.productOptions,editProduct:this.props.editProduct,deleteProduct:this.props.deleteProduct}),n.a.createElement(g.a,{floated:"right",primary:!0,onClick:this.props.saveForm},"Save Form"))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(n.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[231,1,2]]]);
//# sourceMappingURL=main.e27eacf7.chunk.js.map