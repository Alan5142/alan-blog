import path from 'path'
import colors from 'vuetify/es5/util/colors'
import glob from 'glob'
import * as Mode from 'frontmatter-markdown-loader/mode'
import markdownIt from 'markdown-it'

import markdownItPrism from 'markdown-it-prism'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItCollapsible from 'markdown-it-collapsible'
import markdownItGithubHeadings from 'markdown-it-github-headings'
import markdownItNamedHeadings from 'markdown-it-named-headings'

import 'prismjs/components/prism-clike.min'
import './prism-c'
import './prism-cpp'
import 'prismjs/components/prism-csharp.min'
import 'prismjs/components/prism-typescript.min'
import 'prismjs/components/prism-rust.min'
import 'prismjs/components/prism-arduino.min'
import 'prismjs/components/prism-sql.min'
import 'prismjs/components/prism-cmake.min'
import 'prismjs/components/prism-powershell.min'
import 'prismjs/components/prism-toml.min'

import { translations } from './translations'

const files = glob.sync('**/*.md', { cwd: 'content/blog' })

function getSlugs (post, _) {
  const slug = post.substr(0, post.lastIndexOf('.'))
  return `/blog/${slug}`
}

export default {
  mode: 'universal',
  generate: {
    routes: files.map(getSlugs)
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
      { rel: 'stylesheet', href: 'prismjs/themes/prism.css' },
      { rel: 'stylesheet', href: '~static/prism-vsc-dark-plus.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', {
      id: 'UA-171808074-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        // locales: ['en', 'es'],
        locales: ['es'],
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: translations
        }
      }
    ]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.amber.darken3,
          accent: colors.grey.darken3,
          secondary: colors.blue.darken2,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.HTML, Mode.META],
          markdownIt: markdownIt({ html: true })
            .use(markdownItNamedHeadings)
            .use(markdownItPrism)
            .use(markdownItAttrs)
            .use(markdownItCollapsible)
            .use(markdownItGithubHeadings)
        }
      })
    }
  }
}
