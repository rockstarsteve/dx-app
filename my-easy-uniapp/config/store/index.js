import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import $config from '../index.js';
let lifeData = {};

try {
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	lifeData = uni.getStorageSync('lifeData');
} catch (e) {

}

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['global', 'taber', 'uid', 'style', 'token'];
//加载计时器
let clearTime;
// 保存变量到本地存储中
const saveLifeData = function(key, value) {
	// 判断变量名是否在需要存储的数组中
	if (saveStateKeys.indexOf(key) != -1) {
		// 获取本地存储的lifeData对象，将变量添加到对象中
		let tmp = uni.getStorageSync('lifeData');
		// 第一次打开APP，不存在lifeData变量，故放一个{}空对象
		tmp = tmp ? tmp : {};
		tmp[key] = value;
		// 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
		uni.setStorageSync('lifeData', tmp);
	}
};

const store = new Vuex.Store({
	state: {
		global: lifeData.global ? lifeData.global : {mainLog: true,open: true},
		style: lifeData.style ? lifeData.style : {active: 'red',middle: 'blue',niActive: 'gray'},
		taber: lifeData.taber ? lifeData.taber :[],
		uid: lifeData.uid ? lifeData.uid :'',
		token: lifeData.token ? lifeData.token :'',
		myModel:{},
		loadingShow: false,
	},
	mutations: {
		setMyModel(state, data) {
			if(data.myModel){
				state.myModel = {};
			} else {
				state.myModel = data;
			}
		},
		setLoadingShow(state, data) {
			if(state.loadingShow){
				clearTime && clearTimeout(clearTime);
			}
			state.loadingShow = data;
			if($config.loadingDuration){
				clearTime = setTimeout(()=>{
					state.loadingShow = false;
				},$config.loadingDuration);
			}
		},
		$uStore(state, payload) {
			let nameArr = payload.name.split('.');
			let saveKey = '';
			let len = nameArr.length;
			if (len >= 2) {
				let obj = state[nameArr[0]];
				for (let i = 1; i < len - 1; i++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[len - 1]] = payload.value;
				saveKey = nameArr[0];
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地，见顶部函数定义
			saveLifeData(saveKey, state[saveKey]);
		}
	},
	actions: {
		$uStore({rootState}, params) {
			let nameArr = params.name.split('.');
			if(nameArr.length >= 2) {
				let obj = rootState[nameArr[0]];
				for(let i = 1; i < nameArr.length - 1; i ++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[nameArr.length - 1]] = params.value;
			} else {
				rootState[params.name] = params.value;
			}
		}
	}
});

export default store;
