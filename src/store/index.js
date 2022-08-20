import { createStore } from "vuex";
import { getToken } from "../../services/services";

const store = createStore({
  state() {
    return {
      token: "",
    };
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload || "";
    },
  },
  actions: {
    async getTokenAPI({ commit }) {
      let token = "";

      token = await getToken();

      commit("setToken", token);
    },
  },
});

export default store;
