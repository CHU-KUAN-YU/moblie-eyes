<template>
    <div class="goods-detail-view" v-if='goodsDetail'>
        <!-- 導航欄 -->
       <van-nav-bar title="商品詳情" left-arrow fixed @click-left="back" />
       <!-- 輪播圖 -->
        <van-swipe :autoplay="3000" class="banner">
            <van-swipe-item v-for="item in goodsDetail.banners" :key="item.index">
                <img v-lazy="item.img" />                
            </van-swipe-item>
        </van-swipe>

        <!-- 主體內容 -->
        <div class="content-view">
            <!-- 價格 -->
            <div class="price-view">
                <p class="new-price">$  {{goodsDetail.newPrice}}</p>
                <p class="old-price">原價 $ {{goodsDetail.oldPrice}}</p>
                <span class="sale-item" v-if='goodsDetail.sale'>特價</span>
            </div>

            <!-- 規格 -->
            <div class="standard-view">
                <div class="items">
                    <div v-for='item in goodsDetail.standardImages' :key="item.index">
                        <img :src="item.img" :alt="item.color">
                    </div>
                </div>
                <div class="side">
                    <select name="eyes" id="">
                        <option value="左眼">左眼</option>
                        <option value="右眼">右眼</option>
                    </select>
                    <select name="degree">
                        <option v-for="item in goodsDetail.degree" :value="item" :key='item.index'>{{item}}</option>
                    </select>                    
                </div>
                <van-stepper v-model="number" />                
            </div>

            <!-- 描述 -->
            <div class="desc-view">
                <div class="title">
                    <span>自營</span>
                    <p>{{ goodsDetail.name }}</p>
                </div>
                <p class="desc">{{ goodsDetail.desc }}</p>             
            </div>

            <!-- 說明 -->
            <div class="explanin-view">
                <span>說明</span>
                <p>{{ goodsDetail.explain }}</p>
                <van-icon name="arrow" class='icon'/>
            </div>
        </div>


        <!-- 商品評價 -->
        <div class="appraise-view">
            <div class="appraise-title">
                <div class="title">
                    商品評價{{ goodsDetail.appraise.num }}
                </div>
                <div class="rate-score">
                    好評{{ goodsDetail.appraise.rateScore }}%
                    <van-icon name="arrow" class='icon'/>
                </div>
            </div>
            <div class="appraise-content">
                <div class="box" ref='scollView'>                    
                    <UserAppraiseView ref='userAppraise' v-for='(item, index) in goodsDetail.appraise.list' :key="index" :appraise='item'></UserAppraiseView>
                </div>
            </div>
        </div>

        <!-- 產品信息 -->
        <div class="product-view">
            <h3>圖文詳情</h3>
            <h4>產品信息</h4>
            <table>
                <tbody>
                    <tr v-for="(item,index) in goodsDetail.productMessage" :key="index">
                        <td>{{ item.key }}</td>
                        <td>{{ item.value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 產品印花 -->
        <div class='product-view'>
            <h3>產品印花</h3>
            <div class="product-border" v-for="(item,index) in goodsDetail.productStamp" :key='index'>
                <h4>{{ item.stamp }}</h4>
                <p>{{ item.text }}</p>
                <img :src="item.img" alt="">
            </div>
        </div>

        <!-- 商品導購欄 -->
        <van-action-bar>
            <van-action-bar-icon icon="like-o" text="收藏" @click="onCollect" />
            <van-action-bar-icon icon="cart" text="購物車" @click="onCart" />            
            <van-action-bar-button type="warning" color="#000000" text="加入購物車" @click="onAddCart"/>
            <van-action-bar-button type="danger" color="#f44336" text="立即購買" @click="onBuy" />
        </van-action-bar>
      
    </div>
</template>

<script>
import { 
    NavBar,
    Swipe,
    SwipeItem,
    Stepper,
    Icon,
    ActionBar, 
    ActionBarIcon, 
    ActionBarButton
    } from 'vant';

import UserAppraiseView from '../UserAppraiseView/UserAppraiseView.vue';

export default {
    name:'GoodDetailView',
    /*
    setup(){
        const vm = getCurrentInstance()
        // const scollView = ref(null)
        const abc = ref(null)

        onMounted(() => {
            // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
            // console.log(scollView.value) // <div/>
            // console.log(vm.refs.scollView) // <div/>
            console.log(vm.refs.abc) // <div/>
            // console.log(scollView.value === vm.refs.scollView) // true

            // console.log(vm.refs.scollView.callWithErrorHandling) 

            console.log(abc.value) // true
            console.log(abc.value === vm.refs.abc) 
        }),
        onBeforeUpdate(() => {
            console.log(abc.value === vm.refs.abc) // true
        })
        

         return {
            // scollView,
            abc
        }
    },
    */
    // setup() {
    //         const root = ref(null)
            
    //         onMounted(() => {
    //             console.log(root.value)
    //         })
    //         nextTick(() => {
    //             console.log(root.value)
    //         })
            
    //         return {
    //             root
    //         };
    // },
    components:{
        [NavBar.name]: NavBar,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Stepper.name]: Stepper,
        [Icon.name]: Icon ,
        UserAppraiseView,
        [ActionBar.name]: ActionBar,
        [ActionBarIcon.name]: ActionBarIcon,
        [ActionBarButton.name]: ActionBarButton
    },
    data(){
        return {
            goodsDetail: null,
            number: 0
        }
    },
    methods: {
        back(){
            return this.$store.commit('changeGoodsDetailShow')
        },
        onCollect(){
            console.log('收藏')
        },
        onCart(){
            console.log('跳轉購物車')
        },
        onAddCart(){
            console.log('添加購物車')
        },
        onBuy(){
            console.log('立即購買')
        }

    },
    mounted(){
        
    },
    beforeUpdate(){
        //  確保DOM 渲染完再執行
        this.$nextTick(() => {
            // vm.$el 組件中的 跟DOM 元素
            let userAppraise = this.$refs.userAppraise.$el;
            let width = userAppraise.clientWidth;

            // console.dir(width)
            // element.style 內聯樣式
            // getComputedStyle 包括內聯樣式、嵌入樣式、外部樣式
            let computedStyle = getComputedStyle(userAppraise,null);
            
            //右間距
            var marginR = parseInt(computedStyle.marginRight) //去除px 得到數字 使用parseInt
            
            // 動態計算 
            var temp = this.goodsDetail.appraise.list.length * (width + marginR + 1) + 'px'

            this.$refs.scollView.style.width = temp
        })
    },
    created(){
        //根據商品ID
        console.log(this.$store.state.goodsItemID)

        let vm = this
        this.$ajax.get(`${process.env.VUE_APP_SERVER_URL}/json/goods-detail.json`)
            .then(function(res){
                vm.goodsDetail = res.data
                // console.log(vm.goodsDetail)
            })
            .catch(function(err){
                console.log(err)
            })
    }
}
</script>

<style lang='scss'>

</style>