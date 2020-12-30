<template>
    <div class="assort-view">
        <div class="side-view">
            <div class="item" v-for="(item,index) in assortList.value" 
            :key="index" 
            :ref="el => { divs[index] = el }"
            @click="onNavClick(index)">
                {{ item.text }}
            </div>
            <div class="title">
                {{ divs.value }}
            </div>
        </div>
        <div class="main-view">
            <div class="main-wrapper">
                <div class="goods-wrapper" v-for='(item,index) in goodList.value' :key="index">
                    <div class="img">
                        <img :src='item.img' alt="">
                        <!-- 垂直置中 參考縣 -->
                        <span></span>
                    </div>
                    <div class="content" >
                        <p class="name">{{ item.name }}</p>
                        <p class="old-price">原價： {{ item.oldPrice }}</p>
                        <p class="price">折扣價：  {{ item.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import func from '../../../vue-temp/vue-editor-bridge'
import axios from 'axios'
import { ref, reactive ,nextTick , onBeforeUpdate } from 'vue'
export default {
    name:'assortView',
    setup(){
        const assortList = reactive([]);       
        const divs = ref([]);
        const title = '分類';
        const navViewShow =  true;        
        const activeIndex = ref(0);
        const sideItem = [];
        const selectItem = [];
        const goodList  = reactive([]);
        
        //資料
        const fetchAllCharacters = () =>{
            axios.get(`${process.env.VUE_APP_SERVER_URL}/json/assort.json`)
            .then(response => {
                assortList.value = response.data
                // console.log('載入資料');
            })
        }

        //方法
        const onNavClick = (index) =>{
            activeIndex.value = index
            goodList.value = assortList.value[index].children

            // console.log(goodList.value);
            // 先移除
            selectItem.value.className = 'item' 

            //當前
            selectItem.value = divs.value[activeIndex.value]

            //添加
            selectItem.value.className += ' active'            
        }


        onBeforeUpdate(() => {
            divs.value = [];            
            goodList.value = assortList.value[activeIndex.value].children
            // console.log(assortList.value[0].children)
            // console.log(goodList.value)

            nextTick(() =>{
                selectItem.value = divs.value[activeIndex.value];
                selectItem.value.className = 'item active'

                // console.log(selectItem.value);
                // console.log(goodList.value)
            })
        });
        

        return {
            assortList,
            divs,
            title,
            navViewShow,            
            activeIndex,
            sideItem,
            selectItem,
            fetchAllCharacters,
            goodList,
            onNavClick
        }
    }, 
    updated() {
    // 讓我們可以知道組件有被更新
        console.log('view updated')
    },
    /*
    beforeUpdate(){
        this.$nextTick(() => {            
            // console.log(this.divs[this.activeIndex]);
            this.selectItem = this.divs[this.activeIndex];
            this.selectItem.className = 'item active'

            // this.goodList =  this.assortList.value[1].children

            console.log(this.goodList)
            // console.log(this.assortList.value[1].children)
            
        })
    },
    */
    created() {
        this.$emit('onTitle',this.title)
        this.$emit('onShow',this.navViewShow)


        this.fetchAllCharacters();
        console.log('執行載入資料');
        
   
    }
}
</script>

<style lang='scss'>

</style>