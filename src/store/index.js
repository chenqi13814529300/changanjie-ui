import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginInfo: '',
    declarePooringList: [],
    declarePoorFailList: [],
    declarePoorSuccessList: []
  },
  getters: {
    getLoginInfo: (state) => state.loginInfo,
    getDeclarePooringList: (state) => state.declarePooringList,
    gettDeclarePoorFailList: (state) => state.declarePoorFailList,
    getDeclarePoorSuccessList: (state) => state.declarePoorSuccessList,
  },
  mutations: {
    setLoginInfo: (state, data) => {
      state.loginInfo = data
    },
    setDeclarePooringList: (state, data) => {
      state.declarePooringList = data
    },
    setDeclarePoorFailList: (state, data) => {
      state.declarePoorFailList = data
    },
    setDeclarePoorSuccessList: (state, data) => {
      state.declarePoorSuccessList = data
    },
  },
  actions: {
  },
  modules: {
  }
})
