<template>
	<view class="container">
		<uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar>
		<view style="height: 50rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					"letter": "A",
					"data": [
						"阿克苏机场",
						"阿拉山口机场",
						"阿勒泰机场",
						"阿里昆莎机场",
						"安庆天柱山机场",
						"澳门国际机场"
					]
				}, {
					"letter": "B",
					"data": [
						"保山机场",
						"包头机场",
						"北海福成机场",
						"北京南苑机场",
						"北京首都国际机场"
					]
				}]
			}
		},
		methods: {}
	}
</script>

<style>
	.container {
		/* padding: 20px;
		font-size: 14px;
		line-height: 24px; */
	}
</style>
