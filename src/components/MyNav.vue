<template>
	<div class="container">
		<ul>
			<li class='list'>
				<router-link class="mylink" to="/">首页</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="One">关于我们</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="Two">产品中心</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="Three">新闻中心</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="Four">联系我们</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="Five">在线留言</router-link>
			</li>		
		</ul>
	</div>
	
</template>

<script>
	export default {
		name: "MyNav"
	}
</script>

<style >
	ul,
	li {
		margin: 0;
		padding: 0;
	}
	li {
		list-style: none;
	}
	.container {
		    width: auto;
		height: 90px;
		/*line-height: 90px;*/
		font-size: 14px;
	}
	.container > ul {
		height: 32px;
		margin: 29px 0 29px 0;
		
	}
	.container > ul>li {
		width: 81px;
		line-height: 32px;
		border-right: 1px dotted #d9d9d9;
	}
	
	.container .list {
		display: inline-block;
		height: 100%;
		padding: 0 25px;
		position: relative;
	}
	.container .list .mylink {
		color: #434343;
		text-decoration: none;
	}
	.container .list:hover .mylink {
		color: #90133b;
	}
	
</style>