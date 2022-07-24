<template>
	<view class="">
		<swiperList/>
		<fontnav/>
		<goods/>
	</view>
</template>

<script>
	import swiperList from "../../component/swiper.vue"
	import fontnav from "../../component/fontnav.vue"
	import goods from "../../component/goods.vue"
	
	export default {
		data() {
			return {
			}
		},
		components:{swiperList, fontnav, goods}
	}
</script>

<style>
	
</style>
