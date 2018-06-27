import Vue from 'vue'
import App from './App.vue'
import router from '../../router'
import store from '../../store'
import '@/assets/css/common.css'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.path) {
    // baidu tongji
    if (window._hmt) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath]);
    }
  }
  next();
});


/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
