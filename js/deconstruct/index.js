// 解构赋值的默认值注意项,当右侧对应的项值为undefined时，才会采用左侧的默认值
{
    [a, b = 10] = [1, undefined]
    console.log(a, b);
}
