import Global from './global/index.js';
module.exports = {
	//是否调用远程服务器global
	bigLog:false,
	//全局样式设置
	globalStyle:Global.globalStyle,
	//全局taber设置
	taber:Global.taber,
	//全局router设置
	router:Global.router,
	//请求接口
	baseUrl: '',
	//加载时显示文字
	loadingText: '加载中...',
	//强制加载时间	0永久
	loadingDuration: 0,
	//消息框消失时间
	messageDuration: 3000,
	// 放置生成的远程资源图片目录。
	assetsDir: 'http://sssss',
	//项目名称
	title: 'my-esay-uniapp',
};
