//配置路由相关信息
import VueRouter from "vue-router"
import Vue from "vue"

const home = () => import("@/views/home/home")
const fenlei = () => import("@/views/fenlei/fenlei")
const user = () => import("@/views/user/user")
const shop = () => import("@/views/shop/shop")
/* 
import MainTab from "@/components/content/MainTabbar" */
//1.通过vue.use()插件，安装
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
	  {
			path:"/",
			//重定向
			redirect:"/home"
		},
    {
			path:"/home",
			component:home
		},
		{
			path:"/fenlei",
			component:fenlei
		},
		{
			path:"/user",
			component:user
		},
		{
			path:"/shop",
			component:shop
		}
]
const router = new VueRouter({
	//配置路由和组件之间的关系
	routes,
	mode:"history",
	linkActiveClass:"active"
})

//3.将router对象传入到Vue实例中
export default router


/* import Vue from 'vue'  //配置路由相关信息
import Router from 'vue-router'

Vue.use(Router)  //1.通过vue.use()插件，安装


//2.创建VueRouter对象
export default new Router({  //3.将router对象传入到Vue实例中
		//配置路由和组件之间的关系
  routes: [
    {
    
    }
  ]
}) */