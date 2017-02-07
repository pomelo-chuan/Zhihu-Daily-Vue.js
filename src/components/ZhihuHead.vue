<template>
<div>
	<div class="zhihu-head">
		<div class="m1 h4 bold pt1 pl2" style="color: black">知乎日报</div>
		<div class="row mt2">
			<div class="col col-4 center">
				<router-link class="h5" to="/app">日报</router-link>
			</div>
			<div class="col col-4 center">
				<router-link class="h5" to="/themes">专题</router-link>
			</div>
			<div class="col col-4 center">
				<router-link class="h5" to="/description">关于</router-link>
			</div>
		</div>
	</div>
	
</div>
</template>

<script>
export default {
	data: function() {
		return {}
	},
	name: 'ZhihuHead',
	components: {

	},
	methods: {

	}
}
</script>

<style>
.zhihu-head {
	/* ===position and size=== */
	width: 100%;
	height: 4.5rem;
	/* ===color=== */
	background-color: white;
	border-bottom: 2px solid #F5F4F4;
}
.router-link-active {
	color: black !important;
	font-weight: bold;
	font-size: 1.2rem;
	outline: none;
}

.zhihu-head a {
	color: #333333;
	outline: none;
}



@media screen and (min-width: 640px) {
	.zhihu-head-icon {
		width: 25px;
		height: 25px;
	}
	.zhihu-head a {
		color: #333333;
		outline: none !important;
	}
	.zhihu-head a:hover{
		color: black;
		transition: color 1s ease;
	}
}
</style>
