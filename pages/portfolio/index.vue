<template>
  <v-container class="pl-0 pr-0">
    <v-col cols="12" class="pl-1 pr-1">
      <v-row justify="center">
        <h1 style="text-align: center; font-size: 2.5em">
          Mis proyectos 💻
        </h1>
      </v-row>

      <v-row
        v-for="project in projects"
        :key="project.name"
        justify="center"
      >
        <v-card
          class="card mb-8"
          elevation="10"
        >
          <v-card-title>
            <v-carousel
              v-if="project.pictures.length > 0"
              cycle
              hide-delimiter-background
              :show-arrows="project.pictures.length > 1"
              height="auto"
            >
              <v-carousel-item
                v-for="(picture, i) in project.pictures"
                :key="i"
                eager
              >
                <v-img :src="picture" eager contain />
              </v-carousel-item>
            </v-carousel>
            {{ project.name }}
          </v-card-title>
          <v-card-subtitle class="pb-0">
            <v-icon>mdi-calendar</v-icon>
            <span class="mr-3">{{ project.year }}</span>

            <v-avatar v-for="lang in project.technology" :key="lang" class="mr-1" size="24px">
              <img
                :src="logoUrl(lang)"
                :alt="lang"
              >
            </v-avatar>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ project.description }}</div>
            <div v-if="project.additionalDescription !== undefined">
              {{ project.additionalDescription }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn v-if="project.github !== undefined" outlined color="white" :href="project.github" target="_blank">
              GitHub
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row justify="center">
        <h2>Contribuciones open source</h2>
      </v-row>
      <v-row v-for="contribution in openSourceContributions" :key="contribution.name + contribution.github" justify="center">
        <v-card
          class="card mb-8"
          elevation="10"
        >
          <v-card-title>
            {{ contribution.name }}
          </v-card-title>
          <v-card-subtitle class="pb-0">
            <v-avatar v-for="lang in contribution.technology" :key="lang" class="mr-1" size="24px">
              <img
                :src="logoUrl(lang)"
                :alt="lang"
              >
            </v-avatar>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ contribution.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn outlined color="white" :href="contribution.github" target="_blank">
              GitHub
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<style>
  .card {
    width: 600px;
  }

  @media screen and (max-width: 959px) {
    .card {
      width: 100%;
    }
  }
</style>

<script>
export default {
  data () {
    return {
      projects: [
        {
          name: 'FooEngine [WIP]',
          year: '????',
          description: 'Motor gráfico hecho en C++20 junto con API gráficas modernas como Direct3D12 y Vulkan.',
          pictures: [
            '/images/portfolio/fe.png'
          ],
          technology: [
            'cpp'
          ]
        },
        {
          name: 'Kingdom Madness',
          year: 2020,
          description: 'Kingdom Madness es un videojuego por turnos inspirado en Pokémon y en Final Fantasy, ' +
              'fue desarrollado por un servidor y por Luis Gabriel Hernández Hernández, desarrollado en C y muy poco C++.',
          pictures: [
            '/images/portfolio/km.png',
            '/images/portfolio/km2.png',
            '/images/portfolio/km3.png',
            '/images/portfolio/km4.png'
          ],
          technology: [
            'c',
            'cpp'
          ],
          github: 'https://github.com/Alan5142/Kingdom-Madness'
        },
        {
          name: 'nanoid-cpp',
          year: 2020,
          description: 'Implementación de nanoid en C++',
          pictures: [
          ],
          technology: [
            'cpp'
          ],
          github: 'https://github.com/Alan5142/nanoid-cpp'
        },
        {
          name: 'MaxOrg',
          year: 2019,
          description: 'Sistema para la administración de proyectos relacionados al software, contiene integración de ' +
              'GitHub para visualizar código, Azure DevOps, chat en tiempo real, administración y creación de subequipos ' +
              'de trabajo, asignación de actividades, sección estilo foro con edición en markdown, entre otras cosas.',
          pictures: [
            '/images/portfolio/maxorg.png',
            '/images/portfolio/maxorg2.png',
            '/images/portfolio/maxorg3.png',
            '/images/portfolio/maxorg4.png',
            '/images/portfolio/maxorg5.png',
            '/images/portfolio/maxorg6.png',
            '/images/portfolio/maxorg7.png',
            '/images/portfolio/maxorg8.png',
            '/images/portfolio/maxorg9.png',
            '/images/portfolio/maxorg10.png',
            '/images/portfolio/maxorg11.png',
            '/images/portfolio/maxorg12.png'
          ],
          technology: [
            'csharp',
            'typescript',
            'angular'
          ],
          github: 'https://github.com/Alan5142/MaxOrg'
        }
      ],
      openSourceContributions: [
        {
          name: 'EASTL',
          description: 'Corrección de bugs en eastl::string_view en contextos constexpr',
          github: 'https://github.com/electronicarts/EASTL',
          technology: [
            'cpp'
          ]
        },
        {
          name: 'Arangoclient.net',
          description: 'Corrección de bugs en expresiones condicionales en consultas LINQ',
          github: 'https://github.com/ra0o0f/arangoclient.net',
          technology: [
            'csharp'
          ]
        }
      ]
    }
  },
  methods: {
    logoUrl (logo) {
      switch (logo) {
        case 'c':
          return '/images/c-logo.png'
        case 'cpp':
          return '/images/cpp-logo.png'
        case 'csharp':
          return '/images/csharp-logo.png'
        case 'typescript':
          return '/images/typescript-logo.png'
        case 'angular':
          return '/images/angular-logo.png'
      }
      return ''
    }
  }
}
</script>

<style scoped>

</style>
