<template>
	<view class="content">
		<publicModule @model="model"></publicModule>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script>
import config from '../../config/index.js';
export default {
	data() {
		return {
			title: '跳转测试'
		};
	},
	onLoad() {
		
	},
	methods: {
		model() {}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
