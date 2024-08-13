import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/bhh-docs/',
    title: "卞哈哈的文档",
    head: [
        ['link', {rel: 'icon', href: '/ico.png'}]  // 确保路径正确
    ],
    themeConfig: {
        //网站的logo
        logo: '/logo-mini.gif',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: '基础知识',
                collapsed: true, // 默认折叠
                items: [
                    {
                        text: 'HTML',
                        items: [
                            {text: '标签语法', link: '/docs/basics/html/syntax'},
                            {text: '表单与输入', link: '/docs/basics/html/forms'},
                            {text: '语义化标签', link: '/docs/basics/html/semantic'},
                            {text: 'SEO 优化', link: '/docs/basics/html/seo'},
                        ]
                    },
                    {
                        text: 'CSS',
                        items: [
                            {text: '选择器', link: '/basics/css/selectors'},
                            {text: '布局模型', link: '/basics/css/layout'},
                            {text: 'Flexbox', link: '/basics/css/flexbox'},
                            {text: 'Grid', link: '/basics/css/grid'},
                            {text: '动画与过渡', link: '/basics/css/animations'},
                        ]
                    },
                    {
                        text: 'JavaScript',
                        items: [
                            {text: '语法基础', link: '/basics/javascript/syntax'},
                            {text: 'DOM 操作', link: '/basics/javascript/dom'},
                            {text: '异步编程', link: '/basics/javascript/async'},
                            {text: 'ES6+ 新特性', link: '/basics/javascript/es6'},
                        ]
                    }
                ]
            },
            {
                text: '前端框架',
                collapsed: true, // 默认折叠
                items: [
                    {
                        text: 'Vue.js',
                        items: [
                            {text: '基础语法', link: '/docs/frameworks/vue/basic'},
                            {text: '组件开发', link: '/frameworks/vue/components'},
                            {text: 'Vuex 状态管理', link: '/frameworks/vue/vuex'},
                            {text: 'Vue Router 路由', link: '/frameworks/vue/router'},
                        ]
                    },
                    {
                        text: 'React',
                        items: [
                            {text: 'JSX 基础', link: '/frameworks/react/jsx'},
                            {text: '组件开发', link: '/frameworks/react/components'},
                            {text: 'React Hooks', link: '/frameworks/react/hooks'},
                            {text: 'Redux 状态管理', link: '/frameworks/react/redux'},
                        ]
                    },
                    {
                        text: 'Angular',
                        items: [
                            {text: 'TypeScript 基础', link: '/frameworks/angular/typescript'},
                            {text: '组件与模板', link: '/frameworks/angular/components'},
                            {text: '服务与依赖注入', link: '/frameworks/angular/services'},
                            {text: '路由与导航', link: '/frameworks/angular/routing'},
                        ]
                    }
                ]
            },
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024 - Bian Zhuang'
        }
    }
})
