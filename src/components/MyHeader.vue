<template>
	<div class="bigbox">
		<div class="box">
			<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/logo.png" />
			<span class="divspan">CHETEAU</span>
		</div>
		<div>
			<my-nav></my-nav>
		</div>
		<div class="box">
			
			<img class="call" src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/5lqo.png" />
			<span class="serv">服务热线： 021-785</span>
		
		</div>

	</div>
</template>

<script>
	import MyNav from "./MyNav";
	export default {
		name: "MyHeader",
		components: {
			"my-nav": MyNav

		}
	}
</script>

<style>
	.bigbox {
		display: flex;
	}
	
	.box {
		height: 50px;
		padding: 20px 0;
	}
	
	.divspan {
		color: rgb(144, 19, 59);
		font-family: 'Times New Roman';
		font-size: 28px;
		font-weight: bold;
		position: relative;
		top: -15px;
	}
	.call{
		width: 30px;
		height: 30px;
		position: relative;
		top: 10px;
		left: 5px;
	}
	.serv{
		    font-size: 13px;
    font-family: 微软雅黑;
	}
	
</style>