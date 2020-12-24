const puppeteer = require('puppeteer')

try {
    (async () => {
        const browser = await puppeteer.launch({
            headless: false,                     // 是否显示浏览器
            args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']          // 是否全屏显示
        });

        const page = await browser.newPage();

        await page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, 'webdriver', {
                get: () => undefined
            });
        });

        await page.setViewport({
            width: 1500,
            height: 900
        });

        const loginUrl = 'https://sellercenter.lazada.co.th/apps/seller/login'

        await page.goto(loginUrl, {
            waitUntil: 'load'
        });

        // 自动填充账号密码
        let accountEl = 'input[name="TPL_username"]'
        let pwdEl = 'input[name="TPL_password"]'
        let btnEl = '.next-btn-normal'
        let account = 'lazbao20@163.com'
        let pwd = 'LZDvcb654321.'

        try {
            await page.waitForSelector(accountEl);
            await page.focus(accountEl);
            await page.keyboard.type(account, 500);

        } catch (e) {
            console.log(e);
        }

        await page.waitFor(2000);

        try {
            await page.waitForSelector(pwdEl);
            await page.focus(pwdEl);
            await page.keyboard.type(pwd, 500);

        } catch (e) {
            console.log(e)
        }

        await page.waitFor(2000);

        try {
            await page.waitForSelector(btnEl);
            await page.$eval(btnEl, el => el.click());

        } catch (e) {
            console.log(e)
        }

        // await browser.close();
    })();
} catch (error) {
    console.log(error);
}

