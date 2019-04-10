<template>
	<div id="app">
		<el-container>
			<el-header style='height:90px;margin: 0px auto;'>
				<my-header></my-header>
			</el-header>
			<el-main style='padding: 0'>
				<router-view></router-view>
			</el-main>
			
			
			<!--<el-main style='padding: 0'>
				<my-main></my-main>
			</el-main>
			<el-main style='padding: 0'>
				<my-pinpai></my-pinpai>
			</el-main>
			<el-main style='padding: 0'>
				<my-can></my-can>
			</el-main>-->
			
			<el-footer style='height:150px;background-color: rgb(24, 24, 24);'><my-footer></my-footer></el-footer>
		</el-container>
	</div>
</template>

<script>
	import MyHeader from "./components/MyHeader";
	import MyMain from "./components/MyMain";
	import MyPinpai from "./components/MyPinpai";
	import MyCan from "./components/MyCan";
	import MyFooter from "./components/MyFooter";

	export default {
		name: 'App',
		components: {
			"my-header": MyHeader,
			"my-main": MyMain,
			"my-pinpai": MyPinpai,
			"my-can": MyCan,
			"my-footer": MyFooter,

		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	.el-header,
	.el-footer {
		/*background-color: #B3C0D1;*/
		color: #333;
		text-align: center;
		/*line-height: 60px;*/
	}
	
	.el-main {
		/*background-color: #E9EEF3;*/
		/*color: #333;*/
		text-align: center;
		line-height: 160px;
	}
	ul,
	li {
		margin: 0;
		padding: 0;
	}
	li {
		list-style: none;
	}
</style>