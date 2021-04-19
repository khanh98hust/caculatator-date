import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    result: 0,
    fromDate : 0,
    toDate : 0
  },
  mutations: {
    TINH_NGAY(state){
        state.result = Math.floor((state.toDate - state.fromDate)/ 86400)
    }
  },
  actions: {
    tinhngay({commit},){
        commit(['TINH_NGAY'])
    }
  },
  getters : {
      ketqua(state){
          return state.result
      }
  }
})