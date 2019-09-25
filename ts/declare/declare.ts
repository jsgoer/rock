// 使用第三方库时，需要使用它的声明文件，才能获取其代码补全，接口提示等功能
// 使用.d.ts为后缀
declare var jQuery: (selector: string) => any

jQuery('#id')

// 一般都有对应的第三方申明文件可供使用，如   npm install @types/jquery --save-dev

// 只有Function  Class Interface可以直接默认导出，其他变量必须先定义再导出
