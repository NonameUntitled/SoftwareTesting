import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from "vue-router";
import Axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueRouter)

export const axiosInstance = Axios.create({
    baseURL: "http://localhost:3000"
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
