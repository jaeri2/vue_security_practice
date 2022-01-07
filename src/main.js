import Vue from "vue";
import App from "./App.vue";
import router from './router/index';
import store from './store/index';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import VeeValidate from 'vee-validate'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/style.css';

Vue.config.productionTip = false;
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
