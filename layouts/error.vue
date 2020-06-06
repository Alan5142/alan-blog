<template>
  <v-app dark>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <h1 style="font-size: 2.5em">(ノ°益°)ノ</h1>
      </v-row>
      <v-row justify="center">
        <h1>¡Vuelve a la página principal! 😀</h1>
      </v-row>
    </v-col>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
