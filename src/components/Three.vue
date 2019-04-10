<template>
	<div class="">
		<my-pic></my-pic>
		<div class="canbox">
			<div class="product">News ​center</div>
			<div class="cantitle">新闻中心</div>
			<div class="canimg">
				<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/Layer-456.png" />
			</div>
			<div class="canwe">因为专业，所以选择我们</div>
		</div>
		<div class="containers">
			<ul>
				<li class='list'>
					<router-link class="mylink" to="ThreeIndex">行业新闻</router-link>
				</li>
				<li class='list'>
					<router-link class="mylink" to="ThreeOne">媒体报道</router-link>
				</li>
				<li class='list'>
					<router-link class="mylink" to="ThreeTwo">店内新闻</router-link>
				</li>
				<li class='list'>
					<router-link class="mylink" to="ThreeThree">饮酒七戒</router-link>
				</li>
			</ul>
		</div>
	<router-view></router-view>
	</div>
</template>

<script>
	import MyPic from "./MyPic";
	export default {
		name: "Three",
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
	
	.containers {
		/*margin-top: 30px;*/
		width: auto;
		height: 50px;
		font-size: 14px;
		color: firebrick;
		margin-bottom: 60px;
	}
	
	.containers>ul {
		height: 50px;
	}
	
	.containers>ul>li {
		width: 175.5px;
		/*line-height: 50px;*/
		background-color: #5a5a5a;
	}
	
	.containers .list {
		display: inline-block;
		height: 100%;
		padding: 0 10px;
		position: relative;
	}
	
	.containers .list .mylink {
		color: #FFFFFF;
		text-decoration: none;
		position: relative;
		top: -55px;
		/*line-height: 50px;*/
	}
	
	.containers .list:hover {
		background-color: #8ba462;
	}
</style>