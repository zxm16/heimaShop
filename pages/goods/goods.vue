<template>
		<view class="hot_goods">
			<view class="goods_list">
				<view class="goods_item" v-for="item in goodsList" :key="goods_id" v-if="item.goods_small_logo">
					<image :src="item.goods_small_logo" mode=""></image>
					<view class="price">
						<text>{{item.goods_price}}</text>
						<text>{{item.goods_price}}</text>
					</view>
					<view class="name">
						{{item.goods_name}}
					</view>
				</view>
			</view>
			<view class="isOver" v-if="flag">
				------------------已经到底了-----------------
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[],
				flag: true
			}
		},
		mounted(){
			uni.request({
				url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/search",
				success:(res) => {
					this.goodsList = res.data.message.goods
				}
			})
		},
		onReachBottom(){
			// if(this.goodsList < 5){
			// 	this.flag = true
			// }
		},
		onPullDownRefresh(){
			this.goods = []
			
		}
	}
</script>

<style lang="scss">
.hot_goods{
		background-color:#eee;
		overflow: hidden;
		.goods_list{
			padding: 0 15rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.goods_item{
				background: #fff;
				width: 355rpx;
				margin: 10rpx 0;
				padding: 15rpx;
				box-sizing: border-box;
				image{
					width: 80%;
					height: 150px;
					display: block;
					margin: 0 auto;
				}
				.price{
					color: $shop_color;
					font-size: 36rpx;
					text:nth-child(2){
						color: #ccc;
						font-size: 28rpx;
						margin-left: 7rpx;
						text-decoration: line-through;
						
					}
				}
				.name{
					font-size: 28rpx;
					line-height: 50rpx;
					padding-bottom: 15rpx;
					padding-top: 10rpx;
				}
				
			}
		}
	}
	.isOver{
		margin-top: 5px;
		margin-bottom: 5px;
		width: 100%;
		text-align: center;
		color: #ccc;
	}
</style>
