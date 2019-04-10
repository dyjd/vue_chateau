<template>
	<div class="">
		<my-pic></my-pic>
		<div class="canbox">
			<div class="product">Contact us</div>
			<div class="cantitle">联系我们</div>
			<div class="canimg">
				<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/Layer-456.png" />
			</div>
			<div class="canwe">因&nbsp;&nbsp;&nbsp;为&nbsp;&nbsp;&nbsp;专&nbsp;&nbsp;&nbsp;业， 所&nbsp;&nbsp;&nbsp;以&nbsp;&nbsp;&nbsp;选&nbsp;&nbsp;&nbsp;择&nbsp;&nbsp;&nbsp;我&nbsp;&nbsp;&nbsp;们
			</div>
		</div>
		<div class="fouraddview">
			<div class="addimg">地址</div>
			<div class="addtext">重庆市某某区某某路XXX号 某某大厦XXF</div>
			<div class="addimg phone">电话</div>
			<div class="addtext">1521242135422</div>
			<div class="addimg emil">邮箱</div>
			<div class="addtext">15215454@qq.com</div>
		</div>
		<div class="fourmap">
			
		</div>
	</div>
</template>

<script>
	import MyPic from "./MyPic";
	export default {
		name: "Four",
		components: {
			"my-pic": MyPic

		}
	}
</script>

<style>
	.canbox {
		height: 125px;
		line-height: 140%;
		margin-bottom: 10px;
	}
	
	.product {
		margin-top: 50px;
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
	
	.fouraddview {
		width: 411px;
		margin: 0 auto;
		margin-top: 20px;
	}
	
	.addimg {
		height: 26px;
		background-image: url('https://tpl-c2d5cce-pic36.websiteonline.cn/upload/up2v.png');
		background-size: 26px 26px;
		background-repeat: no-repeat;
		font-size: 14px;
		line-height: 180%;
		color: rgb(102, 102, 102);
		background-position-x: 161px;
	}
	
	.addtext {
		font-family: 微软雅黑;
		font-size: 16px;
		line-height: 180%;
		color: rgb(0, 0, 0);
		margin-bottom: 30px;
	}
	
	.phone {
		background-image: url('https://tpl-c2d5cce-pic36.websiteonline.cn/upload/r01x.png');
	}
	
	.emil {
		background-image: url('https://tpl-c2d5cce-pic36.websiteonline.cn/upload/zpry.png');
	}
	.fourmap{
		width: 1200px;
		margin: 0 auto;
		height: 380px;
	}
</style>