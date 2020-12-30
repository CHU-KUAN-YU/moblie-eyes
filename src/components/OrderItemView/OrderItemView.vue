<template>
    <div class="order-item-view">
        <div class="order-title">
            <div class="time">{{ order.orderTime }}</div>
            <div class="type">{{ typeStr }}</div>
        </div>
        <div class="order-goods">
            <div class="img">
                <img :src="order.img" alt="">
                <span></span>
            </div>
            <div class="desc">
                <p>{{ order.desc }}</p>
                <span></span>
            </div>
            <div class="price">
                <div class="temp">
                    <p>$ {{ order.price }}</p>
                    <p>x {{ order.num }}</p>
                </div>
                <span></span>
            </div>
            
        </div>

        <div class="order-other">
            <p>
                <span>共{{ order.num }}件 應付金額：</span>
                <span>$ {{ order.num * order.price }}</span>
            </p>

            <div class="buttons">
                <van-button round type='default' size="small" v-if="order.type === 2 || order.type === 4">查看物流</van-button>
                <van-button round type='default' size="small" v-if="order.type === 4">再次購買</van-button>
                <van-button round type='default' size="small" >取消訂單</van-button>
                <van-button round color="#f44336" size="small" v-if="order.type === 1">立即購買</van-button>
                <van-button round type='default' size="small" v-if="order.type === 2">提醒發貨</van-button>
                <van-button round color="#f44336" size="small" v-if="order.type === 3">確認收貨</van-button>
            </div>
        </div>
    </div>
</template>

<script>

import { Button } from 'vant';
import { computed } from 'vue';
// import Axios from 'axios';

export default {
    name:'orderItemView',
    components:{
       [Button.name]: Button 
    },
    props:['order'],
    setup(props){
        const typeStr = computed(() => {
            if ( props.order.type == 1 ){
                return '待付款'
            } else if ( props.order.type == 2 ){
                return '待發貨'
            } else if ( props.order.type == 3 ){
                return '待收貨'
            } else if ( props.order.type == 4 ){
                return '交易成功'
            }
        })

        // console.log(props.order.type)

        return{
           typeStr
        }
    }
}
</script>

<style lang="scss">
    .order-item-view{
        padding:  1.25rem 0.9375rem;
        background: white;
        margin-top: 0.625rem;
        > .order-title{
            font-size: 0.625rem;
            transform: scale(0.9);
            line-height: 1.875rem;
            border-bottom: 0.0625rem solid #E8E8E8;
            overflow: hidden;
            font-weight: 600 ;
            > .time{
                float: left;
            }
            > .type{
                float: right;
            }
        }
        > .order-goods{
            border-bottom: .0625rem solid #E8E8E8;
            height: 6.625rem;
            > .img{
                width: 6.25rem;
                height: 100%;
                float: left;
                img{
                    width: 5rem;
                    display: inline-block;
                    vertical-align: middle;
                }
                > span {
                    display: inline-block;
                    vertical-align: middle;
                    height: 100%;
                    width: 0;
                }
            }
            > .desc{
                width: 11.5rem;
                float: left;
                font-size: 0.75rem;
                line-height: 1.1875rem;
                height: 100%;
                font-weight:600;
                > p{
                    display: inline-block;
                    vertical-align: middle;
                }
                > span{
                    display: inline-block;
                    vertical-align: middle;
                    height: 100%;
                    width: 0;
                }
            }
            > .price{
                width: 3.1875rem;
                float: left;
                font-size: 0.75rem;
                line-height: 1.1875rem;
                color: #7D7D7D;
                height: 100%;
                text-align: right;
                > .temp{
                    display: inline-block;
                    vertical-align: middle;
                }
                > span{
                    display: inline-block;
                    vertical-align: middle;
                    height: 100%;
                    width: 0;
                }
            }
        }
        > .order-other{
            text-align: right;
            > p{
                font-size: .8125rem;
                color: #7D7380;
                margin: 0.875rem 0 0.8125rem;
            }
            > .buttons{
                > button{
                    margin-left: .3125rem;
                }
            }
        }
    }
</style>