<template>
    <div class="title-view">
        <h3>
            <van-icon :name="icon" />
            <!-- 單品熱賣 -->
            {{ name }}
        </h3>
    </div>
</template>

<script>
import { Icon } from 'vant'

export default {
    name:'titleView',
    components:{
        [Icon.name]: Icon
    },
    props:['name','icon'],
    data(){
        return {            
        }
    }, 
}
</script>

<style lang='scss'>
    .title-view{
        height: 4.6875rem;
        line-height: 4.6875rem;
        > h3{
            font-size: 1.125rem;
            text-align: center;
            font-weight: 900;
        }
        i {
            margin-right: .5rem;
            font-weight: 900;
        }
    }    
    
</style>