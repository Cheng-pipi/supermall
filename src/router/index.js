/**
 * Created by CR on 2020/10/8.
 */
import vue from 'vue'
import router from 'vue-router'

vue.use(router)

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/catagory/Category')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/catagory',
    component: Category
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  }
]

const route = new router({
  routes,
  mode: 'history'
})

export default route
