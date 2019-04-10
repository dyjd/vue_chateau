<template>
	<div class='pinbox'>
		<div class="pindiv">
			<div class="picdiv">
				<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/Layer-455-570x570.jpg" />
			</div>
			<div class="pintext">
				<div class="welcome">Welcome</div>
				<div class="pintitle">品牌历史</div>
				<div class="pinimg">
					<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/Layer-456.png" />
				</div>
				<div class="mywe">我们的酒庄位于澳大利亚的南部小镇</div>
				<div class="mywe juli">距离慕尼黑200公里左右。酒庄的历史源远流长，可追溯至1734年​​​​</div>
				<div class="mywe">中国的《本草纲目》中记载了黄酒的神奇功效</div>
				<div class="mywe jiu">酒诞生至今已足足280年</div>
				<div class="more">MORE +</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MyPinpai",
		components: {

		}
	}
</script >

<style scoped>
	.pinbox {
		margin: 0px auto;
		width: 1200px;
		height: 560px;
	}
	
	.pindiv {
		width: 1200px;
		height: 560px;
		/*background-color: red;*/
		margin: 0px auto;
		display: flex;
		position: absolute
	}
	
	.picdiv {
		left: 0px;
		top: -80px;
		position: relative;
		z-index: 2;
		width: 570px;
		height: 570px;
	}
	
	.picdiv img {
		width: 570px;
		height: 570px;
		display: inline;
		z-index: 2;
	}
	
	.pintext {
		width: 100%;
		height: 560px;
		text-align: center;
		line-height: 140%;
	}
	
	.welcome {
		margin-top: 80px;
		color: #90133b;
		font-family: 'Times New Roman';
		font-size: 18px;
	}
	
	.pintitle {
		color: rgb(0, 0, 0);
		font-family: 微软雅黑;
		line-height: 200%;
		font-size: 28px;
		font-weight: normal;
		font-style: normal;
		margin-bottom: 15px;
	}
	
	.pinimg img {
		width: 66px;
		height: 16.2px;
		opacity: 0.3;
	}
	
	.mywe {
		margin-top: 10px;
		line-height: 24px;
		color: rgb(114, 114, 114);
		font-family: 微软雅黑;
		font-size: 14px;
	}
	
	.juli {
		color: rgb(67, 67, 67);
	}
	
	.jiu {
		margin: 20px auto;
	}
	
	.more {
		width: 128px;
		height: 34px;
		line-height: 34px;
		border-radius: 30px 30px 30px 30px;
		background-color: rgba(139, 164, 98, 1);
		border: 1px solid rgba(139, 164, 98, 1);
		color: white;
		margin: 40px auto;
	}
</style>