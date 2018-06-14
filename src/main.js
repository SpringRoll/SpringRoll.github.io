import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './router';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
