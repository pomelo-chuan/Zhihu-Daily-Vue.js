<template>
  <div class="zhihu-head-fixed row pt1">
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
</template>

<script>

export default {
  name: 'ZhihuHeadFix',
  components: {
    
  }
}
</script>

<style>
.zhihu-head-fixed{
	height: 2rem;
	background-color: white;
    opacity: 1;
}

.zhihu-head-fixed a{
	color: #333333;
}

@keyframes ZhihuHeadFixeFlow {
	from{top: -2rem}
	to{top: 0}
}

@media screen and (min-width: 640px) {
	.zhihu-head-fixed {
		display: none;
	}
}
</style>
