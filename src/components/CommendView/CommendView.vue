<template>
    <div class="commend-view">
        <div class="commend-item" v-for="(item,index) in commendList" :key="index">
            <div class="commend-body">
                <div class="img-view">
                    <img v-lazy="item.img" alt="">
                </div>
                <div class="detail-view">
                    <h4 class="title">{{ item.title }}</h4>
                    <p class="desc">{{ item.desc }}</p>
                    <div class="keyword">
                        <span>{{item.keyword1}}</span>&nbsp;&nbsp;|&nbsp;
                        <span>{{item.keyword2}}</span>
                    </div>
                    <p class="price">$ {{item.price}}</p>
                </div>
            </div> 
            <div class="commend-footer">
                <span class="brand">{{item.brand}}</span>
                <span class="standard">{{item.standard}}</span>
                <van-button plain type="default" hairline >找相似</van-button>
            </div>
        </div>
    </div>
</template>

<script> 
import '../../temp.scss'
import { Button } from 'vant'

    export default {
        name:'CommendView',
        components:{
            [Button.name]: Button
        },
        data(){
            return{
                commendList: []
            }
        },
        created(){
            var vm = this;
            this.$ajax.get(`${process.env.VUE_APP_SERVER_URL}/main/json/commend-list.json`)
                .then(function(res){                    
                    vm.commendList = res.data
                    // console.log(vm.commendList)
                })
                .catch(function(err){
                    console.log(err);
                })
        }
    }
</script>

<style lang='scss'>
    
</style>