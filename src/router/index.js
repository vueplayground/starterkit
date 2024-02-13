import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        path: '/',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/about',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/videos',
        component: () => import('@/views/Videos.vue')
    },
    {
        path: '/articles/:id',
        component: () => import('@/views/Article.vue'),
        props: true
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
        path: '/contact',
        component: () => import('@/views/Contact.vue')
    },
    {
        path: '/profile',
        component: () => import('@/views/UserProfile.vue')
    },
    {
        path: '/auth/:action?',
        component: () => import('@/views/Login.vue'),
        props: true
    },
    {
        path: '/search/:term?',
        component: () => import('@/views/SearchResults.vue'),
        props: true
    },
    {
        path: '/categories',
        component: () => import('@/views/Categories.vue')
    },
    {
        path: '/terms-of-service',
        component: () => import('@/views/TermsOfService.vue')
    },
    {
        path: '/privacy-policy',
        component: () => import('@/views/PrivacyPolicy.vue')
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('@/views/404.vue'),
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