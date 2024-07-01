import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activeSlug: localStorage.getItem('activeSlug') || 'inicio',
    },
    mutations: {
        setActiveSlug(state, slug) {
            state.activeSlug = slug;
            localStorage.setItem('activeSlug', slug);
        },
    },
    actions: {
        setActiveSlug({ commit }, slug) {
            commit('setActiveSlug', slug);
        },
    },
});
