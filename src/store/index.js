import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      cityName:"北京",
      cityId:1002,
    },
    mutations: {
      changeCity(state,payload){
        state.cityName = payload.name //state的cityName = payload形参.name是自定义的
        state.cityId = payload.id //state的cityId = payload形参.id是自定义的
      }
    },
    actions: {
      
    }
    // state: {
    //   info: {
    //     userName: ''
    //   }
    // },
    // mutations: {
    //   changeUserName(state, data) {
    //     state.info.userName = data
    //   },
    //   changeAmount(state, data) {
    //     state.info.amount = data
    //   }
    // },
    // actions: {
    //   async getAmount({commit}) {
    //     setTimeout(()=> {
    //       let result = 2000
    //       commit('changeAmount', result)
    //     })
    //   },
    // }
})