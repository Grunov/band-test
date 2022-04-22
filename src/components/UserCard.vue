<template>
  <div class="user-card">
    <div class="user-card__image">
      <img 
        :src="user.avatar" 
        alt="">
    </div>
    <h1 class="user-card__title">
      {{ user.first_name }} {{ user.last_name }}, {{ currentAge }}  years old
    </h1>
    <div class="user-card__employment">
      <div class="user-card__employment-title">
        {{user.employment.title}}
      </div>
      <span class="user-card__employment-description">
        {{user.employment.key_skill}}
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentAge() {
      return ((new Date().getTime() - new Date(this.$props.user.date_of_birth)) / (24 * 3600 * 365.25 * 1000)) | 0;
    }
  }
};
</script>

<style lang="scss" scoped>
  .user-card {
    padding-bottom: 30px;
    
    &__image {
      max-width: 280px;
      margin: 0 auto;
      overflow: hidden;
      border-radius: 100%;

      img {
        display: block;
      }
    }

    &__employment-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
    }

    &__employment-description {
      display: block; 
      font-size: 18px;
      text-transform: uppercase;
    }
  }
</style>