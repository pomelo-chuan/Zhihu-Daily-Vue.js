<template>
<div>
	<LoadingTwo v-if="DONE_LOADING_TWO"></LoadingTwo>
	<ThemeHead :image="DONE_THEMES_LIST.image" :name="DONE_THEMES_LIST.name" :description="DONE_THEMES_LIST.description" :editors="DONE_THEMES_LIST.editors"></ThemeHead>
	<div class="theme-list ml2 mr2 mb2">
		<div v-for="item in DONE_THEMES_LIST.stories">
			<router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
				<ThemeLink v-if="item.type == 0" :title="item.title"></ThemeLink>
			</router-link>
			<router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
				<ZHihuListCover v-if="item.type == 1" :title="item.title" :images="item.images ? item.images[0]:'http://daily.zhihu.com/img/new_home_v3/mobile_top_logo.png'"></ZHihuListCover>
			</router-link>
			<router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
				<ZHihuListCover v-if="item.type == 2" :title="item.title" :images="item.images ? item.images[0]:'http://daily.zhihu.com/img/new_home_v3/mobile_top_logo.png'"></ZHihuListCover>
			</router-link>
		</div>
	</div>
</div>
</template>

<script>
import {
	mapGetters
} from 'vuex'
import ZHihuListCover from '../components/List/ZHihuListCover'
import ThemeLink from '../components/Theme/ThemeLink'
import ThemeHead from '../components/Theme/ThemeHead'
import LoadingTwo from '../components/common/LoadingTwo'

export default {
	name: 'ThemeList',
	components: {
		ZHihuListCover,
		ThemeLink,
		ThemeHead,
		LoadingTwo
	},
	computed: {
		...mapGetters(['DONE_THEMES_LIST', "DONE_LOADING_TWO"])
	},
	created: function() {
		this.$store.dispatch('FETCH_THEMES_list', this.$route.params.id)
		window.scrollTo(0, 0)
	}
}
</script>

<style>

</style>
