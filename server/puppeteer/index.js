const puppeteer = require('puppeteer')

const getPrice = async () => {
	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.newPage()
	await page.goto(
		'https://pttreklamws.ptt.gov.tr/HesapMakinesi/index_tr.html',
	)
	
	await browser.close()
}

module.exports = { getPrice }
