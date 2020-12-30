<template>
    <div class="search-view">
        
       <van-search
            v-model="searchKey"            
            show-action
            label="地址"
            background="#f44336"
            placeholder="請輸入關鍵詞"
            @search="onSearch"
            >
            <template #action>
                <div @click="onSearch">搜索</div>
            </template>
        </van-search>

        <div class="history-view">
            <div class="history-title">
                <h4>最近搜索</h4>
                <span @click="onClear">清空紀錄</span>
            </div>
            <van-tag round type="primary" 
            v-for="(item,index) in historyList"
            @click="onHistoryItem(item)"
            :key='index'>{{ item }}</van-tag>            
        </div>

        <!-- 搜索詳情 -->
        <SearchDetailView v-if="searchDetailShow" :searchDataList="searchDataList" @onBack='onDetailHide'></SearchDetailView>
        
    </div>
</template>

<script>
import { ref , reactive ,onBeforeUpdate, computed } from 'vue';
import { Search , Tag ,Toast } from 'vant';
import axios from 'axios'
import SearchDetailView from '../SearchDetailView/SearchDetailView.vue';


export default {
    name:'searchView',
    components:{
        [Search.name]: Search,
        [Tag.name]: Tag,
        SearchDetailView,
        [Toast.name]: Toast
    },
    setup( _ ,{ emit }  ){
        const navViewShow = false;
        const searchKey = ref([]);
        // const historyList = computed(() => {
        //     return `[明月,海昌,隱形眼鏡]`
        // })
        const historyList = ref([
            '明月','海昌','隱形眼鏡'
        ]);
        const searchDetailShow = ref(false);
        let searchDataList = ref([]);

        
        /* 方法 */
        const onSearch = () =>{
            // console.log(searchKey.value);
            if(searchKey.value){
                searchDetailShow.value = true
                searchDetail()
                historyList.value.push(searchKey.value)
            }
            
        }

        const onClear = () =>{
            historyList.value = []
        }
        const onHistoryItem = (item) =>{
            // console.log(item)
            searchKey.value = item
            searchDetail()
        }

        const onDetailHide = () =>{
            searchDetailShow.value = false
        }

        const closeLoading = () =>{
            // 搜索詳情內容  
            searchDetailShow.value = true
        }
        
        const searchDetail = () =>{
            // 加載提示 加載數據
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
                overlay:true,
                duration: 0,
                onClose : closeLoading()
            });

            
            // 傳遞搜索關鍵字

            // 獲取數據
            // console.log('搜索關鍵字' + searchKey.value)
            axios.get(`${process.env.VUE_APP_SERVER_URL}/main/json/search-detail.json`)
            .then(response => {
                searchDataList.value = response.data.list

                console.log(searchDataList.value)
                // console.log(searchDataList._rawValue)
                // 關閉加載提示
                Toast.clear()
            })
        }

        // nextTick(() =>{
        //     onClear()
        // })

        // onBeforeUpdate(() => {
        //     console.log(historyList)
        //     // searchKey.value = [];
        //     // console.log(searchKey.value)
        // });


        return {
            navViewShow,
            searchKey,
            onSearch,
            onClear,
            historyList,
            onHistoryItem,
            searchDetailShow,
            onDetailHide,
            searchDataList
        };
    },
    // methods:{
    //     onSearch(val){
    //         console.log(val)
    //     }
    // },
    
    created() {
        this.$emit('onShow',this.navViewShow)
    }
}
</script>

<style lang='scss'>
    
</style>