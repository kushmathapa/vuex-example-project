<template>
  <button @click="incrementCounter">Increment by 7</button>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.dispatch('increaseByValue', { value: 7 });
    },
  },
};
</script>
