<template>
  <TheToaster ref="toaster" />
  <p>
    <button type="button" @click="handleSuccessClick">Add Success Message</button>
    <button type="button" @click="handleErrorClick">Add Error Message</button>
  </p>
</template>

<script>
import TheToaster from './components/TheToaster.vue';

export default {
  name: 'App',

  components: { TheToaster },

  methods: {
    handleSuccessClick() {
      this.$refs.toaster.success();
    },

    handleErrorClick() {
      this.$refs.toaster.error();
    },
  },
};
</script>
