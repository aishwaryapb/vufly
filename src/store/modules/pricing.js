const state = () => ({
    selectedPlan: "free"
})

const actions = {
    selectPlan({ commit }, plan) {
        commit('selectPlan', plan)
    }
}

const mutations = {
    selectPlan(state, plan) {
        state.selectedPlan = plan;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}