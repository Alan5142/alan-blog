<template>
  <v-app-bar
    elevate-on-scroll
    elevation="24"
    app
    class="header"
  >
    <v-toolbar-title
      style="cursor:pointer"
      @click="
        $router.push('/')"
    >
      {{ $t('home') }}
    </v-toolbar-title>
    <v-spacer />

    <nuxt-link to="/blog" class="link">
      Blog
    </nuxt-link>
    <nuxt-link to="/portfolio" class="link">
      {{ $t('portfolio') }}
    </nuxt-link>
  </v-app-bar>
</template>

<style scoped>
  a, u {
    text-decoration: none;
  }
  .link {
    margin-right: 8px;
  }
</style>

<script>

export default {
}
</script>
