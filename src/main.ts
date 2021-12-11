import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import './styles/quasar.scss'
import lang from 'quasar/lang/ro.js'
import '@quasar/extras/material-icons/material-icons.css'

const quasarUserOptions={
    config: {},
    plugins: {
    },
    lang: lang

}

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
