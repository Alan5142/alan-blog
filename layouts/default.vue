<template>
  <v-app dark>
    <Navbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>

import Navbar from './Navbar'
import Footer from './Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>
