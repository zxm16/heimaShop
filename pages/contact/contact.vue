<template>
	<view>
		<view class="contact">
			<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
			<view class="info">
				<view @click="phone">联系电话：17671724489 ( 点击拨打 )</view>
				<hr>	
				<view>校区地址：武汉市新洲区阳逻街市场小区1号（高潮社区居委会）</view>
				<hr>
			</view>
			<map name="" class="homeMap" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:114.569028,
				latitude: 30.661700,
				markers:[{
					longitude:114.569028,
					latitude: 30.661700,
					iconPath: '../../static/logo/homeLogo.JPG',
					width: 40,
					height: 40,
				}],
				scale: 17
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber: "17671724489"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			view{
				margin: 5px;
			}
		}
		.homeMap{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
