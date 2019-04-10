<template>
	<div class="">
		<my-pic></my-pic>
		<div class="canbox">
			<div class="product">Welcome</div>
			<div class="cantitle">关于我们</div>
			<div class="canimg">
				<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/Layer-456.png" />
			</div>
			<div class="canwe">因为专业，所以选择我们</div>
		</div>
		<div class="pinweiview"></div>
		<div class="pingtext">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业经营国外知名洋酒红酒类的销售公司。网店成立2009，业务范围目 前遍布全国，在全国大多数城市拥有销售网络。公司产品遍布全国众多国际型大卖场， 大型高级商场、超市，星级酒店，夜总会，中西餐厅，酒吧等。
			<br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;洋酒批发，洋酒招商，红酒批发，红酒团购，红酒招商，葡萄酒批发，进口红酒， 夜场洋酒，进口啤酒。​上海诺芯酒业洋酒红酒品种较多的一家批发商！经营洋酒：威士忌，白兰地，伏特加 ，龙舌兰，朗姆酒，力娇酒，小酒版，金酒开胃酒；葡萄酒：法国红酒，南非红酒，意大利红酒，阿根廷红酒，西班牙红酒，澳洲红酒， 智利红酒，十大名庄红酒，拉菲系列，奔富系列，玛歌系列，武当系列，拉图系列，靓茨伯系列，白马庄系列，龙船系列，红颜容系列； 洋酒礼盒，红酒礼盒，进口啤酒，香槟气泡酒；洋酒红酒餐酒产品上千种，让你拥有更多的选择。
		</div>
		<div class="jiustore">
			<div class="jiustoretext">
				<div class="jiustoretexttitle">酒庄基地故事</div>
				<div class="jiustoretexttext">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业经营国外知名洋酒红酒类的销售公司。 网店成立2009，业务范围目前遍布全国，在全国大多数城市拥有销售网络。公司产品遍布全国众多国 际型大卖场，大型高级商场、超市，星级酒店，夜总会，中西餐厅，酒吧等。
					<br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;洋酒批发，洋酒招商，红酒批发，红酒团购， 红酒招商，葡萄酒批发，进口红酒，夜场洋酒，进口啤酒。​上海诺芯酒业洋酒红酒品种较多的一家批发商！ 经营洋酒：威士忌，白兰地，伏特加，龙舌兰，朗姆酒，力娇酒，小酒版，金酒开胃酒；葡萄酒：法国红酒， 南非红酒，意大利红酒，阿根廷红酒，西班牙红酒，澳洲红酒，智利红酒，十大名庄红酒，拉菲系列， 奔富系列，玛歌系列，武当系列，拉图系列，靓茨伯系列，白马庄系列，龙船系列，红颜容系列；洋酒礼盒， 红酒礼盒，进口啤酒，香槟气泡酒；洋酒红酒餐酒产品上千种，让你拥有更多的选择。

				</div>
			</div>
			<div class="jiustorepic">
				<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/banner2-2.jpg" />
			</div>
		</div>
	</div>
</template>

<script>
	import MyPic from "./MyPic";

	export default {
		name: "One",
		components: {
			"my-pic": MyPic,

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
	
	.pinweiview {
		width: 604px;
		height: 329px;
		background-image: url('https://tpl-c2d5cce-pic36.websiteonline.cn/upload/ab1.jpg');
		background-size: 100% 110%;
		margin: 50px auto;
	}
	
	.pingtext {
		width: 1200px;
		line-height: 200%;
		font-family: 微软雅黑;
		font-size: 13px;
		color: #5a5a5a;
		margin: 0 auto;
		text-align: left;
		margin-bottom: 50px;
	}
	
	.jiustore {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		margin-bottom: 50px;
	}
	
	.jiustoretext {
		width: 586px;
		height: 454px;
		margin-right: 20px;
		text-align: left;
	}
	
	.jiustoretexttitle {
		font-size: 26px;
		color: rgb(139, 164, 98);
		font-family: 微软雅黑;
		font-weight: bold;
		margin-bottom: 50px;
		line-height: 140%;
	}
	
	.jiustoretexttext {
		margin-top: 50px;
		line-height: 200%;
		font-family: 微软雅黑;
		font-size: 13px;
		color: #5a5a5a;
		margin: 0 auto;
		text-align: left;
		margin-bottom: 50px;
	}
	
	.jiustorepic {
		width: 570px;
		height: 454px;
	}
</style>