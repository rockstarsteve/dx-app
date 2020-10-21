<template>
	<view>
		<view @tap="JUMP">
			<view class="">chat</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	created() {
		
	},
	watch: {
		
	},
	mounted() {
		uni.hideLoading();
	},
	methods: {
		JUMP(){
			console.log(111)
			uni.navigateTo({
				url: '../index/index',
				success: res => {},
				fail: (res) => {
					console.log(res)
				},
				complete: () => {}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.cu-avatar {
	background: none;
	border: 1px solid #ccc;
}

.VerticalBox {
	top: 0;
	left: 0;
	// height: 100vw;
	width: 100vw;
}

.fixed {
	position: fixed;
	z-index: 99;
}

.VerticalNav.nav {
	width: 200upx;
	white-space: initial;
	padding-top: 30upx;
}

.VerticalNav.nav .cu-item {
	width: 100%;
	text-align: center;
	background-color: #fff;
	margin: 0;
	border: none;
	height: 50px;
	position: relative;
}

.VerticalNav.nav .cu-item.cur {
	background-color: #f1f1f1;
}

.VerticalNav.nav .cu-item.cur::after {
	content: '';
	width: 8upx;
	height: 30upx;
	border-radius: 10upx 0 0 10upx;
	position: absolute;
	background-color: currentColor;
	top: 0;
	right: 0upx;
	bottom: 0;
	margin: auto;
}

.VerticalBox {
	display: flex;
}

.VerticalMain {
	background-color: #f1f1f1;
	flex: 1;
}
</style>
