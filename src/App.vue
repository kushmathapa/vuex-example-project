<template>
  <BaseContainer title="Vuex">
    <TheCounter />
    <button @click="counterIncrement">Add 1</button></BaseContainer
  >
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
  },
  methods: {
    counterIncrement() {
      this.$store.state.counter++;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
