<template>
<div class="theme-head">
	<img :src="image?'http://lovestreet.leanapp.cn/zhihu/resource?url=' + image:'' " style="width: 100%" alt="">
	<div class="theme-head-name ml2">
		<p class="pl1 pt1 h4 bold">{{name}}:</p>
		<p>{{description}}</p>
	</div>
	<div class="theme-head-editor ml3 mr2 p1">
		<h4 class="inline">主编：</h4>
		<p class="inline h6" v-for="item in editors">{{item.name}} &nbsp;</p>
	</div>
</div>
</template>
<script>
export default {
	name: 'ThemeHead',
	props: ["image", "name", "description", "editors"],
	components: {

	}
}
</script>

<style>
.theme-head {
	height: 100%;
	width: 100%;
}

.theme-head-name {
	margin-top: 0.5rem;
}

.theme-head-name p {
	text-indent: 0.5em;
}

.theme-head-name p:nth-child(2) {
	font-size: 0.5rem;
	border-left: 5px solid #efefef;
	margin: 0.5rem 2rem;
	padding: 0.2rem;
}

.theme-head-name p {
	margin: 0;
}

.theme-head-editor {
	color: grey;
}
</style>
