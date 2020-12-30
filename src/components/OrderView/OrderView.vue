<template>
    <div class="order-view">
        <van-nav-bar
            title="訂單詳情"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-tabs v-model:active="active">
            <van-tab title="全部">
                <OrderItemView v-for='(order,index) in orderList' 
                    :key="index" :order='order'></OrderItemView>
            </van-tab>
            <van-tab title="待付款">
                <OrderItemView v-for='(order,index) in orderList1' 
                    :key="index" :order='order'></OrderItemView>
            </van-tab>
            <van-tab title="待發貨">
                <OrderItemView v-for='(order,index) in orderList2' 
                    :key="index" :order='order'></OrderItemView>
            </van-tab>
            <van-tab title="待收貨">
                <OrderItemView v-for='(order,index) in orderList3' 
                    :key="index" :order='order'></OrderItemView>
            </van-tab>
            <van-tab title="交易成功">
                <OrderItemView v-for='(order,index) in orderList4' 
                    :key="index" :order='order'></OrderItemView>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import OrderItemView from '../OrderItemView/OrderItemView.vue'
import { NavBar , Tab, Tabs } from 'vant';
import { ref, reactive } from 'vue';
import Axios from 'axios';

export default {
    name:'orderView',
    components:{
        [NavBar.name]: NavBar,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        OrderItemView
    },
    props:['orderType'],
    setup(props,{ emit }){
        const active = ref(props.orderType);
        const orderList = ref([]); //全部
        const orderList1 = ref([]); //待付款
        const orderList2 = ref([]); //待發貨
        const orderList3 = ref([]); //待收貨
        const orderList4 = ref([]); //交易成功
        

        /* 獲取數據 */
        Axios.get(`${process.env.VUE_APP_SERVER_URL}/main/json/order.json`)
        .then(function(response){
            orderList.value = response.data
            // console.log(orderList.value[1])

            for(var i = 0 ; i < orderList.value.length; i++){
                var order = orderList.value[i]
                if(order.type == 1){
                    orderList1.value.push(order)
                }else if(order.type == 2){
                    orderList2.value.push(order)
                }else if(order.type == 3){
                    orderList3.value.push(order)
                }else if(order.type == 4){
                    orderList4.value.push(order)
                }
            }
        })
        .catch(function(err){
            console.log(err);
        })

        /* 方法 */
        const onClickLeft = () => {
            emit('onBack')
        }
        


        return{
            onClickLeft,
            active,
            orderList,
            orderList1,
            orderList2,
            orderList3,
            orderList4
        }
    }
}
</script>

<style lang="scss">
.order-view{
    position:fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background:#F2F2F2;
    z-index: 99;
    .van-tabs__content{
        position: fixed;
        height: 100%;
        width: 100%;
        overflow: auto;
        padding-bottom: 6.1875rem;
        box-sizing: border-box;
    }
}
</style>