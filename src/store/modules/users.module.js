import UsersService from "@/services/users.service"

export default {
    namespased: true,
    state: () => ({
        user: null
    }),
    mutations: {
        _setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async fetchRandomUser({commit}) {
            console.log('yo');
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