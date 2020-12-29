const md5 = require('md5');

// md5(token&t&appKey&data)
let token = '85e31286c3557a19f95a8b39cc5fe226'
let t = 1608604421629
let appKey = '4272'
let data = JSON.stringify({
    "_timezone": -8,
    "redirect_url": "ht137#ZlE9hE9oUHMFIQixBce63zJDInQeHqHyFgpN5i+HvhVZNh39KOHmqqPtaM751he3WPBXOPm3ThUBftps%3A%2F%2Fsellercenter.lazada.co.th%2F",
    "userInput": "lazbao1@126.com",
    "password": "LZDvcb654321092.",
    "ua": "12ES67E==",
    "umidToken": "T2gH",
    "has_captcha": 0
})
let params = `${token}&${t}&${appKey}&${data}`
let res = md5(params)
// console.log(res)

// let str = encodeURIComponent(JSON.stringify({ "_timezone": -8, "accessKey": "lazada-pc-h5", "accessToken": "lazada-test-secret", "accountType": 2 }))
// console.log(str);

let aa = { "_timezone": -8, "redirect_url": "https%3A%2F%2Fsellercenter.lazada.co.th%2F%3F__ARMS_PID__%3Dgiiryrcz16%25405386c34ee4b8d85%26userId%3D0", "userInput": "lazbao1@126.com", "password": "LZDvcb654321092.", "ua": "137#zpB9hE9oUE6cX0UPMB2XMWfZInQeD3LBsjj+FEFHxRbiHmNrTQKd2FinoQoPNZuZFhJfwaMEGebVGJJCXk5DE//O/9LKhafq24p5+nl8HzZBLrCYcFRdlnym3njVjU0c2S4mQviZm1bC7LIyDjXUgNBiu5lophIqmpzT6IwJf8+okNwGxoWNDgjf5iMGHlepiDzGavDe789YGe54S7WfTi3rAWl5xyq0NeXSxM+C9JO2pK/fenRdjMI28zKY2Uzi7DDV1SqdS8fzdbyZudP6GXU+Zru3yUC4Fj2seghYPy4jJuzncALLB6+JCIQxMCeDdmpE+raOEGph+duoa8yP9WVTnwfHV6byAH0xDOtecFLbs3OkCcPMa7Qnw2UYML8BUtfpdq0nH+NYuEQ6GAVPh24OthPL6dz4KtqSS0RdbGwWRDgFyLHrNSvJijThRLO+hcMFg+CnGHN8vOlBQJvJyHczjYZEhB4TTyEXdQuMKUaIPKfbOFaD5cl7e+TrkLxwmAX8gVbLnNFqmIXBSW0I+a3SPIFBG184p6Ej/kTw2wRzXJG02M4S8ud/hpUnZrLVz6b6XxhsNucrIad0G61CP5KZCKrFYasVQ+rbHXKKHC23PfkLBeLlBpDVnXX1mUfrG/aMxieRLTbbKafMWEvzDj7LimTG7947VQEXxf6H6qNJTU9hIw7AM9fdOK3CMrQZpv3rpB3RWP2ZqqZjAmV/3pKtYPz8u7mSSQkVxA7UOqePn1oRQQmeGRhRS+5KqdxzhuR5Ljx0YwAjqLN9nljDkGyg8OfDnopnbZZ5IZjGTEjPG4YpfzqrxwvgoCBmKqylMWstHdfF1XzVR8rLvU1Szdo2lMzILXucfH8zDEWVZXWr+Vc09EfRDpbNqEca4xsG+AP/uqfiVN9Id4h7qXoecU9OWPqb21xQlfCvl+3iTEbXTx0/AC5ggCCBg93jHrnBpz0dL8JpVaAxcfHoz2v0PlxXQR3qGXWHGFJnZBnvXCGgIOS/9xDLshcwq+mGncOqn0ZzOeN3Ej8n87NS3Cp5JaYNe9BRsLIAMh0A99lJA1+507BzE0Jc1IeivXVWsTJSlGgypppcQIfoC+pppDbm1IEiUyZnvZbx1qQypXicQonJdZ6Vp8fpuH+O3XP0YTUS1lQypMumYeWJ0QQ3pRNXlneV61OaMjfS1lllpRicrono+ZXVpkJh1Iei+ppVYnCx1lgkppimQofJ+GXppRJckEj5tiGt9+VUzfG2fHC4PXv6ZqUaNk/TsAaNUjlMBc03I31TumZS5WsXXQRmMAYLs4kkvFSf/2dIvQ1BlXP1+KEBNypg2MRjLMqRF6CwQkiP4AzRQ6pHKBXzoCqq340JOs9BxEJCZzBqkwU6QxVNBv7sHa/M6L85O36kW0Aen+/muMmit8OFEaM47z2F968G+L8A8J6PchasD9SBbYwqp7ZO/bXLG8k3qrHTWbDXZpzdgwy2vfTrXDdQh+ejn+aHkpIXAMji4KSYkoiRycWsboHzru2q0kJn1Mx3Wetaz1vK5Yy8TsL1HdEEIjb4MxT1DwUSP0rdgL/GHC+SGfyyquOdUArV3gxr5Z+TjpBTPkjOImsF69hK3VZdb1H10ErjMgOO0rlSYoaDf2011dtFOb95Zurx5wvPaZcHNn9AJu0lX/UwX/4nsQO60pCQ6HY3P1ut6edLvEPGaGtNCv3sVV8ZYaUzIAoi5dmInsJJQUWloaI+lJd8YUJ0cE==", "umidToken": "T2gALAVIpFBT5U7FFowCFJNlscnJoQTfY0gcFl_TLgVwXVx8x0DASL-mjQ_xaZvns_SvAyDdwZT2SflX4LohcCnF", "has_captcha": 0 }

console.log(encodeURIComponent(JSON.stringify(aa)));

