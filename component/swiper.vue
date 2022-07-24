<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swiperList" :key="item.goods_id">
				<view class="swiper-item">
					<image :src="item.image_src" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList:[]
			}
		},
		mounted(){
			uni.request({
				url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
				success:(res) => {
					this.swiperList = res.data.message
				}
			})
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 750rpx;
				height: 380rpx;
			}
		}
	}
</style>