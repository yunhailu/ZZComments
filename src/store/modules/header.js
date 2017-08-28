const state = {
    tabIndex: '1'
};

const mutations = {
    TAB_INDEX (state, data) {
        state.tabIndex = data;
    }
};

const actions = {
    changeTabIndex ({commit}, data) {
        commit('TAB_INDEX', data);
    }
};

const getters = {
    tabIndex: state => state.tabIndex
};

export default {
    state,
    mutations,
    actions,
    getters
};