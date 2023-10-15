<template>
  <button @click="incrementCounter">Increment by 1</button>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.state.counter = this.$store.state.counter + 1;
    },
  },
};
</script>
