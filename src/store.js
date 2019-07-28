import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store =  new Vuex.Store({
  state: {
    token:'',
    cartarr:JSON.parse(window.localStorage.getItem("cartarr"))||[],
  },
  mutations: {
    setToken(state,value){
        state.token = value;
    },
    //如果没有则新增，如果有则，数量加一
      tocart(state,value){
      let cart = state.cartarr.find(v=>v.title == value.label);
      if (cart){
        cart.cartCount +=1;
      } else {
        state.cartarr.push({title:value.label,cartCount:1})
      }
    },

    //增加商品数量
    cartadd(state,index){
      state.cartarr[index].cartCount++;
    },
    //减少商品数量
    cartremove(state,index){
      if(state.cartarr[index].cartCount>1){
          state.cartarr[index].cartCount--
      }else {
          state.cartarr.splice(index,1)
      }
    },
    clearcart(state){
      state.cartarr=[];
    }
  },
  actions: {

  },
    getters:{
        countsum:state=>{
            let num=0
            state.cartarr.forEach(v=>{
                num+=v.cartCount
            })
            return num
        }
    },

})

store.subscribe((mutations, state)=>{
    window.localStorage.setItem("cartarr",JSON.stringify(state.cartarr));
})

export default store

