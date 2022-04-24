<template>
  <div id="app" class="app">
    <app-preloader 
      v-if="!user"
      class="app__main-preloader" />
    <template v-if="user">
      <user-card :user="user" />
      <random-beer 
        v-if="beer"
        :beer="beer" 
        :request-status="beerRequestStatus"
        :handler="fetchRandomBeer" />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppPreloader from '@/components/AppPreloader.vue'
import UserCard from '@/components/UserCard.vue';
import RandomBeer from '@/components/RandomBeer.vue';

export default {
  name: 'App',
  mounted() {
    this.fetchRandomUser();
    this.fetchRandomBeer();
  },
  computed: {
   ...mapGetters({
       user: 'users/user',
       beer: 'beers/currentBeer',
       beerRequestStatus: 'beers/status'
    }),
  },
  methods: {
   ...mapActions({
       fetchRandomUser: 'users/fetchRandomUser',
       fetchRandomBeer: 'beers/fetchRandomBeer'
   })
  },
  components: {
    AppPreloader,
    UserCard,
    RandomBeer
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 15px;
  min-height: 100vh;

  &__main-preloader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
