import vueAxios from '~/plugins/axios'

export const state = () => ({
    locale: 'zh_CN',
    version: '1.0.0',
    isInit: false,
    name: '',
    nickname: '',
    blogTitle: '',
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
    bodySide: ''
})

export const mutations = {
    setLocale (state, locale) {
        state.locale = locale
    },
    setTagsItems (state, data) {
        state.tagsItems = data
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
