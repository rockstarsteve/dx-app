import Vue from 'vue';
// import $AppEntryController from './AppEntryController/index.js'
// Vue.prototype.$AppEntryController = $AppEntryController;

// import * as $scalc from '../common/scalc';
import $cloud from './cloud';
Vue.prototype.$cloud = $cloud.clouds;

//公用方法
import $tools from '../common/index.js';
Vue.prototype.tools = $tools;


//挂在设置
import config from '../config/index.js';
Vue.prototype.$config = config;

//挂载全局http请求
// import $http from './http';
// Vue.prototype.$http = $http;

