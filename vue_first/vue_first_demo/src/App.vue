<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vue_wg Logo"
          class="shrink mr-2"
          contain
          src="./files/wg.jpg"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Project Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./files/wg.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/testroute/vue"
        target="_blank"
        text
      >
        <span class="mr-2">SOURCE</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <!-- <v-main>
      <HelloWorld/>
    </v-main>  -->
    <v-main>
      <router-view>
        
      </router-view>
    </v-main>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
