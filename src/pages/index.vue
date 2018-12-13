<template>
    <el-row>
        <el-col :span="16">
            <el-row>
                <el-col v-for="article in articles" :key="article.id">
                    <el-card>
                        <div class="card-body d-flex flex-column">
                            <h4><a v-bind:href="article.articlePermalink">{{ article.articleTitle }}</a></h4>
                            <div class="text-muted article-summary-md">{{ article.articleSummary }}
                            </div>
                            <el-row class="pt-5">
                                <el-col :span="1" class="mr-3">
                                    <div class="avatar avatar-md"
                                         :style="{backgroundImage:'url(' + article.thinker.userAvatarUrl + ')'}">
                                    </div>
                                </el-col>
                                <el-col :span="4">
                                    <div>
                                        <a v-bind:href="article.thinker.userUrl" class="text-default">{{ article.thinker.nickName }}</a>
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
        name: "VerticalHome",
        data() {
            return {
                articles: [],
                pagination: {
                    "paginationPage": 1,
                    "paginationSize": 20
                }
            }
        },
        async mounted () {
            const responseTopData = await this.axios.get('/api/getArticles')
            if (responseTopData) {
                this.$set(this, 'articles', responseTopData.data)
                this.$set(this, 'pagination', responseTopData.pagination)
            }
        }
    }
</script>

<style scoped>

</style>
