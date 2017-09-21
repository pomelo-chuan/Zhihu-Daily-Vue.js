# 知乎日报 by Vue.js

> 基于Vue.js的单页网页应用（Single Page Web App）

## 声明：
本项目中所用的api来自知乎( [知乎Zhihu](http://www.zhihu.com/) )， 项目中所有内容的一切权利属于知乎，本项目所有内容及代码仅供私下学习参考，不得作为其他用途。

## 设计：
1.设计上没有按照知乎日报客户端的交互及UI设计来做，本渣亲自捏了一个，颜色以黑白灰为主，本来想加入知乎的蓝色，但是本渣设计功力实在太差，故舍弃掉了蓝色，只采用黑白灰三色。

2.日报条目采用无边界设计，只添加淡灰色的分割线来区分。

3.整个网页是一个单页应用(Single Page Web App)，所有的数据使用vuex来进行管理，在store里统一管理。

## 预览：
![日报列表](https://github.com/pomelo-chuan/Zhihu-Daily-Vue.js/blob/master/static/demo-pic.jpg)


## 技术：
1. 该项目使用[vue-cli](https://github.com/vuejs/vue-cli)构建、打包，配合vue全家桶（[vue](https://github.com/vuejs/vue)、[vuex](https://github.com/vuejs/vuex)、[vue-router](https://github.com/vuejs/vue-router)）进行编码、开发

2. 基础样式使用basscss，basscss对层叠样式表的设计方式简练、高效、可复用性强

3. 网络请求使用[axios](https://github.com/mzabriskie/axios)

4. 后台使用Node.js

## [vuex架构](https://github.com/pomelo-chuan/Zhihu-Daily-Vue.js/blob/master/src/vuex/modules/zhihudata.js)：
1. 将getters、mutations、actions变量名设定一个命名空间，否则store写的大了，命名肯定会乱，示例：[示例代码](https://github.com/pomelo-chuan/Zhihu-Daily-Vue.js/blob/master/src/vuex/zhihu-types.js)

2. store分模块
其实不用分模块，但还是分一下吧，为后续开发着想。

3. 使用getters将状态（state）、数据（data）发往页面模版（template）上，发数据有两三种方式，根据自己习惯来吧，我是这样做的：
```
//  getters
[types.DONE_NEWS_LIST_ROOT]: state => {
        return state.NewsListRoot
    }
```
```
// javascript
computed: {
		...mapGetters(['DONE_NEWS_LATEST', 'DONE_LOADING_ONE', 'DONE_LOADING_TWO', 'DONE_NEWS_LIST_ROOT'])
	}
```
```
// template
<div v-for="list in DONE_NEWS_LIST_ROOT">
		<!-- ===使用v-for来循环渲染数据=== -->
</div>
```

## mutations与actions：
1. mutations是用来处理同步的事情的，比如给state中的变量赋值；

1. actions是用来处理异步的事情，比如网络请求；

1. 但是actions也是可以做同步的事情的，但最好按照vuex的建议来做：在mutations中处理同步操作


## Technology:

1. The project structure by vue-cli and company with the [vue](https://github.com/vuejs/vue)、[vuex](https://github.com/vuejs/vuex)、[vue-router](https://github.com/vuejs/vue-router)

2. The basis stylesheet use the [basscss](https://github.com/basscss/basscss)

3. HTTP use the [axios](https://github.com/mzabriskie/axios)

4. Backend use the Node.js


## 运行方法/install dependencies

``` bash
npm install
npm run dev

```

## 参考
[知乎日报api分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90) Edit By [izzyleung](https://github.com/izzyleung)
