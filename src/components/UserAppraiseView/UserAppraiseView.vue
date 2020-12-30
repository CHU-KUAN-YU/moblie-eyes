<template>
    <div class="user-appraise-view" v-if="appraise">
        <div class="user-desc">
            <div class='user-title'>
                <img :src="appraise.userImg" alt="">
                <span>{{ appraise.name }}</span>
            </div>
            <div class="user-appraise">
                <span>心得</span>
                {{ appraise.content }}
            </div>
        </div>
        <div class="user-show">
            <img :src="appraise.showImg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name:'UserAppraiseView',
        props:['appraise'],
    }
</script>

<style lang='scss'>
    .user-appraise-view{
        width: 17.5rem;
        height: 8.1875rem;
        background: white;
        margin-right: .625rem;
        // float: left;
        box-shadow: 0 0 10px 0 #d0d0d0;
        display: flex;
        flex-flow: row nowrap;
        > .user-desc{
            // float: left;
            width: 9.375rem;
            height: 100%;
            padding: .375rem;
            box-sizing: border-box;
            > .user-title{
                margin-bottom: 1.125rem;
                > img{
                    width: 1.625rem;
                    height: 1.625rem;
                    border-radius: 50%;
                    vertical-align: middle;
                    margin-right: .625rem;
                }
                > span{
                    font-size: 0.75rem;
                    color: #7C7C7C;
                    vertical-align: middle;
                }
            }
            .user-appraise{
                font-size: 0.75rem;
                line-height: 1.125rem;
                color: #AAAAAA;
                > span{
                    display: inline-block;
                    width: 2.625rem;
                    height: .75rem;
                    line-height: .75rem;
                    border: .0625rem solid red;
                    color: red;
                    font-size: .75rem;
                    text-align: center;
                }
            }
        }
        > .user-show{
            width: 8.125rem;
            height: 100%;
            // float: right;
            > img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>