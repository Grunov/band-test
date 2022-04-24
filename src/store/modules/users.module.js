import UsersService from "@/services/users.service";

export default {
    namespaced: true,
    state: () => ({
        user: null,
    }),
    mutations: {
        _setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async fetchRandomUser({commit}) {
            try {
                const response = await UsersService.getRandomUser();
                commit('_setUser', response.data);
            }
            catch(error) {
                console.log(error);
            }
        }
    },
    getters: {
        user: (state) => state.user
    }
}