<template>
	<view class="new_detail">
		<view class="goods_swiper">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image :src="goodsList.goods_big_logo" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image :src="goodsList.goods_big_logo" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="">
			<view class="goods_name">
				<text></text>
			</view>
			<view class="goods_price">
				<text></text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				goodsList:{}
			}
		},
		methods: {
			
		},
		mounted(){
			let strUrl = window.location.href;
			let arrUrl=strUrl.split("/");
			let strPage=arrUrl[arrUrl.length-1];
			let str = strPage.replace(".html","").replace(".htm","")
			let numArr = str.match(/\d+/g)
			uni.request({
				url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/search",
				success:(res) => {
					this.goodsList = res.data.message.goods[numArr]
				}
			})
		}
	}
</script>

<style>

</style>
