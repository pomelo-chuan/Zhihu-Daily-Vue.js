<template>
<div class="loading-one center">
	<img src="../../../static/zhihu-icon2.png" height="50" class="inline-block double-flash" alt="">
	<p class="h6">正在加载...</p>
</div>
</template>

<script>
export default {
	name: 'LoadingOne',
	components: {

	}
}
</script>

<style scoped>
.loading-one {
	width: 100%;
	padding-bottom: 3rem;
}

.loading-one img {}

.double-flash {
	animation: double-flash_5308 3s ease infinite;
	transform-origin: 50% 50%;
}

@keyframes double-flash_5308 {
	0% {
		opacity: 1
	}
	12.5% {
		opacity: 0
	}
	25% {
		opacity: 1
	}
	37.5% {
		opacity: 0
	}
	50% {
		opacity: 1
	}
	100% {
		opacity: 1
	}
}
</style>
