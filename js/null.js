// val = obj && obj.info && obj.info.name

obj = {
  info:{
    name:'zzy'
  }
}

let val = obj?.info?.name
console.log(val)