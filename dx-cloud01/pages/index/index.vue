<template>
	<view class="content">
		<view class="btn" @tap='act'>
			开始拉取
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			act(){
				console.log('----》')
			}
		}
	}
</script>

<style>
	.content {
		
	}

	
</style>
