import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/global.scss'
import './index.css'
import BaseCard from './components/Base/BaseCard.vue'
import BaseBtn from './components/Base/BaseBtn.vue'
import axios from 'axios';

axios.defaults.baseURL = 'https://zena-api-dev.herokuapp.com/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
// axios.defaults.withCredentials = true;
// perfect scrollbar plugins 
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import VueApexCharts from "vue3-apexcharts";

// globally call 



createApp(App)
    .component('BaseCard', BaseCard)
    .component('BaseBtn', BaseBtn)
    .use(PerfectScrollbar)
    .use(VueApexCharts)
    .use(store)
    .use(router)
    .mount('#app')
