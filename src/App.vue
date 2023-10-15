<template>
  <BaseContainer title="Vuex">
    <TheCounter />
    <FavouriteNumber />
    <Button @click="counterIncrement">Add by 2</Button>
    <ChangeCounter />
  </BaseContainer>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteNumber from './components/FavouriteNumber.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteNumber,
  },
  methods: {
    counterIncrement() {
      this.$store.dispatch('increment');
      console.log('App.vue methods');
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
