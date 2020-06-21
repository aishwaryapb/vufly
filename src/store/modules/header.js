const state = () => ({
    menuOpen: false
})

// actions
const actions = {
    toggleMenu({ commit }) {
        commit('toggleMenu')
    }
}

// mutations
const mutations = {
    toggleMenu(state) {
        state.menuOpen = !state.menuOpen
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}