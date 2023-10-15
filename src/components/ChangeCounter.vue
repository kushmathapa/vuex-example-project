<template>
  <button @click="incrementCounter">Increment by 5</button>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.commit('increaseByValue', { value: 7 });
    },
  },
};
</script>
