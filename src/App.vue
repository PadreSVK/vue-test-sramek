<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-tabs>
        <v-tab :to="{ name: 'Home' }">Home</v-tab>
        <v-tab :to="{ name: 'TableView' }">TableView</v-tab>
        <v-tab :to="{ name: 'GraphView' }">GraphView</v-tab>
        <v-tab :to="{ name: 'About' }">About</v-tab>
      </v-tabs>

      <!-- <div class="d-flex align-center">
        <router-link :to="{ name: 'Home' }" class="mylink">Home</router-link>
        <router-link :to="{ name: 'TableView' }" class="mylink">TableView</router-link>
        <router-link :to="{ name: 'GraphView' }" class="mylink">GraphView</router-link>
        <router-link :to="{ name: 'About' }" class="mylink">About</router-link>
      </div> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {

  components: {
  },

  data: () => ({
    //
  }),
};
</script>


<style>
#app > div > header > div > a .v-application .mylink {
  margin: 5px;
  color: rgb(22, 21, 21);
  text-decoration-line: none;
}
</style>
