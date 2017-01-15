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
	position: fixed;
	width: 100%;
	top: 0;
	height: 2rem;
	background-color: white;
    opacity: 1;
    animation: zhihuheadfixfadein 1s ease 1;
}

.zhihu-head-fixed a{
	color: #333333;
}

@keyframes zhihuheadfixfadein {
    from{opacity: 0}
    to{opacity: 1}
}
</style>
