import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import css from "./views/css.css"
import "./assets/font_k1hyk6b1km/iconfont.css"

Vue.config.productionTip = false;

new Vue({
  // router,
  store,
  render: (h) => h(App),
}).$mount("#app");
