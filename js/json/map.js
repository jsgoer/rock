let json = '{"data":{"1":5205,"2":0,"3":0,"-1":798,"-2":11031},"id":"erp_wms_order_stastic"}'

console.log(json);

let obj = JSON.parse(json);
console.log(obj);

let d = obj.data;
console.log(d);

let t = d['-1']
console.log(t);

