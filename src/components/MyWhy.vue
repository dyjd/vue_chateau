<template>
	<div class="whyview">
		<div class="whypic"></div>
		<div class="whytext">
			<div class="Whychooseus">Why choose us</div>
			<div class="whytitle">为什么选择我们</div>
			<div class="whytext1">xxxx红酒是由爱国旅意侨领xxx先生投资的自主进出口经营权的大型贸易公司，xxxx红酒系公司旗<br /> 下又一酒业专营的代理品牌。xxxx红酒经营的系列产品均由意大利**酿酒师精心酿制，为消费者带
				<br /> 来更有个性化的服务及物超所值的选择，向中国市场提供极高品质，富有竞争力的中高档白葡萄酒，
				<br />红葡萄 酒，香槟等葡萄酒产品。
			</div>
			<div class="whytime">
				<div class="whytimeview">
					<div class="yers">
						<span class="yearspan">18</span>年
					</div>
					经营经验
				</div>
				<div class="whytimeview">
					<div class="yers">
						<span class="yearspan">90</span>+
					</div>
					精品红酒
				</div>
				<div class="whytimeview">
					<div class="yers">
						<span class="yearspan">300</span>个
					</div>
					获专利产品
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "MyWhy"
	}
</script>

<style>
	.whyview {
		/*position: absolute;*/
		height: 500px;
		background-color: rgb(244, 246, 249);
		width: 100%;
		display: flex;
	}
	
	.whypic {
		height: 100%;
		width: 50%;
		background-image: url('https://tpl-c2d5cce-pic36.websiteonline.cn/upload/bg_0thq.jpg');
		background-repeat: no-repeat;
	}
	
	.whytext {
		height: 100%;
		width: 50%;
		text-align: center;
		line-height: 140%;
		margin-right: 110px;
	}
	
	.Whychooseus {
		margin-top: 80px;
		color: #90133b;
		font-family: 'Times New Roman';
		font-size: 18px;
	}
	
	.whytitle {
		font-size: 28px;
		margin: 20px auto;
	}
	
	.whytext1 {
		height: 120px;
		width: 100%;
		line-height: 28px;
		color: rgb(102, 102, 102);
		font-family: 微软雅黑;
		font-size: 13px;
		margin-left: 40px;
		text-align: left;
	}
	
	.whytime {
		width: 100%;
		margin-left: 40px;
		display: flex;
		margin-top: 40px;
	}
	
	.whytimeview {
		width: 150px;
		height: 120px;
		/*background-color: red;*/
		margin: 0 auto;
		text-align: center;
		    color: rgb(67, 67, 67);
	}
	.yers{
		height: 80px;
		width: 100%;
		
	}
	.yearspan{
		    line-height: 160%;
    font-size: 50px;
    font-family: 微软雅黑;
    color: rgb(144, 19, 59);
	    font-weight: bold;
	}
</style>