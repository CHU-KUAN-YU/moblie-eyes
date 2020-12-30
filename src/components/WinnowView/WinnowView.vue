<template>
    <div class="winnow-view">
        <img v-lazy="bigImg" class="big-img" alt="">
        <div class="hidden-view">
            <div class="winnow-box" ref='itemsView'>
                <WinnowItemView v-for='(item,index) in contents' :key='index' :item="item"></WinnowItemView>
            </div>
        </div>        
    </div>
</template>

<script>
import WinnowItemView from '../WinnowItemView/WinnowItemView.vue'

export default {
    name:'WinnowView',    
    props:['bigImg','contents'],    
    components: {
        WinnowItemView
    },   
    beforeUpdate(){
        //獲取對應的節點動態控制寬度
        let temp = this.contents.length * (100 + 22);
        this.$refs.itemsView.style.width = temp + 'px';        
    },
}
</script>

<style lang='scss'>
    .winnow-view{
        .hidden-view{
            width: 100%;
            overflow-x: auto;
            background-color: white;
        }
        .big-img{
            width: 100%;
            height: 9.765625rem;
        }
        .winnow-box{            
            padding-left: .625rem;
            overflow: hidden;
        }
    }
</style>