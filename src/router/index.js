import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcart = () => import('../views/shopcart/Shopcart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const login = () => import('../views/profile/childComps/login')
const register =() => import('../views/profile/childComps/register')
//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/category',
        component: Category
    },
    {
        path:'/shopcart',
        component: Shopcart
    },
    {
        name:'profile',
        path:'/profile',
        component: Profile
    },
    {
        path:'/detail/:iid',
        component: Detail
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/register',
      component:register
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
      router.replace(targetPath);
    }
});

export default router
