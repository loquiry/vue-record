import Vue from "vue";
import Demo from "./Demo.vue";

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(Demo);
  },
}).$mount("#app");
