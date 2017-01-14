<template>
<div class="zhihu-list-cover m1">
	<div class="clearfix">
		<div class="col col-3 center">
			<img :src="'http://lovestreet.leanapp.cn/zhihu/resource?url='+images" width="60" class="rounded m1" alt="" style="">
		</div>
		<div class="col col-9">
			<p class="h6">{{title}}</p>
		</div>
	</div>
	<p class="h6 m1"></p>
</div>
</template>

<script>
export default {
	props: ['title', 'images'],
	name: 'ZHihuListCover',
	components: {

	}
}
</script>

<style>
.zhihu-list-cover {
	/*box-shadow: 0px 5px 20px #efefef;*/
	border-bottom: 1px solid #efefef;
}
</style>
