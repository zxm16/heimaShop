<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">	
			<view 
			:class="active === index ? 'active':'' " 
			v-for="(item, index) in picList" 
			:key="index"
			@click="changeList(index, item.name)">{{item.name}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="item" v-for="(item, index) in picList" :key="item.name" v-if="item.name == name">
				<image :src="item.image_src"></image>
				<text>{{item.name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picList:[],
				active: 0,
				name:'优质服饰'
			}
		},
		methods: {
			changeList(index, name){
				this.active = index
				this.name = name
			},
		},
		mounted(){
			uni.request({
				url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
				success:(res) => {
					this.picList = res.data.message[0].product_list
				}
			})
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
}
.pics{
	height: 100%;
	display: flex;
	.left{
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view{
			height: 60px;
			line-height: 60px;
			text-align: center;
			font-size: 30rpx;
			color: #000;
			border-top: 1px solid #eee;
		}
		.active{
			background-color: $shop-color;
			color: #fff;
		}
	}
	.right{
		width: 530rpx;
		height: 100%;
		margin: 5px auto;
		.item{
			image{
				width: 530rpx;
				height: 530rpx;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
