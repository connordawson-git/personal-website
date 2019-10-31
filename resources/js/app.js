
require('./bootstrap');
// Import all required plugins
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
  }
});

Vue.use(VueRouter);

import App from './views/App'
import Home from './views/Home'
import ContactUs from './views/ContactUs'
import NotFound from './views/NotFound'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contactUs',
            name: 'contactUs',
            component: ContactUs
        },
        {
          path: '/notFound',
          component: NotFound
        },
    ],
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
  	next('/notFound');
  } else {
  	next();
  }
})

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
