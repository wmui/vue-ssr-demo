import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {
      article: {}
    },
    actions: {
      async GET_ARTICLE({commit}) {
        const {data} = await axios.get('https://www.86886.wang/api/article/5b38d0098c98760acf25bfac')
        commit('SET_ARTICLE', data)
      }
    },
    mutations: {
      SET_ARTICLE(state, data) {
        state.article = data.data
        // console.log(state.article)
      }
    }
  })
}