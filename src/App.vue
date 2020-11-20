<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <router-link :to="{name: 'Home'}" class="mylink" >Home</router-link>
        <router-link :to="{ name: 'Heaven' }" class="mylink">Heaven</router-link>
        <router-link :to="{ name: 'GraphView' }" class="mylink">GraphView</router-link>
        <router-link :to="{ name: 'About' }" class="mylink">About</router-link> 
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home
  },

  data: () => ({
      //
  }),
};
</script>


<style>
.mylink{
  margin: 5px;
  color: rgb(29, 28, 28) !important;
  text-decoration-line: none !important;
}
</style>
