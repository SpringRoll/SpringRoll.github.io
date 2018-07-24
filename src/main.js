import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Plugins
import './plugins/vuetify';
import './plugins/highlight';

// Styles
import './scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
