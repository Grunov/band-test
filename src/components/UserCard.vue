<template>
  <div class="user-card">
    <div class="user-card__image">
      <img 
        :src="isAvatarLoaded ? user.avatar : userDefaultAvatar" 
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
import axios from 'axios';
import userDefaultAvatar from '@/assets/images/user-avatar.jpg'

export default {
  name: "UserCard",
  data: () => ({
    isAvatarLoaded: false
  }),
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.userAvatarStatus(this.$props.user)
  },
  methods: {
    async userAvatarStatus(user) {
      console.log(user.avatar);
      try {
        const response = await axios.get(user.avatar);
        if(response.status === 200) {
          this.isAvatarLoaded = true
        }
      }
      catch(error) {
        console.log(error);
      }
    }
  },
  computed: {
    currentAge() {
      return ((new Date().getTime() - new Date(this.$props.user.date_of_birth)) / (24 * 3600 * 365.25 * 1000)) | 0;
    },
    userDefaultAvatar() {
      return userDefaultAvatar;
    }
  },
};
</script>

<style lang="scss" scoped>
  .user-card {
    padding: 30px 0;
    border-bottom: 1px solid #000;
    
    &__image {
      width: 180px;
      margin: 0 auto;
      overflow: hidden;
      border-radius: 100%;
      border: 1px solid #000;

      img {
        display: block;
        width: 100%;
        height: 100%;
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