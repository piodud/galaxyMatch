import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Tinder from './components/Tinder.vue'
import Settings from './components/Settings.vue'
import Profile from './components/Profile.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
    {path: '/profile', component: Profile},
    {path: '/settings', component: Settings},
    {path: '/', component: Tinder},
];

const router = new VueRouter({
    routes
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

