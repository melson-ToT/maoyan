<template>
  <div class="father" v-if="list.length">
    <div class="not-city">
      <p>热门城市</p>
      <div class="not-diqu" v-for="item in hotCity.cities" :key="item.cityId" @click="getcity(item)">
        {{ item.name }}
      </div>
    </div>
    <div class="city" v-for="(item, index) in otherCity" :key="index">
      <p>{{ item.title }}</p>
      <div class="diqu" v-for="val in item.cities" :key="val.cityId" @click="getcity(val)">
        {{ val.name }}
      </div>
    </div>
  </div>
</template>

<script>
// import { getHotList } from "@/api";
import { mapMutations} from "vuex";
export default {
  data() {
    return {
      //   list:[],
      list: [
        {
          title: "热门城市",
          cities: [
            {
              cityId: "9991",
              name: "香港",
            },
            {
              cityId: "9992",
              name: "澳门",
            },
            {
              cityId: "9993",
              name: "台湾",
            },
            {
              cityId: "9994",
              name: "日本",
            },
          ],
        },
        {
          title: "A",
          cities: [
            {
              cityId: "0001",
              name: "安庆",
            },
            {
              cityId: "0002",
              name: "安阳",
            },
            {
              cityId: "0003",
              name: "阿克苏",
            },
            {
              cityId: "0004",
              name: "安宁",
            },
          ],
        },
        {
          title: "B",
          cities: [
            {
              cityId: "1001",
              name: "保定",
            },
            {
              cityId: "1002",
              name: "北京",
            },
            {
              cityId: "1003",
              name: "包头",
            },
            {
              cityId: "1004",
              name: "蚌埠",
            },
          ],
        },
        {
          title: "C",
          cities: [
            {
              cityId: "2001",
              name: "长沙",
            },
            {
              cityId: "2002",
              name: "成都",
            },
            {
              cityId: "2003",
              name: "长春",
            },
            {
              cityId: "2004",
              name: "池州",
            },
          ],
        },
        {
          title: "D",
          cities: [
            {
              cityId: "3001",
              name: "大连",
            },
            {
              cityId: "3002",
              name: "东莞",
            },
            {
              cityId: "3003",
              name: "丹阳",
            },
            {
              cityId: "3004",
              name: "德阳",
            },
          ],
        },
        {
          title: "E",
          cities: [
            {
              cityId: "4001",
              name: "郎溪",
            },
            {
              cityId: "4002",
              name: "毛山",
            },
            {
              cityId: "4003",
              name: "汤桥",
            },
            {
              cityId: "4004",
              name: "网吧",
            },
          ],
        },
        {
          title: "F",
          cities: [
            {
              cityId: "5001",
              name: "佛山",
            },
            {
              cityId: "5002",
              name: "阜阳",
            },
            {
              cityId: "5003",
              name: "福州",
            },
            {
              cityId: "5004",
              name: "富蕴",
            },
          ],
        },
        {
          title: "G",
          cities: [
            {
              cityId: "6001",
              name: "广州",
            },
            {
              cityId: "6002",
              name: "贵阳",
            },
            {
              cityId: "6003",
              name: "桂林",
            },
            {
              cityId: "6004",
              name: "广安",
            },
          ],
        },
        {
          title: "H",
          cities: [
            {
              cityId: "7001",
              name: "湖北",
            },
            {
              cityId: "7002",
              name: "河南",
            },
            {
              cityId: "7003",
              name: "河北",
            },
            {
              cityId: "7004",
              name: "海南",
            },
          ],
        },
        {
          title: "I",
          cities: [
            {
              cityId: "8001",
              name: "丽江",
            },
            {
              cityId: "8002",
              name: "连云港",
            },
            {
              cityId: "8003",
              name: "廊坊",
            },
            {
              cityId: "8004",
              name: "泸州",
            },
          ],
        },
      ],
    };
  },
  computed: {
    hotCity() {
      return this.list[0];
    },
    otherCity() {
      return this.list.slice(1);
    },
  },
  methods:{
    ...mapMutations(["changeCity"]),
    getcity(item){//上面共用一个事件，（item，val），此时的item是形参
      this.changeCity({name:item.name,id:item.cityId})//store仓库的 mutations 方法，name是payload.name,id是payload.id
      console.log(item.name);//打印(当前的地址)
      console.log(item.cityId);
      localStorage.setItem("name",item.name)//将最后的城市选择，存储到本地：当再次登录时，就是上次点击的城市
      localStorage.setItem("id",item.cityId)
      this.$router.go(-1)//点击时，后退一步

    }
  }
  //将数据和方法添加到vuex中
//   <script>
// import Vue from 'vue'
// import Vuex from 'vuex'
// import { getHotList } from "@/api";//引入'axios'请求

// Vue.use(Vuex)

// export default new Vuex.Store({
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

// 2. 在组件中通过计算属性获取：Store仓库actions中的异步方法

// <template>
//   <div class="father" v-if="list.length">
//     <div class="not-city">
//       <p>热门城市</p>
//       <div class="not-diqu" v-for="item in hotCity.cities" :key="item.cityId" @click="getcity(item)">
//         {{ item.name }}
//       </div>
//     </div>
//     <div class="city" v-for="(item, index) in otherCity" :key="index">
//       <p>{{ item.title }}</p>
//       <div class="diqu" v-for="val in item.cities" :key="val.cityId" @click="getcity(val)">
//         {{ val.name }}
//       </div>
//     </div>
//   </div>
// </template>

// <script>
// 删除，import { getHotList } from "@/api"; 因为直接在 Store仓库的 actions 中请求数据，所以不需要在组件中引入了
// import { mapState,mapMutations} from "vuex";

// export default {
//   mounted(){//将 actions 的方法引入到生命周期
//     this.$store.dispatch("getHot")，//Store仓库actions中的异步方法   ...mapState(["list"])//获取state 的 list
//   },
//   methods:{
//     ...mapMutations(["changeCity"]),//引入Store仓库中 mutations方法
//     getcity(item){//上面共用一个事件，（item，val），此时的item是形参
//       this.changeCity({name:item.name,id:item.cityId})//store仓库的 mutations 方法，name是payload.name,id是payload.id
//       localStorage.setItem("name",item.name)//当再次登录时，就是上次点击的城市
//       localStorage.setItem("id",item.cityId)
//       this.$router.go(-1)//点击时，后退一步
//     }
//   },
//   computed:() {//将 state 的 list:[],放入到计算属性中
//     ...mapState(["list"]),//获取state 的 list数据
//     hotCity() {
//       return this.list[0];
//     },
//     otherCity() {
//       return this.list.slice(1);
//     },
//   },
// };
};
</script>

<style lang="less" scoped>
.father {
  width: 100%;
  height: 100%;
  p {
    width: 100%;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    background: #bbb;
    padding-left: 20px;
    box-sizing: border-box;
  }
  .diqu {
    margin: 0 20px;
    border-bottom: 1px solid black;
  }
  .diqu:last-child {
    border-bottom: 0;
  }
}
.not-city {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .not-diqu {
    width: 20%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-bottom: 0;
  }
}
</style>