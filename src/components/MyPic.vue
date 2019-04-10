<template>
	<div class="mypicview">
		<div class="bgtext">
			<span class="title">高贵品味，与生俱来</span>
			<br /><br />
			<p class="per">品味大自然较初始的味道
				<br />
				<span class="eng">TASTE THE TASTE OF THE ORIGINAL NATURE</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MyPic"
	}
</script>

<style>
	.mypicview {
		width: 100%;
		height: 380px;
		background-image: url("https://tpl-c2d5cce-pic36.websiteonline.cn/upload/para.jpg");
	}
	
	.bgtext {
		width: 1200px;
		height: 138px;
		/*background-color: red;*/
		position: absolute;
		margin: auto 0;
		text-align: left;
		line-height: 140%;
		color: rgb(255, 255, 255);
		left: 110px;
		top: 220px;
	}
	
	.title {
		font-family: 微软雅黑;
		font-size: 50px;
		font-weight: bold;
		letter-spacing: 15px;
	}
	
	.per {
		font-size: 24px;
		font-family: SimSun;
	}
	
	.eng {
		font-size: 14px;
	}
</style>