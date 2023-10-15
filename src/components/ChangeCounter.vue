<template>
  <button @click="incrementCounter">Increment by 1</button>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.commit('increment');
    },
  },
};
</script>
