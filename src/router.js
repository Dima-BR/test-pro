import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/views/Home.vue');
const Products = () => import('@/views/Products.vue');
const Info = () => import('@/views/Info.vue');
const Cart = () => import('@/views/Cart.vue');
const ProductDetails = () => import('./Components/ProductDetails.vue')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetails,
    },
  ],
  mode: 'history'
})
