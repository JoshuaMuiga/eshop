import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api'
Vue.use(Vuex)
export const store=new Vuex.Store({
  state:{
    products: ''
  },
  mutations:{
    setProduct (state, payload) {
      state.products = payload
    }
  },
  actions:{
    async setProduct ({commit}){
      const response = await api.get('products')
        console.log(response.data)
        commit('setProduct', response.data)
    }
  },
  getters:{
    getproducts (state){
      return state.products
    }
  }
})
