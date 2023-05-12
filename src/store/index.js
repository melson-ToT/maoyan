import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      //城市相关的本地存储
      cityName:localStorage.getItem("name") || "北京", //将最后的城市选择，存储到本地：当再次登录时，就是上次点击的城市
      cityId:localStorage.getItem("id") || 1002,       //setItem:是存，getItem：是取，||:如果没有存储过，则默认是："北京",1002,
    },
    mutations: {
      //城市相关的同步函数
      changeCity(state,payload){
        state.cityName = payload.name //state的cityName = payload形参.name是自定义的
        state.cityId = payload.id //state的cityId = payload形参.id是自定义的
      }
    },
    actions: {
      //城市相关的异步函数
        //getHot({commit}){//传入 mutations 中 {commit}的解构方法，将 actions 中获取的异步数据，传给 mutations
           //getHotList().then((res) => {
               //this.list = res.data.data.not ----是不可以直接获取 state中的 list:[]
               //commit("getHotState",res)
  //           //commit 传给 mutations 的 getHotState方法，   res = payload
  //         })
    }

  //   城市页面请求添加到vuex，
  //   export default new Vuex.Store({
  //     state: {
  //       cityName:localStorage.getItem("name") || "北京", //将最后的城市选择，存储到本地：当再次登录时，就是上次点击的城市
  //       cityId:localStorage.getItem("id") || 1002,       //setItem:是存，getItem：是取，||:如果没有存储过，则默认是："北京",1002,
  
  //       // 数据也要放在VueX中
  //       list:[],
  //     },
  //     mutations: {
  //       changeCity(state,payload){
  //         state.cityName = payload.name //state的cityName = payload形参.name是自定义的
  //         state.cityId = payload.id //state的cityId = payload形参.id是自定义的
  //       },
  //       getHotState(state,payload){//因为不可以直接获取 state中的 list:[]，需要在 mutations设置方法，并传值
  //                     // payload = actions 中 getHot内的res
  //         state.list = payload.data.data.not
  //       }
  //     },
  //     actions: {//将异步的请求数据放在actions中
  //       getHot({commit}){//传入 mutations 中 {commit}的解构方法，将 actions 中获取的异步数据，传给 mutations
  //         getHotList().then((res) => {
  //           // this.list = res.data.data.not ----是不可以直接获取 state中的 list:[]
  //           commit("getHotState",res)
  //           //commit 传给 mutations 的 getHotState方法，   res = payload
  //         })
  //       }
  //       //或 async 和 await
  //       async getHot({commit}){
  //         const res = await getHotList()
  //         // this.list = res.data.data.not ----是不可以直接获取 state中的 list:[]
  //         commit("getHotState",res)
  //       }
  //     }
  // })
    //支付的 vuex 的逻辑
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