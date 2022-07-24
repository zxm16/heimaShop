<template>
	<view>
		<view class="news">
			<view class="news_list" 
			v-for="(item, index) in newsList" 
			:key="index" 
			v-if="item.goods_small_logo"
			@click="enter(index)"
			>
				<view class="news_item">
					<view class="news_item_img">
						<image :src="item.goods_small_logo" mode=""></image>
					</view>
					<view class="news_item_text">
						<text>{{item.goods_name}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		methods: {
			enter(id){
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id=' + id
				})
			}
		},
		mounted(){
			uni.request({
				url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/search",
				success:(res) => {
					this.newsList = res.data.message.goods
				}
			})
		}
	}
</script>

<style lang="scss">
.news{
	width: 750rpx;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 5rpx 5rpx;
	background-color: #eee;
	.news_list{
		.news_item{
			width: 740rpx;
			height: 180rpx;
			display: flex;
			flex-direction: row;
			flex: 1;
			border: 1px solid #eee;
			margin: 6rpx 0;
			background-color: white;
			flex-wrap: nowrap;
			justify-content: space-between;
			.news_item_img{
				image{
					width: 140rpx;
					height: 140rpx;
					
				}
			}
			.news_item_text{
				width: 580rpx;
				margin-top: 20rpx;
				text{
					font-size: 30rpx;
				}
			}
		}
	}
}
</style>
