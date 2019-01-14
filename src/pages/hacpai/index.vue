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
                <el-col class="text-center">
                    <el-pagination v-show="pagination" v-model="pagination"
                            :page-size="20"
                            :pager-count="8"
                            layout="prev, pager, next"
                            :current-page="pagination.currentPage"
                            :page-count="pagination.paginationPageCount"
                            @current-change="currentChange">
                    </el-pagination>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="8">
            <el-row style="padding-left: 5rem;">
                <el-col>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>粉丝榜</span>
                        </div>
                        <div v-for="(follower,index) in followers" :key="follower.oId" class="text item">
                            <el-row v-if="index < 6" class="follower">
                                <el-col :span="3">
                                    <div class="avatar avatar-md"
                                         :style="{backgroundImage:'url(' + follower.userAvatarURL + ')'}">
                                    </div>
                                </el-col>
                                <el-col :span="18">
                                    <div>
                                        <router-link :to="{name: 'user', params: {userName: follower.userName}}" class="text-default" >{{ follower.userName }}</router-link>
                                        <small v-if="follower.userIntro" class="d-block text-muted article-summary-sd">{{ follower.userIntro }}</small>
                                        <small v-if="!follower.userIntro" class="d-block text-muted article-summary-sd">{{ follower.userNickname }}</small>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </el-col>
                <el-col>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>新手榜</span>
                        </div>
                        <div v-for="(newbie,index) in newbies" :key="newbie.oId" class="text item">
                            <el-row v-if="index < 6" class="follower">
                                <el-col :span="3">
                                    <div class="avatar avatar-md"
                                         :style="{backgroundImage:'url(' + newbie.userAvatarURL + ')'}">
                                    </div>
                                </el-col>
                                <el-col :span="18">
                                    <div>
                                        <router-link :to="{name: 'user', params: {userName: newbie.userName}}" class="text-default" >{{ newbie.userName }}</router-link>
                                        <small v-if="newbie.userIntro" class="d-block text-muted article-summary-sd">{{ newbie.userIntro }}</small>
                                        <small v-if="!newbie.userIntro" class="d-block text-muted article-summary-sd">{{ newbie.userNickname }}</small>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
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
                },
                followers: [],
                newbies: []
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
            },
            async getFollowers(){
                const responseTopData = await this.axios.get('tops/users/followers');
                if(responseTopData){
                    this.$set(this,'followers',responseTopData.users)
                }
            },
            async getNewbies(){
                const responseTopData = await this.axios.get('tops/users/newbies');
                if(responseTopData){
                    this.$set(this,'newbies',responseTopData.users)
                }
            }
        },
        mounted () {
            const p = this.pagination.currentPage;
            this.getData(p);
            this.getFollowers();
            this.getNewbies();
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 426px;
    }
    .follower .el-col {
        margin-bottom: 0;
    }
</style>
