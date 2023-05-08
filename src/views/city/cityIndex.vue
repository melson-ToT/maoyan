<template>
  <div class="father">
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
    getcity(item){//上面共用一个事件，（item，val），此时的item是形参
      console.log(item.name);//打印(当前的地址)
      this.$router.go(-1)//点击时，后退一步

    }
  }
  //   mounted() {
  //     this.getHot();
  //   },
  //   methods: {
  //     getHot() {
  //         getHotList().then((res) => {
  //           this.list = res.data.data.hot;
  //         });
  //     },
  //   },
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