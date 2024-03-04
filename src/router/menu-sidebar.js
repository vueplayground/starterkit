import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [{
        label: 'Group 1',
        icon
    },
    {
        label: 'More',
        children: [{
                label: 'Group A',
            },
            {
                label: 'Videos',
                route: '/videos',
            },
            {
                label: 'Group B',
            },
            {
                label: 'Products',
                route: '/products',
            },
            {
                label: 'Categories',
                route: '/categories',
            },
            {
                label: '404 Not Found',
                route: '/hello-world',
            }
        ]
    },
    {
        label: 'Group 3',
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