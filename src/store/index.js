import { getMembers, getToken } from "../../services/services";

import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      token: "",
      members: [],
    };
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload || "";
    },
    setMembers(state, payload) {
      state.members = payload || [];
    },
  },
  actions: {
    async getTokenAPI({ commit }) {
      let token = "";

      token = await getToken();

      commit("setToken", token);
    },

    async getMembersData({ commit }) {
      let members = await getMembers(this.state.token);

      commit("setMembers", members);
    },
  },
});

export default store;
