<template>
    <div class="mine-view">
        <!-- 頭部訊息 -->
        <div class="user-view">
            <div class="content-wrapper">
                <div class="user-msg">
                    <img src="https://github.com/CHU-KUAN-YU/moblie-eyes/blob/main/img/atom.png" alt="">
                    <p>請叫我阿若妹</p>
                </div>
                <van-row>
                    <van-col span="6">
                        <dl>
                            <dt>3</dt>
                            <dd>收藏</dd>
                        </dl>
                    </van-col>
                    <van-col span="6">
                        <dl>
                            <dt>2</dt>
                            <dd>關注</dd>
                        </dl>
                    </van-col>
                    <van-col span="6">
                        <dl>
                            <dt>22</dt>
                            <dd>足跡</dd>
                        </dl>
                    </van-col>
                    <van-col span="6">
                        <dl style="border-right:0">
                            <dt>33</dt>
                            <dd>心得</dd>
                        </dl>
                    </van-col>
                </van-row>
            </div>
        </div>

        <!-- 訂單訊息  -->
        <div class="item-wrapper">
            <div class="title-wrapper">
                <h4>我的訂單</h4>
                <a href="#" @click="onOrderView(0)">
                    查看全部
                    <van-icon name="arrow"  />
                </a>
            </div>
            <van-row>
                <van-col span="6">
                    <MineItemView @onOrderItemClick='onOrderView' type='1' icon='shop' name='待付款'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView @onOrderItemClick='onOrderView' type='2' icon='shop-collect' name='待發貨'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView @onOrderItemClick='onOrderView' type='3' icon='underway' name='待收款'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView @onOrderItemClick='onOrderView' type='4' icon='alipay' name='退款退貨'></MineItemView>
                </van-col>
            </van-row>
        </div>

        <!-- 我的服務  -->
        <div class="item-wrapper">
            <div class="title-wrapper">
                <h4>我的服務</h4>
                <a href="#">
                    查看全部
                    <van-icon name="arrow" />
                </a>
            </div>
            <van-row style="border-bottom:.0625rem solid #dedede;">
                <van-col span="6">
                    <MineItemView icon='youzan-shield' name='邀請好友' other='立賺30元'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView icon='bell' name='簽到贏禮包' other='10豆'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView icon='printer' name='優惠卷' other='3張'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView icon='audio' name='現實購'></MineItemView>
                </van-col>
            </van-row>
            <van-row style="border-bottom:.0625rem solid #dedede;">
                <van-col span="6">
                    <MineItemView icon='comment' name='我的收藏' other='10個'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView icon='gift' name='收貨地址' other='2個'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView icon='question' name='客戶中心'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView icon='todo-list' name='充值中心'></MineItemView>
                </van-col>
            </van-row>
            <van-row>
                <van-col span="6">
                    <MineItemView icon='manager' name='我的回答'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView icon='label' name='領卷中心'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView icon='service' name='驗光單' other='3張'></MineItemView>
                </van-col>
                <van-col span="6">
                    <MineItemView icon='chat' name='試用中心' other='1元試用'></MineItemView>
                </van-col>
            </van-row>
        </div>

        <!-- 登出 -->
        <div class="logout">
            <a href="#">退出</a>
        </div>


        <!-- 訂單詳情 -->
        <transition name='slide-to-right'>
            <OrderView v-if="orderViewShow" @onBack='onOrderViewHide' :orderType="orderType"></OrderView>
        </transition>
    </div>
</template>

<script>
import { Col, Row ,Icon  } from 'vant'
import { ref } from 'vue';
import MineItemView from '../MineItemView/MineItemView.vue'
import OrderView from '../OrderView/OrderView.vue'


export default {
    name:'mineView',
    components:{
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        MineItemView,
        OrderView
    },
    setup(){
        const navViewShow = false;
        const orderViewShow = ref(false);
        const orderType = ref(-1);


        /* 方法 */
        const onOrderView = (type) => {
            orderViewShow.value = true
            orderType.value = parseInt(type)
            console.log(orderType.value)
        }

        const onOrderViewHide = () => {
            orderViewShow.value = false
            // console.log(orderViewShow.value)
        }

        return {
            navViewShow,
            orderViewShow,
            onOrderView,
            onOrderViewHide,
            orderType
        }
    },
    created() {
        this.$emit('onShow',this.navViewShow)
    }
}
</script>

<style lang='scss'>
    .mine-view{
        overflow: auto;
        padding-bottom: 3.125rem;
        > .user-view{
            width: 100%;
            height: 10rem;
            background-color: #f44336;
            margin-bottom: 3.125rem;            
            padding: 5rem 2rem 0;
                box-sizing: border-box;
            > .content-wrapper{
                height: 7.6875rem;
                background: white;
                border-radius: .625rem;
                position: relative;
                > .user-msg{
                    line-height: 3.4375rem;
                    height: 3.4375rem;
                    margin-bottom: .625rem;
                    > img{
                        width: 4.1875rem;
                        height: 4.1875rem;
                        border-radius: 50%;
                        position:absolute;
                        left: 1.25rem;
                        top: -1.25rem;
                    }
                    > p{
                        font-size: .9375rem;
                        text-align: center;
                    }

                }
                dl{
                    text-align: center;
                    border-right: .0625rem solid #dbdbdb;
                    height: 2.625rem;
                    dt{
                        color:#7e7e7e;
                        margin-bottom: .625rem;
                        font-size: .625rem;                        
                    }
                    dd{
                        color:  #dbdbdb;
                        font-size: .75rem;

                    }
                    
                }
            }
        }

        > .item-wrapper{
            padding: 0 0.625rem;
            background: white;            
            margin-bottom: 0.625rem;
            > .title-wrapper{                
                height: 3.125rem;
                font-size: .875rem;
                line-height: 3.125rem;
                border-bottom: .0625rem solid #dbdbdb;
                > h4{
                    font-weight: 800;
                    float: left;
                }
                > a{
                    float:right;
                    color: #DBDBDB;
                    vertical-align: middle;
                }

            }
        }

        > .logout{
            width: 100%;
            padding: 0 .625rem .625rem .625rem;
            box-sizing: border-box;
            > a{
                display: block;  
                border: .0625rem solid #DBDBDB;
                text-align: center;
                height: 2.5625rem;
                line-height: 2.5625rem;
                background: white;
                color: black;
                font-size: .875rem;
            }
        }
    }

    
</style>