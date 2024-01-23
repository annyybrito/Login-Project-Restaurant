import { createRouter, createWebHistory} from 'vue-router';
import LoginComponent from '../components/login-component/LoginComponent.vue';

const routes = [
    {
        path: '/',
        name: 'login-component',
        component: () => import('../components/login-component/LoginComponent')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
    LoginComponent
})

export default router;