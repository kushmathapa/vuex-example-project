import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increaseByValue(state, payload) {
      state.counter = state.counter + payload.value;
      console.log(state.counter);
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increaseByValue(context, payload) {
      console.log(payload);
      setTimeout(() => {
        context.commit('increaseByValue', payload);
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      console.log('I am here in final counter');
      return state.counter;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      console.log('I am here in normalized counter');
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
