<template>
    <div class="mine-item-view" @click="onMIneItemClick">
        <van-icon :name="icon" class="icon" />
        <p class="name">{{ name }}</p>
        <p class="other">{{ other }}</p>
    </div>
</template>

<script>

import { Icon  } from 'vant'
export default {
    name:'mineItemView',
    props:['icon','name','other', 'type'],
    components:{
      [Icon.name]: Icon
    },
    setup(props,{ emit }){

        const onMIneItemClick = () => {
            emit('onOrderItemClick',props.type)
        }

        return {
            onMIneItemClick
        }
    }
}
</script>

<style lang='scss'>
    .mine-item-view{
        padding:.8125rem;
        text-align: center;
        line-height: 1.5625rem;
        > .icon{
            color: #f44336;
        }
        > .name{
            font-size: .6875rem;
            color: #5C5C5C;
            margin:0;
            line-height: 1.125rem;
        }
        > .other{            
            font-size: .4375rem;
            color: #C5C5C5;
        }
    }
</style>