<template>
	<div class="">
		<my-pic></my-pic>
		<div class="canbox">
			<div class="product">Mess​age</div>
			<div class="cantitle">在线留言</div>
			<div class="canimg">
				<img src="https://tpl-c2d5cce-pic36.websiteonline.cn/upload/Layer-456.png" />
			</div>
			<div class="canwe">因&nbsp;&nbsp;&nbsp;为&nbsp;&nbsp;&nbsp;专&nbsp;&nbsp;&nbsp;业， 所&nbsp;&nbsp;&nbsp;以&nbsp;&nbsp;&nbsp;选&nbsp;&nbsp;&nbsp;择&nbsp;&nbsp;&nbsp;我&nbsp;&nbsp;&nbsp;们
			</div>
		</div>
		<div class="fivemassgeviwe">
			<div class="fiveleft">
				<div class="fivelefttext">
					如果您对我们的产品有兴趣，或者想预约进店品尝均可给我们留言！<br /> 24小时为您服务，让您无后顾之忧！TEL:400-XXX-XXX
				</div>
				<div class="fiveleftimg"></div>
			</div>
			<div class="fiveright">
				<div style="margin: 60px;"></div>
				<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
					<el-form-item label="姓名">
						<el-input v-model="formLabelAlign.name"></el-input>
					</el-form-item>
					<el-form-item label="电话">
						<el-input v-model="formLabelAlign.region"></el-input>
					</el-form-item>
					<el-form-item label="邮箱">
						<el-input v-model="formLabelAlign.type"></el-input>
					</el-form-item>
					<!--<el-form-item label="您的需求">
						<el-input type="textarea" v-model="form.desc"></el-input>
					</el-form-item>-->
					<el-form-item label="您的需求">
						<el-input type="textarea" v-model="formLabelAlign.type"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">立即提交</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	import MyPic from "./MyPic";
	export default {
		name: "Five",
		components: {
			"my-pic": MyPic

		},
		data() {
			return {
				labelPosition: 'left',
				formLabelAlign: {
					name: '',
					region: '',
					type: ''
				}
			};
		},
		methods: {
			onSubmit() {
			alert('提交成功')
				console.log('submit!');
			}
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
	
	.fivemassgeviwe {
		display: flex;
		width: 1200px;
		margin: 50px auto;
		/*margin-top: 50px;*/
	}
	
	.fiveleft {
		width: 500px;
	}
	
	.fivelefttext {
		font-size: 14px;
		line-height: 200%;
		color: rgb(153, 153, 153);
		font-family: 微软雅黑;
		text-align: left;
	}
	
	.fiveleftimg {
		width: 100%;
		height: 300px;
		background-image: url('https://tpl-c2d5cce-pic36.websiteonline.cn/upload/04.jpg');
		background-size: 100% auto;
	}
	
	.fiveright {
		margin-left: 50px;
		width: 600px;
	}
</style>