import Vue from 'vue'
import { Plugin } from 'vue-fragment'

import App from '../vue/app.vue'

Vue.use(Plugin)

new Vue({ render: createElement => createElement(App) }).$mount('#app')
