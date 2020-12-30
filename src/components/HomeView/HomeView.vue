<template>
    <div class="home-view">
        <!-- 輪播圖 -->
        <van-swipe class="my-swipe banner-view" :autoplay="3000" indicator-color="white" >
            <van-swipe-item v-for="(item, index) in banner" :key='index'>
                <img v-lazy="item.img">
            </van-swipe-item>
        </van-swipe>


        <!-- 分類 -->
        <CategoryView></CategoryView>

        <!-- 單品熱賣 -->
        <TitleView name='單品熱賣' icon='star-o'></TitleView>
        <SellingView></SellingView>

        <!-- 精選活動 -->
        <TitleView name='精選活動' icon='gift-o'></TitleView>
        <WinnowView :bigImg="winnowBig1" :contents="winnowContents1" ></WinnowView>
        <WinnowView :bigImg="winnowBig2" :contents="winnowContents2"></WinnowView>

        <!-- 為你推薦 -->
        <TitleView name='為你推薦' icon='label-o'></TitleView>

        <CommendView></CommendView>


        <!-- 商品詳情 -->
        <transition name='slide-to-right' >
            <GoodsDetailView v-if="goodsDetailShow"></GoodsDetailView>
        </transition>
    </div>
</template>

<script>
import '../../temp.scss'
import { Swipe, SwipeItem} from 'vant'
import CategoryView from '../../components/CategoryView/CategoryView.vue'
import TitleView from '../TitleView/TitleView.vue'
import SellingView from '../SellingView/SellingView.vue'
import WinnowView from '../WinnowView/WinnowView.vue'
import CommendView from '../CommendView/CommendView.vue'
import GoodsDetailView from '../GoodsDetailView/GoodsDetailView.vue'

export default {
    name:'homeView',
    components:{
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        CategoryView,
        TitleView,
        SellingView,
        WinnowView,
        CommendView,
        GoodsDetailView
    },
    data(){
        return {
            title:' 全視眼鏡商成',
            navViewShow: true,
            banner:[],
            winnowBig1:'',
            winnowContents1:[],
            winnowBig2:'',
            winnowContents2:[],
        }
    },
    computed:{
        goodsDetailShow(){
            return this.$store.state.goodsDetailView
        }
    },
    created() {
        this.$emit('onTitle',this.title)
        this.$emit('onShow',this.navViewShow)

        const vm = this;

        //獲取輪播圖
        this.$ajax.get(`${process.env.VUE_APP_SERVER_URL}/main/json/banner.json`)
            .then(function(response){
                // console.log(response.data)
                vm.banner = response.data
            })
            .catch(function(err){
                console.log(err)
            })

        // 獲取精品活動資料
        this.$ajax.get(`${process.env.VUE_APP_SERVER_URL}/main/json/winnow.json`)        
            .then(function(response){                
                vm.winnowBig1 = response.data.bigImg1
                vm.winnowContents1 = response.data.winnowItems1
                vm.winnowBig2 = response.data.bigImg2
                vm.winnowContents2 = response.data.winnowItems2
                // vm.banner = response.data
            })
            .catch(function(err){
                console.log(err)
            })
    },    
}
</script>

<style lang='scss'>
    .van-nav-bar{        
            .van-icon{
                font-size: 1rem;
                color: white;
            }        
    }
    .home-view{
        padding-top: 2.8125rem;
        padding-bottom: 2.8125rem;
        > .banner-view{
            height: 9.875rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>