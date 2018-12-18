<template>
    <el-row>
        <el-col :span="16">
            <el-row>
                <el-col v-for="article in articles" :key="article.oId">
                    <el-card>
                        <div class="card-body d-flex flex-column">
                            <h4><router-link :to="{name: 'article', params: {oId: article.oId}}" >{{ article.articleTitle }}</router-link></h4>
                            <div class="text-muted article-summary-md">{{ article.articlePreviewContent }}</div>
                            <el-row class="pt-5">
                                <el-col :span="1" class="mr-3">
                                    <div class="avatar avatar-md"
                                         :style="{backgroundImage:'url(' + article.articleAuthor.userAvatarURL + ')'}">
                                    </div>
                                </el-col>
                                <el-col :span="4">
                                    <div>
                                        <a v-bind:href="article.articleAuthor.userUrl" class="text-default">{{ article.articleAuthor.userName }}</a>
                                        <small class="d-block text-muted">{{ article.timeAgo }}</small>
                                    </div>
                                    <div class="ml-auto text-muted">
                                        <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i
                                                class="fe fe-heart mr-1"></i></a>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="8">

        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "HacPai",
        data() {
            return {
                articles: [],
                pagination: {
                    "paginationPageCount": 0,
                    "paginationPageNums": []
                }
            }
        },
        methods: {
            goComments(id){
                const data = {
                    articleId: id,
                    currentPage: 'Comments'
                }
                this.$emit("changeCurrentPage",data)
            }
        },
        async mounted () {
            const responseTopData = await this.axios.get('/hacpai/articles/latest/perfect')
            if (responseTopData) {
                this.$set(this, 'articles', responseTopData.articles)
                this.$set(this, 'pagination', responseTopData.pagination)
            }
        }
    }
</script>

<style scoped>

</style>
