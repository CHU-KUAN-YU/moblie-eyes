<template>
    <div class="cart-item-view">
        <div class="cart-checkbox">
            <van-checkbox v-model="checked" shape="round" 
                checked-color="#f44336" 
                class="checkbox"
                @change="onchackedChange" >
            </van-checkbox>
            <span></span>
        </div>
        <div class="cart-img">
            <img :src="carts.img" alt="">
            <span></span>
        </div>
        <div class="cart-detail">
            <div class="good-detail">
                <span>特價</span>
                <span>{{ carts.name }}</span>
            </div>
            <p>$ {{ carts.price }}</p>
            <p>X {{ carts.num }}</p>
        </div>
    </div>
</template>

<script>
import { ref , defineComponent } from 'vue';
import { Checkbox  } from 'vant';

export default {
    name:'CartItemView',
    props:['carts','isChecked' ,'isIndex'],
    components:{
        [Checkbox.name]: Checkbox,        
    },
    setup(props ,{ emit }){
        const checked = ref(true)
        const isIndex = ref()

        // 導入props
        checked.value =  props.isChecked 
        isIndex.value = props.isIndex

        // 改變checkbox
        const onchackedChange = () =>{
            // console.log(checked.value)
            // console.log(isIndex.value)
            emit('onCangeChecked',checked.value ,isIndex.value)
            // console.log('觸發on')
        }

        const onItemViewChange = (value) =>{
            checked.value = value
            
            // console.log(checked)
            // console.log('接收到' + value);
        }



        return{
            checked,
            isIndex,
            onchackedChange,
            onItemViewChange
        }
    }
}
</script>

<style lang='scss'>
.cart-item-view{
        width: 22.1875rem;
        height: 6.25rem;
        margin:0.625rem;
        border: .0625rem solid #BBBBBB;
        box-shadow: 0 0 4px 0 gray;
        border-radius: .5rem;
        background-color: white;
    > .cart-checkbox{
        float: left;
        width: 1.5625rem;
        height: 100%;
        text-align: center;
        > .checkbox{
            display: inline-block;    
            vertical-align: middle;
        }
        > span{
            display: inline-block; 
            width: 0;
            vertical-align: middle;
            height: 100%;
        }
    }
    
    > .cart-img{
        width: 4.8125rem;
        height: 100%;
        text-align: center;
        float: left;
        > img{
            display: inline-block;
            width: 4.37rem;
            vertical-align: middle;
        }
        > span{
            width: 0;
            height: 100%;
            display: inline-block;
            vertical-align: middle;
        }
    }
    > .cart-detail{
        float: left;
        margin-top: 1.5625rem;
        > .good-detail{
            font-size: .875rem;
            > span{
                &:nth-of-type(1){
                    color: red;
                    font-size: .875rem;
                    margin-right: .6875rem;
                }
                
            }
        }
        > p{
            font-size: .875rem;
            &:nth-of-type(1){
               line-height: 2.1875rem;  
            }
        }        
    }
}
</style>