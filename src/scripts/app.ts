import Vue from 'vue'
import { Plugin } from 'vue-fragment'

import Blogs from '../vue/blogs.vue'
import Links from '../vue/links.vue'
import Socials from '../vue/socials.vue'

Vue.use(Plugin)

new Vue({ render: createElement => createElement(Links) }).$mount('#app-links')
new Vue({ render: createElement => createElement(Socials) }).$mount('#app-socials')
new Vue({ render: createElement => createElement(Blogs) }).$mount('#app-blogs')
