import Vue from "vue";
import Vuex from "vuex";
// import { getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

Vue.use(Vuex);


const store = new Vuex.Store ({
    state: {
        username: '',
        token: '',
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state, username) {
            state.username = '';
        },
        setToken(state, token) {
            state.token = token;
        },
        clearToken(state) {
            state.token = '';
        },
    }
});


export default store;
