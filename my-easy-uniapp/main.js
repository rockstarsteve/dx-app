import Vue from 'vue';
import App from './App';
import './plugins';
Vue.config.productionTip = false;

App.mpType = 'app';

import store from './config/store';
let vuexStore = require('./config/store/mixin.js');
Vue.mixin(vuexStore);

import publicModule from '@/components/public-module.vue';
Vue.component('publicModule', publicModule);


const app = new Vue({
	store,
    ...App
});
app.$mount();
