<template>
  <v-content>
    <v-img gradient="180deg, rgba(1,1,1,0) 0%, rgba(23,26,30,0.8) 90%, rgba(23,26,30,1) 100%" :src="attributes.picture" max-height="500px">
      <v-container class="max-size">
        <v-row class="max-size content" align="end" justify="start">
          <v-icon>mdi-calendar</v-icon>
          <span class="mr-2">{{ date }}</span>
          <v-icon>
            mdi-clock
          </v-icon>
          <span>{{ attributes.hour }}</span>
        </v-row>
      </v-container>
    </v-img>
    <v-col cols="12">
    
      <span v-if="attributes.picture_attribution !== undefined" class="content" style="font-size: 0.8em">
        Imagen en dominio público por {{ attributes.picture_attribution }}
      </span>
      <h1 class="content" style="font-size: 3em; overflow-wrap: break-word; hyphens: none">
        {{ attributes.title }}
      </h1>
    </v-col>

    <v-col cols="12" style="overflow-wrap: break-word">
      <div class="content" v-html="html" />
    </v-col>

    <v-col cols="12">
      <h1 class="content">
        Comentarios
      </h1>
      <no-ssr>
        <script
          src="https://utteranc.es/client.js"
          repo="Alan5142/Alan5142UtterancesComments"
          issue-term="pathname"
          theme="github-dark"
          crossorigin="anonymous"
          async
        />
      </no-ssr>
    </v-col>
  </v-content>
</template>

<style scoped>
  .max-size {
    width: 100%;
    height: 100%;
  }

  .content {
    margin-left: 20%;
    margin-right: 20%;
    overflow-wrap: break-word
  }

  @media screen and (max-width: 767px) {
    .content {
      margin-left: 0%;
      margin-right: 0;
    }
  }
</style>

<script>
import 'prismjs/plugins/line-numbers/prism-line-numbers.min'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/command-line/prism-command-line.min'
import 'prismjs/plugins/command-line/prism-command-line.css'
import 'static/prism-vsc-dark-plus.css'

export default {
  async asyncData ({ params }) {
    try {
      const post = await import(`~/content/blog/${params.slug}.md`)
      const month = `${post.attributes.month}`.padStart(2, '0')
      const day = `${post.attributes.day}`.padStart(2, '0')
      return {
        slug: params.slug,
        attributes: post.attributes,
        html: post.html,
        date: `${post.attributes.year}/${month}/${day}`
      }
    } catch (error) {
      return false
    }
  },
  head () {
    return {
      title: this.attributes.title,
      meta: [
        { property: 'og:title', content: this.attributes.title },
        { property: 'og:image', content: `https://alan5142.github.io${this.attributes.picture}` },
        { property: 'og:description', content: `${this.attributes.excerpt}` },
        { property: 'og:locale', content: 'es_MX' },
        { property: 'og:url', content: `https://alan5142.github.io/blog/${this.slug}` },
        { property: 'og:type', content: 'article' }
      ]
    }
  }
}
</script>
