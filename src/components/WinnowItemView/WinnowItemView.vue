<template>
    <div class="winnow-item-view">
        <h3>{{ item.name }}</h3>
        <h4>{{ item.desc }}</h4>
        <img :src="item.img" alt="">
    </div>
</template>

<script>
export default {
    name:'WinnowItemView',
    props:['item']
}
</script>

<style lang='scss'>
    .winnow-item-view{
        width: 6.25rem;
        height: 6.25rem;
        background-color: #F6F6F6;
        margin: .3125rem .625rem .625rem 0;
        text-align: center;
        float: left;
        > h3{
            font-size: .8125rem;
            margin:.4375rem 0 0.6875rem;
            text-align: center;
            font-weight: 800;
        }
        > h4{
            font-size:.75rem;
            margin-bottom: 0.6875rem;
            font-weight: 700;
        }
        > img{
            width:4.625rem;
            height: 2.625rem;
        }
    }
</style>