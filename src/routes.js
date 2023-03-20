import hoMe from "./components/hoMe.vue";
import signUp from "./components/signUp.vue";
import loGin from "./components/loGin.vue"
import creAte from "./components/creAte.vue"
import viewTask from "./components/viewTask.vue"
import updAte from "./components/updAte.vue"
import adMin from "./components/adMin.vue"
import userData from "./components/userData.vue"
import taskData from "./components/taskData.vue"
import {createRouter, createWebHistory} from "vue-router"

const routes=[
    {
        name:"home",
        path:"/",
        component:hoMe
    },
    {
        name:"signup",
        path:"/signup",
        component:signUp
    },
    {
        name:"login",
        path:"/login",
        component:loGin
    },
    {
        name:"create",
        path:"/create",
        component:creAte
    },
    {
        name:"viewtask",
        path:"/viewtask",
        component:viewTask
    },
    {
        name:'update',
        path:"/update/:id",
        component:updAte
    },
    {
        name:'admin',
        path:'/admin',
        component:adMin
    },
    {
        name:'userData',
        path:'/userData',
        component:userData
    },
    {
        name:'taskData',
        path:'/taskData',
        component:taskData
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router