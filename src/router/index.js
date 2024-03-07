import {createRouter,createWebHashHistory} from 'vue-router'
import crudHome from '../components/crudHome.vue'
import detailProfil from '../components/detailProfil.vue'
import editProfil from '../components/editProfil.vue'
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'/crudHome',
            component:crudHome
        },
        {
            path:'/detailProfil/:id',
            name:'detailProfil',
            component:detailProfil
        },
        {
            path:'/editProfil/:id',
            name:'editProfil',
            component:editProfil
        }
    ]
})
export default router