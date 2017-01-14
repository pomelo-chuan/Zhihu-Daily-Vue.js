<template>
<transition name="homeTransition">
	<div>
		<LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
		<div class="ml2 mt1 mr2">
			<div v-for="list in DONE_NEWS_LIST_ROOT">
				<p class="news-lastet-time m2 bold">{{list.date | formatDate}}</p>
				<div v-for="item in list.stories">
					<router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
						<ZHihuListCover :title="item.title" :images="item.images[0]"></ZHihuListCover>
					</router-link>
				</div>
			</div>
			<button v-show="!DONE_LOADING_ONE && !DONE_LOADING_TWO" @click="LoadMoreNews()" class="load-more-button pl2 pr2 pt1 pb1 mb2 mt1">更多</button>
			<LoadingOne v-show="DONE_LOADING_ONE"></LoadingOne>
		</div>
	</div>
</transition>
</template>

<script>
import {
	mapGetters
} from 'vuex'
import ZHihuListCover from '../components/List/ZHihuListCover'
import LoadingOne from '../components/common/LoadingOne'
import LoadingTwo from '../components/common/LoadingTwo'
import BackToTop from '../components/common/BackToTop'
import TopStory from '../components/common/TopStory'

export default {
	name: 'App',
	components: {
		ZHihuListCover,
		LoadingOne,
		LoadingTwo,
		BackToTop,
		TopStory
	},
	computed: {
		...mapGetters(['DONE_NEWS_LATEST', 'DONE_LOADING_ONE', 'DONE_LOADING_TWO', 'DONE_NEWS_LIST_ROOT'])
	},

	created: function() {
		if (!!this.DONE_NEWS_LATEST.stories && this.DONE_NEWS_LATEST.stories.length > 0) {} else {
			this.$store.dispatch('FECTH_NEWS_LATEST')
		}
	},
	methods: {
		LoadMoreNews: function() {
			this.$store.dispatch('FECTH_NEWS_LATEST_MORE')
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
}

@keyframes newsLastetTime {
	from {
		transform: translateX(100px)
	}
	to {
		transform: translateX(0px)
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
	/*box-shadow:0px 0px 20px #dbdada;*/
	/* ===size and position=== */
	width: 100%;
}


/* ===the style of back to top=== */

.back-to--button {
	/* ===style format=== */
	border-top-style: none;
	border-right-style: none;
	border-bottom-style: none;
	border-left-style: none;
	outline: none;
	/* ===color=== */
	color: white;
	font-size: 0.8rem;
	opacity: 0.7;
	/* ===size and position=== */
	position: fixed;
	right: 1rem;
	bottom: 0rem;
	display: none;
}


/* ==过度动画== */

.homeTransition-enter-active,
.homeTransition-leave-active {
	transition: opacity .5s
}

.homeTransition-enter,
.homeTransition-leave-active {
	/*transform: translateX(-100vw);*/
	opacity: 0;
}
</style>
