for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0)
}


console.log(a);   // undefined     var会出现变量提升，let不会
var a = 1;
