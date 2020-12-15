let str = "https://shopee.tw/"

let reg = new RegExp("shopee.((tw)|(sg)|(vn)|(ph)|(co.th)|(co.id)|(com.my)|(com.br))/$", "i");

console.log(reg.test(str));


// userId  2479011545             videoId 214746692999
// http://cloud.video.taobao.com/play/u/984879212/p/2/e/6/t/1/233351561830.mp4   

// cloud.video.taobao.com/play/u/2200627413296/p/1/e/6/t/1/263241823836.mp4
