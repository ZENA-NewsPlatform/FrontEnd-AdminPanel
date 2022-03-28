import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import store from '../store'
import SignIn from '../views/sessions/SignIn.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layout/index.vue'),
        redirect: '/dashboards/dashboard-version-one',
        meta: {
            title: 'Home',
        },

        children: [
            {
                path: '/dashboards',
                name: 'Dashboards',
                component: () => import('../views/dashboards/index.vue'),
                meta: {
                    title: 'Dashboard',
                },
                children: [
                    {
                        path: 'dashboard-version-one',
                        name: 'dashboard-version-one',
                        component: () =>
                            import('../views/dashboards/Dashboards.v1.vue'),
                    },
                ],
            },
            {
                path:'/management',
                name:'management',
                component: () =>import('../views/management/index.vue'),
                meta:{
                    title: 'management'
                },
                children: [
                    {
                        path:'publisher',
                        name:'publisher',
                        component: () => import('../views/management/publisher.vue')
                    },
                    {
                        path:'visitor',
                        name:'visitor',
                        component: () => import('../views/management/visitor.vue')
                    }, {
                        path:'editor',
                        name:'editor',
                        component: () => import('../views/management/editor.vue')
                    },
                ]

            },
            
            {
                path: '/profile',
                name: 'profile',
                component: () => import('../views/profile/index.vue'),
                meta: {
                    title: 'Profile',
                },
                children: [
                    {
                        path: 'adminProfile',
                        name: 'Profile',
                        component: () =>
                            import('../views/profile/Profile.vue'),
                    },
                ],
            },
        ],
    },

    { path: '/signIn', component: SignIn },


    { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 }
    },
    routes,
})

router.afterEach(() => {
    if (window.innerWidth <= 1200) {
        const sidenav =
            store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen

        store.commit('largeSidebar/toggleSidebarProperties')
    }
})

export default router
