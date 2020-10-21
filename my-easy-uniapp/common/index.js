import store from '../config/store/index.js';
import cofig from '../config/index.js';
var app = {
	alert(msg) {
		if (msg) {
			uni.showToast({
				title: msg,
				icon: 'none'
			});
		}
	},
	router(url,type){
		if(type){	//以后在写。
			
		}
		uni.navigateTo({
			url: url
		});
	},
	geturl(that) {
		var url = decodeURIComponent(that.$route.params.id); //解码防止后端大大没处理
		var theRequest = new Object();
		if (url != '') {
			var str = url;
			var strs = str.split('&');
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split('=')[0]] =
					(strs[i].split('=')[1]) == 'null' ? '' : (strs[i].split('=')[1]);
			}
		}
		return theRequest;
	},
	getSite(name) {
		return name ? uni.getStorageSync('site')[name] || '' : uni.getStorageSync('site') || '';
	},
	setSite(name, Json) {
		let site = uni.getStorageSync('site') || {};
		site[name] = Json;
		uni.setStorageSync('site', site);
	}
};

module.exports = app;
