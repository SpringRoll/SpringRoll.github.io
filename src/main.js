// Libraries
import Vue from 'vue';
import Router from 'vue-router';
import Vuetify from 'vuetify';

// Library css
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from './App.vue';
import { routes } from './router';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(Vuetify, {
  theme: {
    primary: '#81C784',
    secondary: '#B9F6CA',
    accent: '#212121',
    error: '#000000',
    warning: '#FBC02D',
    info: '#2196f3',
    success: '#304FFE'
  }
});

const router = new Router({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
