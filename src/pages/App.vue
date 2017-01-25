<template>
<transition name="homeTransition">
	<div>
		<!-- ===the navigation bar fixed in the top, when the page rolling after to 400px=== -->
		<div :class="ZhihuHeadFixClass">
			<ZhihuHeadFix></ZhihuHeadFix>
		</div>
		<!-- ===show the loading page when load the news data=== -->
		<LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
		<!-- ===the news list=== -->
		<TopNews :TopNewsData="DONE_NEWS_LATEST.top_stories"></TopNews>
		<div class="ml2 mt1 mr2">
			<div v-for="list in DONE_NEWS_LIST_ROOT">
				<p class="news-lastet-time bold ml2">{{list.date | formatDate}}</p>
				<div v-for="item in list.stories">
					<router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
						<ZHihuListCover :title="item.title" :images="item.images[0]"></ZHihuListCover>
					</router-link>
				</div>
			</div>
			<!-- ===click the button to load more news== -->
			<button v-show="!DONE_LOADING_ONE && !DONE_LOADING_TWO" @click="LoadMoreNews()" class="load-more-button pl2 pr2 pt1 pb1 mb2 mt1">更多</button>
			<!-- ===the loading when news list loading=== -->
			<LoadingOne v-show="DONE_LOADING_ONE"></LoadingOne>
			<!-- ===back to top button=== -->
			<button @click="backToTop" v-show="BackToTopIsShow" class="back-to-top p1">
				<img src="../../static/top.png" alt="" style="width: 1rem; color: none; background-color: white;">
			</button>
		</div>
	</div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'
import ZHihuListCover from '../components/List/ZHihuListCover'
import LoadingOne from '../components/common/LoadingOne'
import LoadingTwo from '../components/common/LoadingTwo'
import BackToTop from '../components/common/BackToTop'
import TopStory from '../components/common/TopStory'
import ZhihuHeadFix from '../components/ZhihuHeadFix'
import TopNews from '../components/List/TopNews'

export default {
	data: function() {
		return {
			BackToTopIsShow: false,
			ZhihuHeadFixClass: 'ZhihuHeadFixClass-none'
		}
	},
	name: 'App',
	components: {
		ZHihuListCover,
		LoadingOne,
		LoadingTwo,
		BackToTop,
		TopStory,
		ZhihuHeadFix,
		TopNews
	},
	computed: {
		...mapGetters(['DONE_NEWS_LATEST', 'DONE_LOADING_ONE', 'DONE_LOADING_TWO', 'DONE_NEWS_LIST_ROOT'])
	},
	created: function() {
		var _this = this
		// 监听页面已滑动的位置，当页面滑动了400px之后，显示“返回顶部”按钮，跟固定在顶部的导航栏
		function backToTop(){
			setInterval(function(){
				if(window.scrollY>400) {
					_this.BackToTopIsShow = true
					_this.ZhihuHeadFixClass= 'ZhihuHeadFixClass-on'
				} else {
					_this.BackToTopIsShow = false
					_this.ZhihuHeadFixClass= 'ZhihuHeadFixClass-none'
				}
			},500)
		}
		backToTop()
		if (!!this.DONE_NEWS_LATEST.stories && this.DONE_NEWS_LATEST.stories.length > 0) {} else {
			this.$store.dispatch('FECTH_NEWS_LATEST')
		}
	},
	methods: {
		LoadMoreNews: function() {
			this.$store.dispatch('FECTH_NEWS_LATEST_MORE')
		},
		backToTop: function() {
			window.scrollTo(0,0)
			this.ZhihuHeadFixClass= 'ZhihuHeadFixClass-none'
		}
	}
}
</script>

<style>
/* ===the style of the news list style=== */

.news-lastet-time {
	font-size: 0.8rem;
	border-left: 5px solid #efefef;
	color: grey;
	padding: 0.1rem;
	text-indent: 0.5rem;
	animation: newsLastetTime 0.5s ease 1;
	transform: translateX(0px);
	opacity: 1;
}

@keyframes newsLastetTime {
	from {
		transform: translateX(100px);
		opacity: 0;
	}
	to {
		transform: translateX(0px);
		opacity: 1;
	}
}


/* ===the style of load more button=== */

.load-more-button {
	/* ===style format=== */
	border-top-style: none;
	border-right-style: none;
	border-bottom-style: none;
	border-left-style: none;
	outline: none;
	/* ===color and font=== */
	background-color: white;
	color: black;
	font-size: 0.8rem;
	border-bottom: 1px solid #efefef;
	/* ===size and position=== */
	width: 100%;
}

/* ===back to top=== */
.back-to-top{
	/* ===style format=== */
	border-top-style: none;
	border-right-style: none;
	border-bottom-style: none;
	border-left-style: none;
	outline: none;
	/* ===color=== */
	background-color: white;
	/* ===size and position=== */
	font-size: 0.8rem;
	position: fixed;
	right: 1rem;
	bottom: 1rem;
}

/* ===the transition style of template: ZhihuHeadFix=== */

.ZhihuHeadFixClass-none {
	width: 100%;
	position: fixed;
	top: -2rem;
	transition: all 0.5s ease;
}
.ZhihuHeadFixClass-on {
	position: fixed;
	top: 0;
	width: 100%;
	transition: all 0.5s ease;
}

/* ==过度动画== */

.homeTransition-enter-active,
.homeTransition-leave-active {
	transition: opacity .5s
}

.homeTransition-enter,
.homeTransition-leave-active {
	opacity: 0;
}
</style>
