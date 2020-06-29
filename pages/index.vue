<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          justify="center"
        >
          <v-avatar size="256px">
            <v-img contain src="/me.png" />
          </v-avatar>
        </v-row>
        <v-row justify="center">
          <h1 style="text-align: center">
            ✌ ¡Hola, me llamo Alan Ramírez Herrera!
          </h1>
        </v-row>
        <v-row justify="center">
          <p style="text-align: justify">
            Tengo 19 años y soy estudiante de ingeniería en sistemas computacionales 💻
          </p>
        </v-row>
        <v-row justify="center">
          <p style="text-align: justify">
            Me encanta programar 👨‍💻, ver anime 📺 y jugar videojuegos 🎮
          </p>
        </v-row>
        <v-row justify="center">
          <p style="text-align: justify">
            Programo principalmente en C++, C# y TypeScript
          </p>
        </v-row>
        <v-row align="center" justify="center">
          <h1>
            👉
          </h1>
          <v-btn color="#1178f2" outlined href="https://www.facebook.com/alan.ramirezherrera.9" target="_blank">
            Facebook
          </v-btn>

          <v-btn color="#1da1f2" outlined href="https://twitter.com/Alan5142" target="_blank">
            Twitter
          </v-btn>
          <v-btn color="white" outlined href="https://github.com/Alan5142/" target="_blank">
            GitHub
          </v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn outlined color="primary" href="mailto:alan5142@hotmail.com?Subject=¡Hola!" target="_blank">
            ¡Enviame un Email✉!
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  .space-container {
    margin-left: 10%;
    margin-right: 3%;
  }

</style>

<script>
export default {
  head () {
    return {
      title: 'Inicio',
      meta: [
        { property: 'og:title', content: 'Inicio' },
        { property: 'og:image', content: 'https://alan5142.github.io/me.png' },
        { property: 'og:description', content: 'Alan Ramírez Herrera' }
      ]
    }
  }
}
</script>
