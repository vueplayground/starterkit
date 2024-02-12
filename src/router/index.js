import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        path: '/',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/about',
        component: () => import('@/views/AboutView.vue')
    },
    {
        path: '/articles',
        component: () => import('@/views/ArticlesView.vue')
    },
    {
        path: '/articles/:id',
        component: () => import('@/views/ArticleView.vue'),
        props: true
    },
    {
        path: '/blog',
        component: () => import('@/views/BlogListView.vue')
    },
    {
        path: '/blog/:id',
        component: () => import('@/views/BlogPostView.vue'),
        props: true
    },
    {
        path: '/contact',
        component: () => import('@/views/ContactView.vue')
    },
    {
        path: '/profile',
        component: () => import('@/views/UserProfileView.vue')
    },
    {
        path: '/auth/:action?',
        component: () => import('@/views/AuthenticationViews.vue'),
        props: true
    },
    {
        path: '/search/:term?',
        component: () => import('@/views/SearchResultsView.vue'),
        props: true
    },
    {
        path: '/categories',
        component: () => import('@/views/CategoryListView.vue')
    },
    {
        path: '/terms-of-service',
        component: () => import('@/views/TermsOfServiceView.vue')
    },
    {
        path: '/privacy-policy',
        component: () => import('@/views/PrivacyPolicyView.vue')
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('@/views/404ErrorView.vue'),
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