<template>
  <div id="app">
    <el-container class="wrapper">
        <el-header>
            <div class="vertical-container">
                <a class="navbar-brand" href="/">
                    <img src="./assets/logo.png" alt="Vertical" class="navbar-brand-img">
                    <span>Vertical</span>
                </a>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
    data () {
        return {
            currentPage: 'HacPai'
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style>

    body {
        overflow-wrap: break-word;
        -webkit-font-smoothing: antialiased;
        background: url('assets/bg_dot.png') center top 80px no-repeat fixed rgb(246, 247, 248);
    }

    a, li {
        text-decoration:none !important;
    }
    h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, .h1 a, .h2 a, .h3 a, .h4 a, .h5 a, .h6 a {
        color: inherit;
    }
    h4, .h4 {
        font-size: 1.125rem;
    }

    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
        margin-bottom: 0.66em;
        font-family: inherit;
        font-weight: 600;
        line-height: 1.1;
        color: inherit;
    }
    body {
        margin: 0;
        display: block;
        background-color: #f5f7fb
    }
    .navbar-brand {
        color: inherit;
        margin-right: 1rem;
        font-size: 1.25rem;
        white-space: nowrap;
        font-weight: 600;
        padding: 0;
        transition: .3s opacity;
        line-height: 2rem;
    }
    .navbar-brand-img {
        height: 2rem;
        line-height: 2rem;
        vertical-align: bottom;
        margin-right: .5rem;
        width: auto;
    }
    .el-header {
        padding-top: 1rem;
        padding-bottom: 1rem;
        background: #fff;
        border-bottom: 1px solid rgba(0, 40, 100, 0.12);
        z-index: 80;
    }

    .el-main {
        padding: 20px 3px;
    }

    .el-row {
        margin-bottom: 20px;
    }
    .el-row:last-child {
         margin-bottom: 0;
     }
    .header-lab {
        padding: 30px 0;
    }
    .menu, .wrapper, .el-menu {
        height: 100%;
    }
    .vertical-container {
        max-width: 1200px;
    }
    .vertical-container {
        width: 100%;
        padding-right: 0.75rem;
        padding-left: 0.75rem;
        margin-right: auto;
        margin-left: auto;
    }
    .pt-5, .py-5 {
        padding-top: 1.5rem !important;
    }
    .text-default {
        color: #495057 !important;
    }
    .text-muted {
        color: #9aa0ac !important;
    }
    .d-block {
        display: block !important;
    }
    small, .small {
        font-size: 87.5%;
        font-weight: 400;
    }
    .avatar-md {
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 1rem;
    }
    .avatar {
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        border-radius: 50%;
        display: inline-block;
        background: #ced4da no-repeat center/cover;
        position: relative;
        text-align: center;
        color: #868e96;
        font-weight: 600;
        vertical-align: bottom;
        font-size: .875rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .mr-3, .mx-3 {
        margin-right: 0.75rem !important;
    }
    .el-col {
        margin-bottom: 1.5rem;
    }
    .article-summary-md {
        position:relative;
        line-height:1.4em;
        /* 3 times the line-height to show 3 lines */
        height:4.2em;
        overflow:hidden;
    }

    .article-summary-md::after {
        content:"...";
        font-weight:bold;
        position:absolute;
        bottom:0;
        right:0;
        padding:0 20px 1px 45px;
        background:url(http://newimg88.b0.upaiyun.com/newimg88/2014/09/ellipsis_bg.png) repeat-y;
    }

    .article-summary-sd {
        position:relative;
        line-height:1.4em;
        /* 1 times the line-height to show 1 lines */
        height:1.4em;
        overflow:hidden;
    }

    .article-summary-sd::after {
        content:"...";
        font-weight:bold;
        position:absolute;
        bottom:0;
        right:0;
        padding:0 20px 1px 45px;
        background:url(http://newimg88.b0.upaiyun.com/newimg88/2014/09/ellipsis_bg.png) repeat-y;
    }

    .text-center {
        text-align: center !important;
    }
</style>
