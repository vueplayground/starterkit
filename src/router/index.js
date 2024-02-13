import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        path: '/',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/videos',
        component: () => import('@/views/Videos.vue')
    },
    {
        path: '/videos/:id',
        component: () => import('@/views/Video.vue')
    },
    {
        path: '/blog',
        component: () => import('@/views/Blog.vue')
    },
    {
        path: '/blog/:id',
        component: () => import('@/views/BlogPost.vue'),
        props: true
    },
    {
        path: '/product',
        component: () => import('@/views/ProductDetail.vue')
    },
    {
        path: '/products/:id',
        component: () => import('@/views/Products.vue'),
        props: true
    },
    {
        path: '/contact',
        component: () => import('@/views/Contact.vue')
    },
    {
        path: '/profile',
        component: () => import('@/views/UserProfile.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/search/:term?',
        component: () => import('@/views/SearchResult.vue'),
        props: true
    },
    {
        path: '/categories',
        component: () => import('@/views/Categories.vue')
    },
    {
        path: '/terms',
        component: () => import('@/views/Terms.vue')
    },
    {
        path: '/privacy',
        component: () => import('@/views/Privacy.vue')
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('@/views/NotFound.vue'),
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

export default router