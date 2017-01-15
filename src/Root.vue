<template>
<div>
	<ZhihuHead></ZhihuHead>
	<div class="root-style">
		<router-view></router-view>
	</div>
</div>
</template>

<script>
import ZhihuHead from './components/ZhihuHead'
// 引入basscss
require('basscss/css/basscss.min.css')
export default {
	name: 'root',
	components: {
		ZhihuHead
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}

html {
	font-size: 20px;
}

@media screen and (min-width: 640px) {
	html {
		font-size: 15px;
	}
	.root-style {
		width: 640px;
		margin-left: 50%;
		transform: translateX(-50%);
	}
}
</style>
