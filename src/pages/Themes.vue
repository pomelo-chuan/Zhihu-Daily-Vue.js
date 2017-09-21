<template>
<transition name="ThemeTransition">
	<div>
		<LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
		<div class="themes m2">
			<div v-for="item in DONE_THEMES.others">
				<router-link :to="{name: 'themes-list', params: {id: item.id}}">
					<div class="clearfix themes-list mt1">
						<div class="col col-2 center">
							<img class="mb1" :src="'http://lovestreet.leanapp.cn/zhihu/resource?url=' + item.thumbnail" width="40" style="border-radius: 40px" alt="">
						</div>
						<div class="col col-10">
							<p class="h6" style="color: black">{{item.name}}</p>
						</div>
						<div class="col col-10" style="margin-top: 6px">
							<p class="" style="color:#898888; font-size: 12px;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{item.description}}</p>
						</div>
					</div>
				</router-link>
			</div>
    </div>
  </div>
</transition>
</template>

<script>
import {
	mapGetters
} from 'vuex'
import LoadingTwo from '../components/common/LoadingTwo'
export default {
	name: 'Themes',
	components: {
		LoadingTwo
	},
	computed: {
		...mapGetters(['DONE_THEMES', 'DONE_LOADING_TWO'])
	},
	created: function() {
		window.scrollTo(0,0)
		this.$store.dispatch('FETCH_THEMES')
	}
}
</script>

<style scoped>
p {
	margin: 0 0;
}

.themes-list {
	border-bottom: 1px solid #f1efef;
}


/* ==过度动画== */

.ThemeTransition-enter-active,
.ThemeTransition-leave-active {
	transition: opacity .5s
}

.ThemeTransition-enter,
.ThemeTransition-leave-active {
	/*transform: translateX(-100vw);*/
	opacity: 0;
}
</style>
