<template>
	<div class="candiv">
		<div class="canbox">
			<div class="product">Product ​center</div>
			<div class="cantitle">产品中心</div>
			<div class="canimg">
				<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/Layer-456.png" />
			</div>
			<div class="canwe">因为专业，所以选择我们</div>
		</div>
		<my-canpic></my-canpic>
	</div>
</template>

<script>
	import MyCanpic from "./MyCanpic";
	export default {
		name: 'MyCan',
		components: {
			"my-canpic": MyCanpic,			
		}
	}
</script>

<style>
	.candiv {
		width: 1200px;
		margin: 0 auto;
	}
	.canbox{
		height: 125px;
		line-height: 140%;
		margin-bottom: 10px;
	}
	.product {
		margin-top: 80px;
		color: #90133b;
		font-family: 'Times New Roman';
		font-size: 18px;
	}	
	.cantitle {
		color: rgb(0, 0, 0);
		font-family: 微软雅黑;
		line-height: 200%;
		font-size: 28px;
		font-weight: normal;
		font-style: normal;
		/*margin-bottom: 10px;*/
	}	
	.canimg img {
		width: 66px;
		height: 16.2px;
		opacity: 0.3;
	}	
	.canwe {
		/*margin-top: 10px;*/
		line-height: 24px;
		color: rgb(114, 114, 114);
		font-family: 微软雅黑;
		font-size: 14px;		
	}
</style>