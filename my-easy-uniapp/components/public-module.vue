<template>
	<view>
		<!-- 加载动画组件 -->
		<myLoading></myLoading>
		
		<!-- 模态窗 -->
		<myModel @comfig='comfig'></myModel>
		
		<!-- 导航 -->
		<!-- #ifndef H5 -->
		<myHead :type='type' :title='title'></myHead>
		<!-- #endif -->
		
	</view>
</template>
  
<script>
	import $config from '@/config/index'
	import myLoading  from '@/components/common/loading.vue'
	import myModel  from '@/components/common/model.vue'
	import myHead  from '@/components/common/head.vue'
	export default {
		components:{
			myLoading,
			myModel,
			myHead
		},
		data(){
			return{
				type: 'LR',
				myModels:'',
				title:$config.title
			}
		},
		methods:{
			comfig(res){
				console.log(res)
				this.$emit('model', res)
			}
		},
		mounted() {
		},
		watch: {		//等会在写把这块代码无视
			type: {
				handler(){
					let route = getCurrentPages();
					console.log(route)
					if(route && route[route.length - 1].route){
						route = route[route.length - 1].route;
						let pagesPower = $config.router;
						console.log(pagesPower)
						let nowPage = pagesPower.filter(v=>{
							return v.url == route
						})
						console.log(nowPage)
						if(nowPage.length>0){
							this.type = nowPage[0].type;	//导航样式
							this.login = nowPage[0].login;	//是否登录
							this.title = nowPage[0].title;	//标题
							
							// #ifdef H5 
							uni.setNavigationBarTitle({
							　　title:this.title || $config.title
							})
							// #endif
							
						}else{
							this.type = 'LR';
							title:this.title || $config.title;
						}
					}
				},
				immediate:true
			}
		},
	};
</script>
<style lang="scss" scoped>

</style>
