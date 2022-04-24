<template>
    <div class="random-beer">
        <h2 class="random-beer__title">
            Пиво дня: 
        </h2>
        <app-preloader 
         v-if="requestStatus !== 'success'" 
         class="random-beer__preloader"
        />
        <template v-if="requestStatus === 'success'">
            <div class="random-beer__card">
                <div class="random-beer__brand">
                    {{ beer.brand }}
                </div>
                <div class="random-beer__name">
                    {{ beer.name }}
                </div>
            </div>
            <button class="random-beer__random" @click="handler">
                Посмотреть другое
            </button>
        </template>
    </div>
</template>

<script>
import AppPreloader from '@/components/AppPreloader.vue'

export default {
    name: 'RandomBeer',
    props: {
        beer: {
            type: Object,
            required: true
        },
        requestStatus: {
            type: String
        },
        handler: {
            type: Function,
            required: true
        }
    },
    components: {
        AppPreloader
    }
}
</script>

<style lang="scss" scoped>
    .random-beer {
        position: relative;
        min-height: 250px;
        padding-bottom: 30px;
        
        &__preloader {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        &__brand {
            text-transform: uppercase;
            font-size: 18px;
            margin-bottom: 15px;
        }

        &__name {   
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        &__random {
            color: #fff;
            background-color: peru;
            border: none;
            border-radius: .25rem;
            padding: 10px 15px;
            cursor: pointer;

            &:hover, &:focus {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.192);
            }

            &:active {
                &:hover, &:focus {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            }
        }
    }
</style>