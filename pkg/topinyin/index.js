var pinyin = require('pinyin')
console.log(pinyin('杭州'));
console.log(pinyin("重庆", {
    heteronym: true               // 启用多音字模式
}));
console.log(pinyin("重庆", {
    heteronym: true,
    segment: true
}));
console.log(pinyin("重庆", {
    style: pinyin.STYLE_INITIALS,
    segment: true
}));
