<template>
	<view>
		<publicModule @model="model"></publicModule>
		<swiper class="swiper" :current='swiperIndex' @change='pagesChange'>
			<swiper-item v-for="(item,i) in swiper" :key="i">
				<find v-if="pagesName=='find'" class="pages"></find>
				<notice v-if="pagesName=='notice'" class="pages"></notice>
				<chat v-if="pagesName=='chat'" class="pages"></chat>
				<me v-if="pagesName=='me'" class="pages"></me>
			</swiper-item>
		</swiper>

		<view class="nav">
			<view class="nav_list">
				<view @tap="navClick(item.eName,item.middle)" class="nav_list-block"
				:class="[item.middle?'nav_list-middle':'nav_list-block',pagesName==item.eName?'active':'']" 
				v-for="(item,s) in taber" :key="s">
					<view v-if="item.middle" class="nav_list-middle--icon "><view class="cuIcon-add"></view></view>
					<view v-if="!item.middle" class="nav_list-block--icon" :class="item.icon"></view>
					<view class="nav_list-block--word">{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import find from '@/pages/partA/taber/find.vue';
import notice from '@/pages/partA/taber/notice.vue';
import chat from '@/pages/partA/taber/chat.vue';
import me from '@/pages/partA/taber/me.vue';
export default {
	components: {
		find,
		notice,
		chat,
		me
	},
	data() {
		return {
			// taberStyle: this.$store.state.style.taberStyle,
			swiperIndex:0,
			pagesName:'',
			swiper:[]
		};
	},
	watch: {
		swiperIndex: {
			handler() {
					let pagesName = this.swiper[this.swiperIndex].eName;
					this.swiper.map((v,k)=>{
						if(v.eName === pagesName){
							this.swiperIndex = k;
							this.pagesName = pagesName;
							this.tools.setSite('pagesName',pagesName);
						}
					})
			},
			// immediate: true
		}
	},
	async onLoad() {
		//初始化pages 
		this.swiper = this.taber.filter(v=>{
			return !v.middle
		});
		this.pagesName = this.swiper[0].eName;
		let pagesName =  this.tools.getSite('pagesName');
		this.swiper.map((v,k)=>{
			if(v.eName === pagesName){
				this.swiperIndex = k;
				this.pagesName = pagesName;
				this.tools.setSite('pagesName',pagesName);
			}
		});
		
	},
	methods: {
		model(data) {   //模态窗
			if (data.index === 1) {
				if (data.main) {
					uni.showModal({
						title: '点击了是'
					});
				} else {
					uni.showModal({
						title: '点击取消'
					});
				}
			}
		},
		navClick(eName,middle,e){
			if(!middle){
				this.pagesName = eName;
				this.swiper.map((v,k)=>{
					if(v.eName === this.pagesName){
						this.swiperIndex = k;
					}
				})
			}else{
				this.tools.router('../index/index');
			}
		},
		pagesChange(event) {
			let eName = this.swiper[event.detail.current].eName;
			this.swiper.map((v,k)=>{
				if(v.eName === eName){
					this.swiperIndex = k;
				}
			});
		},
		Jump() {
			
		}
	},
	onShow() {}
};
</script>

<style lang="scss">
	@import '../../static/pagesCss/icon.css';
	.swiper {
		height: 100vh;
	}
	
	.pages {
		min-height: 100vh;
	}
	
	.nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		background-color: #fff;

		&_list {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			height: 100rpx;
			color: #ccc;
			&-block {
				height: 100%;
				width: 100vw;
				text-align: center;
				position: relative;

				&--icon {
					height: 40rpx;
					font-variant: small-caps;
					white-space: nowrap;
					font-size: 40rpx;
					line-height: 50rpx;
					position: absolute;
					top: 8rpx;
					left: 50%;
					transform: translateX(-50%);
				}
				&--word {
					font-size: 24rpx;
					height: 40rpx;
					line-height: 40rpx;
					position: absolute;
					bottom: 4rpx;
					left: 50%;
					transform: translateX(-50%);
				}
			}
			.active {
				color: #0081ff;
			}
			&-middle {
				height: 100%;
				width: 100vw;
				text-align: center;
				position: relative;
				&--icon {
					padding-top: 15rpx;
					position: absolute;
					width: 100rpx;
					z-index: 2;
					height: 100rpx;
					border-radius: 50%;
					top: -50rpx;
					text-align: center;
					left: 0;
					right: 0;
					margin: auto;
					background: #fff;

					> view {
						margin-left: 15rpx;
						width: 35px;
						height: 35px;
						border-radius: 50%;
						line-height: 35px;
						font-size: 25px;
						box-shadow: 3px 3px 4px #aaa;
						box-sizing: border-box;
						background-color: #0081ff;
						color: #ffffff;
						border: 1px solid rgba(0, 0, 0, 0.2);
					}
				}
				&--word {
					font-size: 24rpx;
					height: 40rpx;
					line-height: 40rpx;
					position: absolute;
					bottom: 4rpx;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}
	}

</style>
