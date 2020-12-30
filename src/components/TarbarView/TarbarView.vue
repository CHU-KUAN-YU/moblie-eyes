<template>
    <div class="tabbar-view">
        <router-link to='/'>首頁</router-link>
        <router-link to='/assor'>分類</router-link>
        <router-link to='/search'>搜索</router-link>
        <router-link to='/cart'>購物車</router-link>
        <router-link to='/mine'>我的</router-link>        
    </div>
</template>

<script>
export default {
    name:'tabbarView',
}
</script>

<style lang='scss'>
.tabbar-view{
    height: 2.8125rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top:.0625rem solid gray;
    // line-height: 50px;
    a{
        display: inline-block;
        width: 20%;
        text-align: center;
        line-height: 2.8125rem;;
    }
}
</style>