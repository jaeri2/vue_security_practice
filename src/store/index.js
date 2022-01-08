import Vue from "vue";
import Vuex from "vuex";
// import { getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';
import { getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie } from '@/utils/cookies'
import { loginUser } from '@/api/auth';

Vue.use(Vuex);


export default new Vuex.Store ({
    state: {
        username: getUserFromCookie() || '',
        token: getAuthFromCookie() || '',
    },
    getters: {
        isLogin(state) {
            return state.username !== '';
        },
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
    },
    actions: {
        async LOGIN({ commit }, userData) {
            const { data } = await loginUser(userData);
            console.log(data.user.username);
            commit('setToken', data.token);
            commit('setUsername', data.user.username);
            saveAuthToCookie(data.token);
            saveUserToCookie(data.user.username);
            return data;
        },
    },
});
