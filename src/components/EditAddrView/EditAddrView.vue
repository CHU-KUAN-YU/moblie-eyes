<template>
    <div class="edit-addr-view">
       <van-address-edit
        :area-list="areaList"
        :address-info="editValue"
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
import AreaList from './area.js';
import { ref ,reactive } from 'vue';
import { AddressEdit ,Area } from 'vant';

export default {
    name:'EditAddrView',
    components:{
        [AddressEdit.name]: AddressEdit,
    },
    props:['editValue'],
    setup(_,{ emit }) {
        const searchResult = ref([]);
        const areaList = AreaList;
        /*
            address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
            addressDetail: "杭州市西湖区 黄龙万科中心"
            areaCode: "110101"
            city: "北京市"
            country: ""
            county: "东城区"
            id: "1"
            isDefault: false
            name: "张三"
            postalCode: ""
            province: "北京市"
            tel: "13000000000" 
        */        

        const onSave = (content) => {
            const new_addr = reactive({
                "id": content.id,
                "name": content.name,
                "tel": content.tel,
                "address": content.city + content.county + content.addressDetail
            })
            
            emit('onSaveAddr',new_addr)
            // console.log(new_addr)
        };
        
        const onChangeDetail = (val) => {
        if (val) {
            searchResult.value = [
            {
                name: '黄龙万科中心',
                address: '杭州市西湖区',
            },
            {
                name: '万科中心',
                address: '杭州市西湖区黄龙',
            },
            ];
        } else {
            searchResult.value = [];
        }
        };

        return {
            onSave,
            areaList,
            searchResult,
            onChangeDetail,
        };
    },
}
</script>