import { mapState } from 'vuex';
import store from './index.js';
let key = [];
try{
	key = store.state ? Object.keys(store.state) : [];
}catch(e){
	
}

module.exports = {
	created() {
		this.tools.vue = (name, value) => {
			this.$store.commit('$uStore', {
				name,value
			});
		};
	},
	computed: {
		// 将vuex的state中的所有变量，解构到全局混入的mixin中
		...mapState(key)
	}
};