<template>
  <div id="app">
    <!-- 頭部 導航欄 -->    
    <van-nav-bar
      :title="title"
      fixed
      v-show="navViewShow"
    />
    <!-- 主頁內容 -->
    <router-view @onTitle='getTitle' @onShow='getShow'></router-view>

    <!-- 底部欄位 -->
    <!-- <TarbarView /> -->
    <van-tabbar v-model="active" active-color="#f44336" @change='onClickTabbarItem'>
      <van-tabbar-item icon="home-o" to='/'>首頁</van-tabbar-item>
      <van-tabbar-item icon="filter-o" to='/assor'>分類</van-tabbar-item>
      <van-tabbar-item icon="search" to='/search'>搜索</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to='/cart' info="20">購物車</van-tabbar-item>
      <van-tabbar-item icon="contact" to='/mine'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
// import { useStore } from 'vuex';
import { 
  NavBar,
  Tabbar,
  TabbarItem 
  } from 'vant'

export default {
  name: 'App',
  components: {    
    // TarbarView,
    [NavBar.name] : NavBar,
    [Tabbar.name] : Tabbar,
    [TabbarItem.name] : TabbarItem,
  },
  data(){
    return {
      title:' ',
      navViewShow: true,
      active: 0,
    }
  },
  methods:{
    getTitle(title) {      
      this.title = title;
    },
    getShow(show){
      this.navViewShow = show;      
    },
    /*  navbar 切換 */

    onClickTabbarItem(){
      // 保存
      window.localStorage.setItem('itemIndex', this.active)
    }
  },
  created(){
    // 獲取下標
    var itemIndex = parseInt(window.localStorage.getItem('itemIndex'));
    // console.log(itemIndex);

    if(!isNaN(itemIndex)){
      this.active = itemIndex

      // 獲取路由路徑
      var toPath = this.$router.options.routes[itemIndex + 1].path
      
      // 跳轉
      this.$router.push({path: toPath})
      // this.$router.push({path:''})
      // console.log(this.$router.options.routes)
    }
  },
}
</script>

<style lang='scss'>
  body{
    background-color: #F2F2F2;
  }
  #app{
    background-color: #F2F2F2;
  }
  .van-nav-bar__content{    
    height: 2.8125rem;
    line-height: 2.8125rem;
    background: #f44336;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    .van-nav-bar__title{
      color: white;
    }
  }

  .van-tabbar{
    height: 3.125rem;
  }
  
  /* transition  name='XXXX'

    xxxx-enter (進入)過渡開始
    xxxx-enter-to (進入)過渡結束狀態
    xxxx-enter-active (進入)過渡時間、延遲、曲線

    xxxx-leave (離開)過渡開始
    xxxx-leave-to (離開)過渡結束狀態
    xxxx-leave-active (離開)過渡時間、延遲、曲線
  
  
  */

  .slide-to-right-enter-active,
  .slide-to-right-leave-active{
    transition: all 1s;
  }
  
  .slide-to-right-enter,
  .slide-to-right-leave-to{
    transform: translateX(100%);    
  }

  // 從底部到頂部
  .top-slide-enter-active{
    transform: translateY(0);
  }

  // .top-slide-enter-active,
  .top-slide-leave-active {
    transition:all 1s ease;
    
    // transform: translateY(0);
  }

  .top-slide-enter-to{
    transform: translateY(0);
  }
  
  .top-slide-enter,
  .top-slide-leave-to{
    transform: translateY(100%);
    // 
  }


</style>
