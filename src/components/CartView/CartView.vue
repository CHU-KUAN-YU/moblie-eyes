<template>
    <div class="cart-view">
       <CartItemView v-for="(item,index) in carts" 
       :carts='item' :key="item.id" 
       :isChecked='selectList[index]'
       :isIndex="index" :ref="cartItemView"
       @onCangeChecked='onItemCheckedChange' ></CartItemView>

        <!-- 地址選擇 -->
        <van-popup v-model:show="isSubmit" position="bottom">
            <SelectAddrView :addList="addList" @onEditAddr='onEditAddr'></SelectAddrView>
        </van-popup>

        <!-- 地址編輯 -->
        <van-popup v-model:show="isEdit" position="bottom">
            <EditAddrView :editValue="editValue" @onSaveAddr="onSaveAddr"></EditAddrView>
        </van-popup>

       <van-submit-bar :price="totalPrice" :decimal-length="0" currency="$" button-text="提交訂單" @submit="onSubmit">
            <van-checkbox v-model="isAll" checked-color="#f44336" class="all-checkbox" @change="onAllSelect">全选</van-checkbox>            
        </van-submit-bar>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { ref , computed ,onBeforeUpdate } from 'vue';
import axios from 'axios';
import { SubmitBar , Checkbox ,Popup  } from 'vant';
import CartItemView from '../CartItemView/CartItemView.vue';
import SelectAddrView from '../SelectAddrView/SelectAddrView.vue';
import EditAddrView from '../EditAddrView/EditAddrView.vue';

export default {
    name:'carttView',
    components:{
        CartItemView,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [Popup.name]: Popup,
        SelectAddrView,
        EditAddrView
    },
    setup(){
        const store = useStore(); // 若使用vuex 使用這項
        const title = '購物車';
        const navViewShow = true;
        const carts = ref([]);
        const isAll =  ref(true);
        const selectList = ref([]);
        const isSubmit = ref(false)
        const isEdit = ref(false)

        const addList = ref([]);
        const editValue = ref([]);
        const editIndex = ref([]);

        let itemView = [];
        const cartItemView = el =>{
            itemView.push(el)
        }

        axios.get(`${process.env.VUE_APP_SERVER_URL}/main/json/cart.json`)
        .then(response => {
            carts.value = response.data
            // console.log(carts.value)

            // 動態添加狀態 true
            for(var i = 0 ; i< carts.value.length; i++){
                selectList.value.push(true)
            }
        })
        .catch(function(err){
            console.log(err)
        })

        axios.get(`${process.env.VUE_APP_SERVER_URL}/main/json/user-addr.json`)
        .then(response => {
            addList.value = response.data
            // console.log(addList.value)
        })
        .catch(function(err){
            console.log(err)
        })




        // 方法

        const onSubmit = () =>{
            console.log('提交訂單' ,isSubmit.value)
            isSubmit.value = true
        }

        const onItemCheckedChange = (checked,isIndex) =>{
            // console.log('接收改變: '+ checked + isIndex )

            // 更新狀態數組 !!!數組不會觸發更新
            selectList.value[isIndex] = checked
            // 若用 vue 2.x 會有數組問題 解決數組方法 Vue.$set
        }

        const totalPrice = computed(() => {
            var total = 0;
            
            for(var i = 0; i < selectList.value.length ; i++){
                if(selectList.value[i]){
                    var price = carts.value[i].price;
                    var num = carts.value[i].num;
                    total += price * num
                }
            }

            // 注意單位
            return total * 10 * 10
        })

        const onAllSelect = () =>{
            for (var i = 0;i < selectList.value.length; i++){
                selectList.value[i] = isAll.value
            
                itemView[i].onItemViewChange(isAll.value)
            }          

            console.log(itemView[2])
        }

        const onEditAddr = (index) => {
            console.log('地址編輯: ' + index)
            isEdit.value = true
            editValue.value = addList.value[index]
            // 保存順序
            editIndex.value = index
            // console.log(editIndex.value)
        }

        const onSaveAddr = (addr) => {
            addList.value[editIndex.value] = addr
            // console.log(addList.value)
            isEdit.value = false
        }


        onBeforeUpdate(() => {
            itemView = []
        })

        return {
            title,
            navViewShow,
            carts,
            isAll,
            onSubmit,
            selectList,
            onItemCheckedChange,
            totalPrice,
            onAllSelect,
            itemView,
            cartItemView,
            isSubmit,
            isEdit,
            onEditAddr,
            addList,
            editValue,
            editIndex,
            onSaveAddr
            // getCartData
        }
    },
    created() {
        this.$emit('onTitle',this.title)
        this.$emit('onShow',this.navViewShow)
        //取資料
        // this.getCartData();
    }
}
</script>

<style lang='scss'>
.cart-view{
    padding-top: 2.8125rem;
    // position: fixed;
    // top: 0;
    // left: 0;
    // bottom: 0;
    padding-bottom: 6.125rem;
    box-sizing: border-box;
    > .van-submit-bar{
        bottom: 3.125rem;
    }
    // .all-checkbox{
    //     margin-left: .9375rem;
    // }
}
</style>