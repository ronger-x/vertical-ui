<template>
    <el-row  class="vertical-container">
        <el-col :span="16">
            <el-row>
                <el-col v-for="article in articles" :key="article.oId">
                    <el-card>
                        <div class="card-body d-flex flex-column">
                            <h4><router-link :to="{name: 'article', params: {oId: article.oId}}"  v-html="article.articleTitle"></router-link></h4>
                            <div class="text-muted article-summary-md">{{ article.articlePreviewContent }}</div>
                            <el-row class="pt-5">
                                <el-col :span="1" class="mr-3">
                                    <div class="avatar avatar-md"
                                         :style="{backgroundImage:'url(' + article.articleAuthor.userAvatarURL + ')'}">
                                    </div>
                                </el-col>
                                <el-col :span="4">
                                    <div>
                                        <router-link :to="{name: 'user', params: {userName: article.articleAuthorName}}" class="text-default">{{ article.articleAuthor.userName }}</router-link>
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
                <el-col>
                    <el-pagination v-model="pagination"
                            :page-size="20"
                            :pager-count="8"
                            layout="prev, pager, next"
                            :current-page="pagination.currentPage"
                            :page-count="pagination.paginationPageCount"
                            @current-change="currentChange"
                    >
                    </el-pagination>
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
                    "paginationPageNums": [],
                    "currentPage": 1
                }
            }
        },
        methods: {
            currentChange(val){
                this.getData(val);
            },
            async getData(p){
                const responseTopData = await this.axios.get('articles/latest/perfect?p='+p);
                if (responseTopData) {
                    responseTopData.pagination.currentPage = p;
                    this.$set(this, 'articles', responseTopData.articles);
                    this.$set(this, 'pagination', responseTopData.pagination);
                }
            }
        },
        mounted () {
            const p = this.pagination.currentPage;
            this.getData(p);
        }
    }
</script>

<style scoped>

</style>
