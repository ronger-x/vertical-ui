<template>

</template>

<script>
    export default {
        name: "Comments",
        data (){
            return {
                article: {
                    articleContent: '',
                    articleCreateTimeStr:''
                }
            }
        },
        async mounted () {
            const articleId = this.$parent.state.articleId;
            const responseTopData = await this.axios.get('/hacpai/articles/'+articleId)
            if (responseTopData) {
                this.$set(this, 'articles', responseTopData.articles)
                this.$set(this, 'pagination', responseTopData.pagination)
            }
        }
    }
</script>

<style scoped>

</style>
