import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import shop from '@/components/shop'
import product from '@/components/product'
import test from '@/components/test'
import About from '@/components/About'
import Help from '@/components/Help'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/test/:id',
      name: 'test',
      component: test ,
      props: true
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/Help',
      name: 'Help',
      component: Help,
    }
  ]
})
