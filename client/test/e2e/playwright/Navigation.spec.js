const {chromium, devices, firefox} = require('playwright')
const {expect} = require('chai')
const delay = ms => new Promise(res => setTimeout(res, ms));

describe('E2e component testing on different devices', () => {
    it('Set of actions using chromium', async () => {
        let browser
        let page

        browser = await chromium.launch()
        page = await browser.newPage()

        await page.goto('http://localhost:8080/')

        const point = await page.$('text=About')
        await point.click()

        await delay(200)

        const back = await page.$('text=Back to home')
        expect(back).not.null
        await back.click()

        await delay(200)

        const pointAgain = await page.$('text=Anime Page')
        expect(pointAgain).not.undefined

        await page.close()
        await browser.close()
    })

    it('Set of action using Apple', async () => {
        let browser
        let page

        browser = await chromium.launch()
        const context = await browser.newContext({...devices['iPhone 11 Pro']})
        page = await context.newPage()
        await page.goto('http://localhost:8080/')

        const point = await page.$('text=About')
        await point.click()

        await delay(200)

        const back = await page.$('text=Back to home')
        expect(back).not.null
        await back.click()

        await delay(200)

        const pointAgain = await page.$('text=Anime Page')
        expect(pointAgain).not.undefined

        await page.close()
        await browser.close()
    })

    it('Set of action using Android', async () => {
        let browser
        let page

        browser = await chromium.launch()
        const context = await browser.newContext({...devices['Galaxy Fold']})
        page = await context.newPage()
        await page.goto('http://localhost:8080/')

        const point = await page.$('text=About')
        await point.click()

        await delay(200)

        const back = await page.$('text=Back to home')
        expect(back).not.null
        await back.click()

        await delay(200)

        const pointAgain = await page.$('text=Anime Page')
        expect(pointAgain).not.undefined

        await page.close()
        await browser.close()
    })

    it('Set of action using firefox', async () => {
        let browser
        let page

        browser = await firefox.launch()
        page = await browser.newPage()

        await page.goto('http://localhost:8080/')

        const point = await page.$('text=About')
        await point.click()

        await delay(200)

        const back = await page.$('text=Back to home')
        expect(back).not.null
        await back.click()

        await delay(200)

        const pointAgain = await page.$('text=Anime Page')
        expect(pointAgain).not.undefined

        await page.close()
        await browser.close()
    })
})
