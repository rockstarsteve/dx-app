<template>
	<view class="content">
		<view class="item-lit" v-for="(item,index) in dataList" :key='index'>
			{{item}}
		</view>
		<view class="btn" @tap='act'>
			开始新的数据
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				dataList: []
			}
		},
		onLoad() {
			uni.showLoading({
				title: '拉取数据中...'
			})
			uniCloud.callFunction({
				name: 'pachong-get-list'
			}).then((res) => {
				uni.hideLoading()
				console.log(res)
			}).catch((err) => {
				uni.hideLoading()
				uni.showModal({
					content: `删除失败，错误信息为：${err.message}`,
					showCancel: false
				})
				console.error(err)
			})
		},
		methods: {
			act(){
				uni.showLoading({
					title: '处理中...'
				})
				console.log('act----》')
				uniCloud.callFunction({
					name: 'my-pachong'
				}).then((res) => {
					uni.hideLoading()
					uni.showModal({
						content: '内容是：' + res.result,
						showCancel: false
					})
					console.log(res)
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `删除失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				})
			}
		}
	}
</script>

<style>
	.content {
		
	}

	
</style>
