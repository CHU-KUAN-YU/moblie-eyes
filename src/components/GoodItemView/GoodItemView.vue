<template>
    <div class="goods-item-view" @click="goodsItemClick(goods.id)">
        <img class="img" v-lazy="goods.img" alt="">
        <p class="title">{{ goods.title }}</p>
        <p class="desc">{{ goods.desc }}</p>
        <p class="other">
            <span class="row-price"> $  {{ goods.nowPrice }}</span>
            <span class="old-price">{{ goods.oldPrice }}</span>
            <span class="rebate">{{ goods.rebate }}</span>
        </p>
    </div>
</template>

<script>
// import { reactive, computed } from 'vue';
import { useStore } from 'vuex';


export default {
    name:'GoodItemView',
   
    props: ['goods'],
    methods:{
        goodsItemClick(goodsID){
            // console.log(goodsID);
            // console.log(this.$store.commit('changeGoodsDetailShow'))
            this.$store.commit('changeGoodsDetailShow', goodsID)
            this.$store.commit('changeGoodsItemId',goodsID)
        }
    }
}
</script>

<style lang='scss'>
    .goods-item-view{
        width: 50%;
        height: 13.875rem;
        // border: .0625rem solid #bbbbbb;
        border-right: .0625rem solid #bbbbbb;
        border-bottom: .0625rem solid #bbbbbb;
        float: left;
        box-sizing: border-box;
        background-color: white;
        text-align: center;
        > .img{
            width:100%;
            // height: 8.125rem;
            margin: .625rem 0;       
        }
        > p{
            text-align: center;
        }
        .title{
            font-size: .8125rem;
            color: black;
            margin-bottom: .625rem;
        }
        .desc{
            color: #b4b4b4;
            font-size: .75rem;
            margin-bottom: .8125rem;
        }
        .row-price{
            color: #f44336;
            font-size: .875rem;
            font-weight: 800;
            margin-right: .5rem;
        }
        .old-price{
            color:#b4b4b4;
            // background-color: #f44336;
            font-size: .75rem;
            font-weight: 800;
            margin-right: .5rem;
        }
        .rebate{
            font-size: 0.75rem ;
            color: white;
            background-color: #f44336;
            border-radius: .1875rem;
            width: 2.0625rem;
            height: .75rem;
            line-height: .75rem;
            display:inline-block;
        }

    }
</style>