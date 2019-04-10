<template>
	<div class="mybg">
		<template>
			<el-carousel indicator-position="none">
				<el-carousel-item v-for="item in 3" :key="item">
					<!--<h3>{{ item }}</h3>-->
					<div class="bgtext">
						
							<span class="title">高贵品味，与生俱来</span>
							<br /><br />
						
						<p class="per">品味大自然较初始的味道
						<br />
						<span class="eng">TASTE THE TASTE OF THE ORIGINAL NATURE</span>
						</p>
					</div>
				</el-carousel-item>
			</el-carousel>
		</template>
	</div>
	

</template>

<script>
	export default {
		name: "MyBg",
		components: {

		}
	}
</script>

<style >
	p {
		margin: 0;
		padding: 0;
	}
	
	.mybg {
		width: 100%;
		height: 650px;
		position: relative;
	}
	
	.el-carousel__container {
		height: 650px;
	}
	
	.el-carousel__item:nth-child(3n) {
		background-image: url('https://tpl-c2d5cce-pic36.websiteonline.cn/upload/bn.jpg');
		background-size: 100% 100%;
	}
	
	.el-carousel__item:nth-child(3n+1) {
		background-image: url('https://tpl-c2d5cce-pic36.websiteonline.cn/upload/bn3.jpg');
	}
	
	.el-carousel__item:nth-child(3n+2) {
		background-image: url('https://tpl-c2d5cce-pic36.websiteonline.cn/upload/bn2.jpg');
	}
	
	.bgtext {
		width: 1200px;
		height: 138px;
		/*background-color: red;*/
		/*position: absolute;*/
		margin: 256px 110px 256px 110px;
		text-align: center;
		line-height: 140%;
		color: rgb(255, 255, 255);
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
	.eng{
		font-size: 14px;
	}
</style>