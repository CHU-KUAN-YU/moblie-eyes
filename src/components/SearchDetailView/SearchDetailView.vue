<template>
    <div class="search-detail-view">
        <!-- 頭部 導航欄 -->    
        <van-nav-bar
            title="搜索詳情"
            fixed
            left-arrow
            @click-left="onBack"
        />

        
        <SearchItemBlockView v-for="(goods,index) in searchDataList" :key="index" :goods="goods" ></SearchItemBlockView>

    </div>
</template>

<script>
import { ref ,computed ,isReactive   } from 'vue'
import { NavBar } from 'vant';
import SearchItemBlockView from '../SearchItemBlockView/SearchItemBlockView.vue';
// import SearchDetailView from '../SearchDetailView/SearchDetailView.vue';


export default {
    name:'searchDetailView',
    components:{
        [NavBar.name]: NavBar,
        SearchItemBlockView
    },
    // inheritAttrs: false,
    // props:{
    //     searchDataList: String
    // },
    props:['searchDataList'],  
    setup(_, { emit } ){ 
        const onBack = () =>{
            emit("onBack")
        }
        
        return{  
            onBack,
        }
    },
    
}
</script>

<style lang='scss'>
    .search-detail-view{
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: #F2F2F2;
        z-index: 999;
        padding-top: 2.8125rem;
        overflow-y:auto;
    }
</style>