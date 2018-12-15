import Vue from 'vue'
import ElementUI from 'element-ui'
import vueAxios from './plugins/axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import App from './App.vue'

Vue.use(ElementUI, vueAxios());

export const state = () => ({
    locale: 'zh_CN',
    version: '1.0.0',
    isInit: false,
    name: '',
    nickname: '',
    articleTitle: '',
    avatarURL: '',
    blogURL: '/',
    role: 0, // 0-no login, 1-admin, 2-blog admin, 3-blog user, 4-visitor
    articles: [{
        title: '',
        id: ''
    }],
    snackMsg: '',
    snackBar: false,
    snackModify: 'error',
    menu: [],
    tagsItems: [],
    bodySide: '',
    articleId: '1488603534762'
})

export const mutations = {
    setLocale (state, locale) {
        state.locale = locale
    },
    setStatus (state, data) {
        state.locale = data.locale
        state.version = data.version
        state.isInit = data.inited
        state.role = data.role
        state.name = data.name
        state.nickname = data.nickname
        state.blogTitle = data.blogTitle
        state.blogURL = data.blogURL
        state.blogs = data.blogs
        state.avatarURL = data.avatarURL
    },
    setArticleId (state,data){
      state.articleId = data.articleId
    },
    setTagsItems (state, data) {
        state.tagsItems = data
    },
    setSnackBar (state, data) {
        state.snackBar = data.snackBar
        state.snackMsg = data.snackMsg
        if (data.snackModify) {
            state.snackModify = data.snackModify
        } else {
            state.snackModify = 'error'
        }
    }
}

export const actions = {
    async getTags ({commit, state}) {
        if (state.tagsItems.length > 0) {
            return
        }
        const tagResponseData = await vueAxios().get('/api/tags/')
        if (tagResponseData) {
            let tagList = []
            tagResponseData.map((v) => {
                tagList.push(v.title)
            })
            commit('setTagsItems', tagList)
        }
    }
}

new Vue({
  el: '#app',
  render: h => h(App)
});
