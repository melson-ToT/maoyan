import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      info: {
        userName: ''
      }
    },
    mutations: {
      changeUserName(state, data) {
        state.info.userName = data
      },
      changeAmount(state, data) {
        state.info.amount = data
      }
    },
    actions: {
      async getAmount({commit}) {
        setTimeout(()=> {
          let result = 2000
          commit('changeAmount', result)
        })
      },
    }
})