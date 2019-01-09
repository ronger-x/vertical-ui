<template>
    <el-row  class="vertical-container">
        <el-col :span="20">
            <el-card>
                <div  class="card-body d-flex flex-column" style="margin: 1.5rem 7rem;">
                    <h1 v-html="article.articleTitle"></h1>
                    <el-row class="pt-5">
                        <el-col :span="1" class="mr-3">
                            <div class="avatar avatar-md"
                                 :style="{backgroundImage:'url(' + article.articleAuthor.userAvatarURL + ')'}">
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div>
                                <router-link :to="{name: 'user', params: {userName: article.articleAuthorName}}" class="text-default" >{{ article.articleAuthor.userName }}</router-link>
                                <small class="d-block text-muted">{{ article.timeAgo }}</small>
                            </div>
                        </el-col>
                    </el-row>
                    <div class="pt-7 pipe-content__reset" v-html="article.articleContent"></div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Comments",
        props: ['oId'],
        data (){
            return {
                article: {
                    articleTitle: '',
                    articleContent: '',
                    timeAgo:'',
                    articleAuthor: {
                        userAvatarURL: '',
                        userName: ''
                    }
                },
                pagination: {
                    "paginationPageCount": 0,
                    "paginationPageNums": []
                }
            }
        },
        async mounted () {
            const responseTopData = await this.axios.get('article/'+this.oId)
            if (responseTopData) {
                this.$set(this, 'article', responseTopData.article)
                this.$set(this, 'pagination', responseTopData.pagination)
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../theme/scss/basic';
    @import '../../../theme/scss/github';
</style>
