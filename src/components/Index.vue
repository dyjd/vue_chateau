<template>
<div class="">
	<el-container>
		<el-main style='padding: 0'>
				<my-main></my-main>
			</el-main>
			<!--<el-main style='padding: 0'>
				<my-pinpai></my-pinpai>
			</el-main>
			<el-main style='padding: 0'>
				<my-can></my-can>
			</el-main>-->
	</el-container>
	<my-pinpai></my-pinpai>
	<my-can></my-can>
	<my-why></my-why>
	<my-news></my-news>
</div>
	
	
	
</template>

<script>
import MyMain from "./MyMain";
	import MyPinpai from "./MyPinpai";
	import MyCan from "./MyCan";
	import MyWhy from "./MyWhy";
	import MyNews from "./MyNews";
	
	export default {
		name: "Index",
		components: {			
			"my-main": MyMain,
			"my-pinpai": MyPinpai,
			"my-can": MyCan,
			"my-why": MyWhy,
			"my-news": MyNews,

		}
	}
</script>

<style>
.el-main {
		/*background-color: #E9EEF3;*/
		color: #333;
		text-align: center;
		line-height: 160px;
	}
</style>