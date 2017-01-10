import * as types from '../zhihu-types.js'
import axios from 'axios'
var moment = require('moment');

const state = {
    NewsLatest: {},
    time: moment(),
    LoadingOne: false
}

const getters = {
    [types.DONE_NEWS_LATEST]: state => {
        return state.NewsLatest
    },
    [types.DONE_LOADING_ONE]: state => {
        return state.LoadingOne
    }
}

const mutations = {
    [types.TOGGLE_NEWS_LATEST] (state, all) {
        state.NewsLatest = all
    },
    [types.TOGGLE_NEWS_LATEST_MORE] (state, all) {
        all.stories.map(function(item) {
            return state.NewsLatest.stories.push(item)
        })
        state.time.subtract(1, "days")
        state.LoadingOne = false
    }
}

const actions = {
    [types.FECTH_NEWS_LATEST] ({commit}) {
        axios.get('http://lovestreet.leanapp.cn/zhihu/news/latest')
            .then(res => {
                commit(types.TOGGLE_NEWS_LATEST, res.data, console.log('news lastets:', res.data))
            })
    },
    [types.FECTH_NEWS_LATEST_MORE] ({commit}) {
        state.LoadingOne = true
        var now = state.time.format("YYYYMMDD")
        console.log("日期：", now)
        axios.get('http://lovestreet.leanapp.cn/zhihu/before/' + now)
            .then(res => {
                commit(types.TOGGLE_NEWS_LATEST_MORE, res.data, console.log(res.data))
            })
    } 
}

export default {
    state,
    getters,
    mutations,
    actions
}