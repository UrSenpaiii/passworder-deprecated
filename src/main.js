import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import './scss/main.scss'
import store from "./store.js"

let vue = createApp(App)

let props = vue.config.globalProperties;
props.store = store;

vue.use(router).mount('#app');