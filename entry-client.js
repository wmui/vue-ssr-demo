import Vue from 'vue';
import App from './App.vue';
import createStore from './store/index.js';

function createApp() {
  const store = createStore();
  const app = new Vue({
      store,
      render: h => h(App)
  });
  return {app, store}
}

const { app, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

app.$mount('#app');
