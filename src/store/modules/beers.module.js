import BeersService from "@/services/beers.service";

export default {
    namespased: true,
    state: () => ({
        beer: null
    }),
    mutations: {
        _setBeer(state, payload) {
            state.beer = payload;
        }
    },
    actions: {
        async fetchRandomBeer({commit}) {
            try {
                const response = await BeersService.getRandomBeer();
                commit('_setBeer', response.data)
            }
            catch(error) {
                console.log(error);
            }
        }
    },
    getters: {
        currentBeer: (state) => state.beer
    }
}