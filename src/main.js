import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/global.scss'
import './index.css'
import BaseCard from './components/Base/BaseCard.vue'
import BaseBtn from './components/Base/BaseBtn.vue'
import Dialog from "./components/Dialog.vue"
import Spinner from "./components/Spinner.vue"
import VueOption from "./components/VueOptions.vue"
import MainLogo from "./components/logo.vue"
import axios from 'axios';


axios.defaults.baseURL = 'https://zena-api-dev.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:8080/api'
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import VueApexCharts from "vue3-apexcharts";

// globally call 
createApp(App)
    .component('BaseCard', BaseCard)
    .component('BaseBtn', BaseBtn)
    .component('Dialog', Dialog)
    .component('Spinner', Spinner)
    .component('VueOption',VueOption)
    .component('MainLogo',MainLogo)
    .use(PerfectScrollbar)
    .use(VueApexCharts)
    .use(store)
    .use(router)
    .mount('#app')
