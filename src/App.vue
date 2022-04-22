<template>
  <div id="app">
    <user-card :user="user" />
    <hr>
    <random-beer :beer="beer" :handler="fetchRandomBeer" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
       user: 'user',
       beer: 'currentBeer'
    }),
  },
  methods: {
   ...mapActions({
       fetchRandomUser: 'fetchRandomUser',
       fetchRandomBeer: 'fetchRandomBeer'
   })
  },
  components: {
    UserCard,
    RandomBeer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
