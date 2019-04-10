<template>
<div class="newbg">
	<div class="newsview">
		<div class="newheder">
			<div class="newenglishtitle">
				News center
			</div>
			<div class="newtitle">
				新闻中心 
			</div>
		</div>
		<div class="newbox1">
			<div class="newboxone">
				<div class="newsimg">
					<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/04.jpg"/>
				</div>
				<div class="newimgtext">
					<div class="newimgtexttitle">
						健康喝啤酒的方法及注意事项
					</div>
					<div style="margin-bottom: 5px;">
						2018-09-01
					</div>
					<div style="text-align: left;">夏天到来，不只是冰镇饮料受欢迎，冰镇啤酒也非常的受欢迎。虽然啤酒含有多种营养，在夏天喝确实能够起到消暑降温的作用，但是啤......
						
					</div>
				</div>
			</div>
			<div class="newboxone">
				<div class="newsimg">
					<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/01.jpg"/>
				</div>
				<div class="newimgtext">
					<div class="newimgtexttitle">
						喝酒的注意事项
					</div>
					<div style="margin-bottom: 5px;">
						2018-09-01
					</div>
					<div style="text-align: left;">　一面饮酒，一面进食，酒在胃内停留时间长，酒精受胃酸的干扰，吸收缓慢，就不易酒醉。  　　酒这种饮料的特征之一便是在消化......
						
					</div>
				</div>
			</div>
			<div class="newboxone">
				<div class="newsimg">
					<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/03.jpg"/>
				</div>
				<div class="newimgtext">
					<div class="newimgtexttitle">
						饮酒后有哪些注意事项
					</div>
					<div style="margin-bottom: 5px;">
						2018-09-01
					</div>
					<div style="text-align: left;">1、  酒后不可以喝醋、喝茶解酒，这些都是误区，醋和茶都不能解酒。   2、  酒醉后较好不能喝浓茶，但可以喝点淡茶。茶......
						
					</div>
				</div>
			</div>
			<div class="newboxone">
				<div class="newsimg">
					<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/02.jpg"/>
				</div>
				<div class="newimgtext">
					<div class="newimgtexttitle">
						饮酒时应该注意这几点
					</div>
					<div style="margin-bottom: 5px;">
						2018-09-01
					</div>
					<div style="text-align: left;">由于酒精对肝脏的伤害较大，喝酒的时候应该多吃绿叶蔬菜，其中的抗氧化剂和维生素可保护肝脏。还可以吃一些豆制品，其中的卵磷脂......
						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
	
		
</template>

<script>
	export default {
		name: "MyNews"
		
	}
</script>

<style>
.newbg{
width: 100%;
		height: 590px;
		background-size: 100%;
		background-image: url('https://tpl-c2d5cce-pic36.websiteonline.cn/upload/bg-newproduct.jpg');
}
	.newsview{
		width: 1200px;
		height: 590px;
		margin: 0 auto;
		
	}
	.newheder{
	padding-top: 65px;
	height: 78px;
	/*background-color: salmon;*/
	    color: #ffffff;
	    font-family: 微软雅黑,Times New Roman;
	}
	.newenglishtitle{
		    font-size: 18px;
		    line-height: 140%;
		    font-family: Times New Roman;
	}
	.newtitle{
		line-height: 45px;
    font-size: 28px;
        

}
.newbox1{
	width: 100%;
	height: 340px;
	display: flex;
	margin-top: 30px;
}
.newboxone{
	width: 276px;
	height: 324px;
	margin-right: 20px;
    margin-bottom: 10px;
    border: 3px solid rgb(234,24,23,0);
}
.newsimg{
	width: 276px;
	height: 220px;
	margin-bottom: 8px;
}
.newsimg img{
	width: 100%;
	height: 100%;
	
}
.newimgtext{
	width: 100%;
	height: 96px;
	    line-height: 150%;
    font-family: Microsoft YaHei;
     font-size: 12px; 
    color: #ffffff;
    
}
.newimgtexttitle{
	font-size: 14px; 
	font-weight: bold;
        margin-bottom: 10px;
}
</style>


