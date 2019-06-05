/**
 *  当ts不能确定一个变量是哪个类型的时候，只能访问公共的属性和方法
 *  此时可以使用断言，将something断言成string,否则会报错
 *  断言不是类型转换,不可以断言成不存在的类型
 */
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length
    } else {
        return something.toString().length
    }
}

