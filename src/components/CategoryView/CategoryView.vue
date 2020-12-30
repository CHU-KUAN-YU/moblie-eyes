<template>
    <div class="category-view">
       <dl>
           <dt style="background-color:#db72ab;"></dt>
           <dd>框架</dd>
       </dl>
       <dl>
           <dt style="background-color:#f55a63;"></dt>
           <dd>框架</dd>
       </dl>
       <dl>
           <dt style="background-color:#ab7ce3;"></dt>
           <dd>框架</dd>
       </dl>
       <dl>
           <dt style="background-color:#94db87;"></dt>
           <dd>框架</dd>
       </dl>
       <dl>
           <dt style="background-color:#838de6;"></dt>
           <dd>框架</dd>
       </dl>
    </div>
</template>

<script>
export default {
    name:'category',
    data(){
        return {
            
        }
    },
    created() {        
    }
}
</script>

<style lang='scss'>
    .category-view{
        background-color: white;
        overflow: hidden;
    }
    .category-view > dl{
        width: 20%;
        height: 5.3125rem;
        float: left;
        text-align: center;
        padding: .6875rem 0 0;
        box-sizing: border-box;
    }
    .category-view > dl > dt{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: inline-block;
        margin-top: .4375rem;
    }
    .category-view > dl > dd{
        font-size: .8125rem;        
    }
</style>