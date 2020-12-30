<template>
    <div class="selling-view">
        <GoodItemView :goods="goods" v-for="(goods ,index) in sellings" :key="index" ></GoodItemView>
    </div>
</template>

<script>
import GoodItemView from '../GoodItemView/GoodItemView.vue'
export default {
    name:'SellingView',
    components:{
        GoodItemView
    },
    data(){
        return{
            sellings: []
        }
    },
    created(){
        let vm = this
        this.$ajax.get(`${process.env.VUE_APP_SERVER_URL}/main/json/selling-list.json`)
            .then(function(res){
                // console.log(res.data)
                vm.sellings = res.data
            })
            .catch()
    },
}
</script>

<style lang='scss'>
    .selling-view{
        border-top: .0625rem solid #bbbbbb;
        border-left: .0625rem solid #bbbbbb;
        overflow: hidden;
    }
</style>