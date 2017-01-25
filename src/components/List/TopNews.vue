<template>
  <div v-if="!!TopNewsData" class="top-news m2">
   <p class="top-news-title ml2 bold">今日要闻：</p>
   <div v-for="item in TopNewsData">
      <router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
          <ZHihuListCover :title="item.title" :images="item.image"></ZHihuListCover>
      </router-link>
    </div>
  </div>
</template>

<script>
import ZHihuListCover from './ZHihuListCover'
export default {
  props: ["TopNewsData"],
  data: function () {
    return {
    }
  },
  name: 'TopNews',
  components: {
    ZHihuListCover
  },
  methods: {
    
  }
}
</script>

<style>
.top-news {

}

.top-news-title {
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
</style>
