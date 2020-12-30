
// 定義狀態
import { createStore } from 'vuex'

export default createStore({
    state:{
        goodsDetailView: false,
        goodsItemID: 2
    },
    mutations:{
        increment (state){
            state.goodsItemID++
        }
        ,
        changeGoodsDetailShow(state){
            state.goodsDetailView = !state.goodsDetailView
            // console.log(state.goodsDetailView)            
        },
        changeGoodsItemId(state,goodsID){
            state.goodsItemID = goodsID
        }
        ,
    }
})


// export default store;