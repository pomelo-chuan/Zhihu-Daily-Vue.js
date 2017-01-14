<template>
<div>
	<div class="zhihu-head">
		<div class="center m1 h4 bold pt1" style="color: #282828">知乎日报</div>
		<div class="row mt2">
			<div class="col col-4 center">
				<router-link class="h6" to="/app">日报</router-link>
			</div>
			<div class="col col-4 center">
				<router-link class="h6" to="/themes">专题</router-link>
			</div>
			<div class="col col-4 center">
				<router-link class="h6" to="/description">关于</router-link>
			</div>
		</div>
	</div>
	<div style="height: 5rem"></div>
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
	position: fixed;
	z-index: 999;
	top: 0;
	width: 100%;
	height: 5rem;
	/* ===color=== */
	background-color: white;
	border-bottom: 2px solid #F5F4F4;
}

.zhihu-head a {
	color: #4e5257;
}

.router-link-active {
	font-weight: bold;
	font-size: 1.2rem;
}

@media screen and (min-width: 640px) {
	.zhihu-head-icon {
		width: 25px;
		height: 25px;
	}
}
</style>
