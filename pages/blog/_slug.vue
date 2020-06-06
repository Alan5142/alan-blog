<template>
  <v-content class="pt-1">
    <v-col cols="12" class="pt-0">
      <v-img gradient="180deg, rgba(1,1,1,0) 0%, rgba(23,26,30,0.8) 90%, rgba(23,26,30,1) 100%" :src="attributes.picture" max-height="500px">
        <v-container class="max-size">
          <v-row class="max-size" align="end" justify="start">
            <v-avatar class="mr-2" height="38px" width="38px">
              <img
                src="https://pbs.twimg.com/profile_images/1144098094243635201/PtlO7H7S_200x200.png"
                alt="John"
              >
            </v-avatar>
            <v-icon>mdi-calendar</v-icon>
            <span class="mr-2">{{ date }}</span>
            <v-icon>
              mdi-clock
            </v-icon>
            <span>{{ attributes.hour }}</span>
            <v-spacer></v-spacer>
            <span v-if="attributes.picture_attribution !== undefined">
              Imagen en dominio público por {{attributes.picture_attribution}}
            </span>
          </v-row>
        </v-container>
      </v-img>
    </v-col>
    <v-col cols="12">
      <h1 class="content" style="font-size: 4em">
        {{ attributes.title }}
      </h1>
    </v-col>

    <v-row class="content">
      <div v-html="html" />
    </v-row>

    <v-col cols="12">
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
  }

  @media screen and (max-width: 959px) {
    .content {
      margin-left: 0%;
      margin-right: 0;
    }
  }
</style>

<script>
import 'prismjs/plugins/line-numbers/prism-line-numbers.min'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default {
  async asyncData ({ params }) {
    try {
      const post = await import(`~/content/blog/${params.slug}.md`)
      const month = `${post.attributes.month}`.padStart(2, '0')
      const day = `${post.attributes.day}`.padStart(2, '0')
      return {
        attributes: post.attributes,
        html: post.html,
        date: `${post.attributes.year}/${month}/${day}`
      }
    } catch (error) {
      return false
    }
  }
}
</script>
