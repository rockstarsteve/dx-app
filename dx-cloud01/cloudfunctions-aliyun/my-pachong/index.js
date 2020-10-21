'use strict';

const puppeteer = require('puppeteer')

exports.main = async (event, context) => {
	// 初始化无头浏览器
	const browser = await puppeteer.launch({
		headless: false
	});
	// 在无头浏览器打开一个空白标签
	const page = await browser.newPage();
	// 给刚刚打开的空白标签给予链接跳转
	await page.goto('https://s.weibo.com/top/summary');
	// close()用于关闭无头浏览器
	browser.close()
	
	console.log('page:',page)
	
	return '执行完毕啦'
};
