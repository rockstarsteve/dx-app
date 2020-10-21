module.exports = {
	globalStyle: {
		navbar: {
			background: { backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))' },
			headColor: 'blue',
			mainColor: 'red',
			titlColor: '#fff'
		},
		taberStyle: { active: 'blue', bg: '#fff', current: 0, inactive: '', midButton: true }
	},
	taber: [
		{ eName: 'find', icon: 'cuIcon-search', name: '发现' },
		{ eName: 'notice', icon: 'cuIcon-activity', name: '招募' },
		{ eName: 'up', icon: 'cuIcon-search', middle: true, name: '发布' },
		{ eName: 'chat', icon: 'cuIcon-message', name: '闲聊' },
		{ eName: 'me', icon: 'cuIcon-home', name: '我的' }
	],
	router:[
		{
			url:'pages/partA/index',	//页面path判断
			type:'R',			//导航的展式				NO不展示
			login:false,			//强制登录
			title:'标题名称'
		},
		{
			url:'pages/index/index',	//页面path判断
			type:'R',			//导航的展式				NO不展示
			login:true,			//强制登录
			title:'测试标题'
		},
	]
};
