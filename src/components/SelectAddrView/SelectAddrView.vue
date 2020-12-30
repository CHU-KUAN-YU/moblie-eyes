<template>
    <div class="select-addr-view">
        <van-address-list
            v-model="chosenAddressId"
            :list="addList"
            default-tag-text="默认"
            add-button-text="下一步"
            @add="onNext"
            @edit="onEdit"
            />
    </div>
</template>

<script>
import { ref ,reactive , toRefs } from 'vue';
import { AddressList  } from 'vant';

export default {
    name:'SelectAddrView',
    components:{
        [AddressList.name]: AddressList,
    },
    props:['addList'],
    setup(_,{ emit }) {
        const chosenAddressId = ref('1');
        
        const onNext = () => {
        // Toast('下一步操作');
        };
        const onEdit = (item, index) => {
            emit('onEditAddr',index)
            console.log('點到')
        };

        return {
            onNext,
            onEdit,
            chosenAddressId,
        };
    },
    created(){
        // console.log('地址資料'+ obj)
    }
}
</script>