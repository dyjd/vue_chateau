<template>
<div class="footerview">
	<div class="footerleft">
		<div class="footerlefttitle">ABOUT US</div>
		<div class="footerlefttext">xxxx红酒是由爱国旅意侨领xxx先生投资的自主进出口经营权的大型贸易公司，
			xxxx红酒系公司旗下又一酒业专营的代理品牌。xxxx红酒经营的系列产品均由意大利**酿酒师精心酿制，为消费者带
			来更有个性化的服务及物超所值的选择，向中国市场提供极高品质，富有竞争力的中高档白葡萄酒，红葡萄酒，香槟等葡
			萄酒产品</div>
	</div>
	<div class="footerright">
		<div class="footerlefttitle">CONTACT US</div>
		<div class="footerlefttext rightmargiin">上海市某某区某某路XXX号某某大厦XXF 	<br />邮箱：邮箱地址@163.com
			<br />手机：130 XXXX XXXX
			<br />电话：021-XXXXXXX</div>
	</div>
</div>
</template>

<script>
	export default {
		name: "MyFooter"
	}
</script>

<style>
	.footerview{
		width: 1200px;
		margin: 0 auto;
		display: flex;
		text-align: left;
	}
	.footerleft{
		width: 810px;
		
	}
	.footerlefttitle{
		    font-weight: bold;
		        line-height: 200%;
		            color: rgb(255, 255, 255);
    font-family: "Times New Roman";
    font-size: large;
	}
	.footerlefttext{
		    color: #888888;
		    line-height: 140%;
		        font-family: 微软雅黑;
    font-size: 13px;
	}
	.footerright{
		margin-left: 40px;
		width: 320px;
	}
	.rightmargiin{
		line-height: 200%;
	}
</style>