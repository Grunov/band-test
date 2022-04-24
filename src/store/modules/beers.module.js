import BeersService from "@/services/beers.service";

export default {
    namespaced: true,
    state: () => ({
        beer: null,
        status: 'listen'
    }),
    mutations: {
        _setStatus(state, status) {
            state.status = status;
        },
        _setBeer(state, payload) {
            state.beer = payload;
        }
    },
    actions: {
        async fetchRandomBeer({commit}) {
            commit('_setStatus', 'request');
            try {
                const response = await BeersService.getRandomBeer();
                commit('_setStatus', 'success');
                commit('_setBeer', response.data);
            }
            catch(error) {
                commit('_setStatus', 'error');
                console.log(error);
            }
        }
    },
    getters: {
        currentBeer: (state) => state.beer,
        status: (state) => state.status
    }
}