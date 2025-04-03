import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KiTools",
  description: "实用的小工具合集",
  appearance: "dark",

  base: '/site/',
  outDir: '../docs',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '小工具合集',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
          { text: '清单', link: '/list' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kitools' }
    ]
  }
})
