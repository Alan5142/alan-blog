<template>
  <v-container>
    <v-col cols="12">
      <v-row
        class="mb-6"
        v-for="post in posts"
        :key="post.attributes.title"
        justify="center"
      >
        <v-card
          class="card-size pd-6"
          elevation="10"
        >
          <nuxt-link :to="getPermalink(post)">
            <v-img
              class="white--text align-end"
              height="200px"
              :max-width="maxImageWidth"
              :src="post.attributes.picture"
            >
              <v-card-title>{{ post.attributes.title }}</v-card-title>
            </v-img>
          </nuxt-link>
          <v-card-subtitle class="pb-0">
            <v-avatar height="38px" width="38px">
              <img
                src="https://pbs.twimg.com/profile_images/1144098094243635201/PtlO7H7S_200x200.png"
                alt="Alan"
              >
            </v-avatar>
            <v-icon>mdi-calendar</v-icon>
            {{ getDate(post) }} <v-icon>mdi-clock</v-icon>{{ post.attributes.hour }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ post.attributes.path }}</div>
            <div style="text-align: justify">{{ post.attributes.excerpt }}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-bottom-sheet v-model="sheet">
              <template v-slot:activator="{ on }">
                <v-btn
                  color="purple"
                  dark
                  icon
                  v-on="on"
                >
                  <v-icon color="primary">
                    mdi-share-variant
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-subheader>{{ $t('share') }}</v-subheader>
                <v-list-item :href="'http://www.facebook.com/sharer.php?u=' + getOrigin() + getPermalink(post)" target="_blank">
                  <v-list-item-avatar>
                    <v-avatar size="32px">
                      <img src="/facebook_logo.png">
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-title>Facebook</v-list-item-title>
                </v-list-item>
                <v-list-item :href="'https://twitter.com/share?url=' + getOrigin() + getPermalink(post) + `&text=${post.attributes.title}`" target="_blank">
                  <v-list-item-avatar>
                    <v-avatar size="48px">
                      <img src="/twitter_logo.png" alt="twitter">
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-title>Twitter</v-list-item-title>
                </v-list-item>
                <v-list-item :href="'whatsapp://send?text=' + getOrigin() + getPermalink(post)" target="_blank" data-action="share/whatsapp/share">
                  <v-list-item-avatar>
                    <v-avatar size="32px">
                      <img width="32px" height="32px" src="/whatsapp_logo.svg" alt="whatsapp">
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-title>Whatsapp</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-bottom-sheet>

            <v-btn
              color="primary"
              text
              :to="getPermalink(post)"
            >
              {{ $t('read') }} 👀
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<style>
  a {
    text-decoration: none;
  }
  a.nostyle:link {
    text-decoration: inherit;
    color: inherit;
  }

  a.nostyle:visited {
    text-decoration: inherit;
    color: inherit;
  }

  .card-size {
    width: 600px;
  }

  @media screen and (max-width: 959px) {
    .card-size {
      width: 100%;
    }
  }
</style>

<script>

export default {
  async asyncData () {
    const resolve = await require.context('~/content/blog', true, /\.md$/)
    const imports = resolve.keys().map((key) => {
      const [, name] = key.match(/\/(.+)\.md$/)
      return resolve(key)
    })
    return {
      posts: imports.reverse(),
      sheet: false
    }
  },
  computed: {
    maxImageWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '100%'
        case 'sm':
          return '100%'
        case 'md':
          return '600px'
        case 'lg':
          return '600px'
        case 'xl':
          return '750px'
      }
    }
  },
  methods: {
    getDate (post) {
      const month = `${post.attributes.month}`.padStart(2, '0')
      const day = `${post.attributes.day}`.padStart(2, '0')
      return `${post.attributes.year}/${month}/${day}`
    },
    getOrigin () {
      return 'https://alan5142.github.io'
    },
    getPermalink (post) {
      return `/blog/${post.meta.resourcePath.split('\\').pop().split('/').pop().split('.')[0]}`
    }
  }
}
</script>
