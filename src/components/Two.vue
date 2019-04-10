<template>
	<div class="">
		<my-pic></my-pic>
		<my-can></my-can>
	</div>
</template>

<script>
	import MyPic from "./MyPic";
	import MyCan from "./MyCan";
	export default {
		name: "Two",
		components: {
			"my-pic": MyPic,
			"my-can": MyCan,

		}
	}
</script>

<style>

</style>