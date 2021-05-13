import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isInit: false,
    lastPage: 'none',
    currentPage: 'none',
    models:
    {
      LittlestTokyo: {
        path: "./static/LittlestTokyo.glb",
        //path: require("../assets/models/LittlestTokyo.glb")
      },
      LittlestTokyo2: {
        path: "./static/LittlestTokyo.glb",
        //path: require("../assets/models/LittlestTokyo.glb")
      }
    }
  },
  mutations: {
    //設定頁面
    setCurrentPage(state, content) {
      state.lastPage = state.currentPage;
      state.currentPage = content.name;
      if (state.currentPage == "Init") {
        state.isInit = true;
      }
      console.log("============ state.currentPage:" + state.currentPage + "(isInit:" + state.isInit + ") =====================")
    }
  },
  actions: {
  },
  modules: {
  }
})
