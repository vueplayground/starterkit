import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [{
        label: 'Home',
        route: '/',
        icon
    },
    {
        label: 'Example Pages',
        children: [{
                label: 'Blog',
                route: '/blog',
            },
            {
                label: 'Videos',
                route: '/videos',
            },
            {
                label: 'Categories',
                route: '/categories',
            },
            {
                label: 'Products',
                route: '/products',
            },
            {
                label: '404',
                route: '/404',
            }
        ]
    },
    {
        label: `External URL's`,
        children: [{
            label: 'vueplay.com',
            route: 'https://vueplay.com',
            external: true
        }, {
            label: `More`,
            children: [{
                    label: 'vuejs.org',
                    route: 'https://vuejs.org',
                    external: true
                },

            ]
        }]
    },
    {
        label: 'Contact',
        route: '/contact'
    },
]